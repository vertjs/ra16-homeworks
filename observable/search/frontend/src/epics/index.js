import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from '../actions/actionTypes';
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const changeSearchEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    tap(o => console.log(o)),
    map(o => o.payload.search.trim()),
    tap(o => console.log(o)),
    filter(o => o !== ''),
    tap(o => console.log(o)),
    debounceTime(100),
    map(o => searchSkillsRequest(o))
)

export const searchSkillsEpic = action$ => action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    map(o => o.payload.search),
    //tap(o => console.log(o)),
    map(o => new URLSearchParams({ q: o })),
    //tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`).pipe(
        retry(3),
        map(o => {
          console.log('from map', o)
          return searchSkillsSuccess(o)
        }),
        tap(o => console.log(o)),
        catchError(e => {
          console.log('from error', e)
          of(searchSkillsFailure(e))
        }),
        tap(o => console.log('after switch map', o))
    )),
);
