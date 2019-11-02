import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { REFRESH_DETAILS, SEARCH_DETAILS_REQUEST, REFRESH_ITEMS } from '../actions/actionTypes'
import { searchDetailsRequest, searchDetailsSuccess, searchDetailsFailure, refreshItemsRequest } from '../actions/actionCreators'
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
            return searchDetailsSuccess(o)
        }),
        tap(o => console.log(o)),
        catchError(e => {
            console.log('from error', e)
            of(searchDetailsFailure(e))
        })
    )),
)

/* */

export const refreshItemsEpic = action$ => action$.pipe(
    ofType(REFRESH_ITEMS ),
    map(o => o.payload.items),
    tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}`).pipe(
        retry(3),
        map(o => {
            console.log('from map', o)
            return refreshItemsRequest(o)
        }),
        tap(o => console.log(o)),
        catchError(e => {
            console.log('from error', e)
            of(searchDetailsFailure(e))
        })
    )),
)