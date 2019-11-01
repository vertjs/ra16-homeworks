import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import detailsReducer from '../reducers/details';
import { refreshDetailsEpic, searchDataEpic } from '../epics';

const reducer = combineReducers({
  details: detailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  refreshDetailsEpic,
  searchDataEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

//console.log(reducer.details)
epicMiddleware.run(epic);
export default store;