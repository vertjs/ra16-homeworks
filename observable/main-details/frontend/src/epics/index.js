import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { REFRESH_DETAILS, SEARCH_DETAILS_REQUEST, REFRESH_ITEMS } from '../actions/actionTypes'
import { searchDetailsRequest, searchDetailsSuccess, searchDetailsFailure, searchItemsSuccess, searchItemsRequest } from '../actions/actionCreators'
import { of } from 'rxjs';

export const refreshDetailsEpic = action$ => action$.pipe(
    ofType(REFRESH_DETAILS),
    map(o => o.payload.search),
    tap(o => console.log(o)),
    filter(o => o !== ''),
    debounceTime(100),
    map(o => searchDetailsRequest(o))
)

export const searchDataEpic = action$ => action$.pipe(
    ofType(SEARCH_DETAILS_REQUEST),
    map(o => o.payload.search),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}/${o}`).pipe(
        retry(3),
        map(o => {
            console.log('from map', o)
            return searchDetailsSuccess(o);
        }),
        catchError(err => {
            console.log('error in source. Details: ' + err)
            return of(searchDetailsFailure(err));
        })
    )),
)

/* обновление главной страницы при ошибке*/

export const refreshItemsEpic = action$ => action$.pipe(
    ofType(REFRESH_ITEMS),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}`).pipe(
        retry(3),
        map(o => {
            console.log('from map', o)
            return searchItemsSuccess(o)
        }),
        tap(o => console.log(o)),
        catchError(e => {
            console.log('from error', e)
            of(searchDetailsFailure(e))
        })
    )),
)