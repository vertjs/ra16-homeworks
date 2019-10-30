import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { REFRESH_DETAILS } from '../actions/actionTypes'
import { refreshDetailsRequest } from '../actions/actionCreators'
import { of } from 'rxjs';

export const changeSearchEpic = action$ => action$.pipe(
    ofType(REFRESH_DETAILS),
    map(o => o.payload.id),
    
)