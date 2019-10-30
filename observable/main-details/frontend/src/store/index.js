import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import detailsReducer from '../reducers/details';
import { changeSearchEpic } from '../epics';

const reducer = combineReducers({
  details: detailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  changeSearchEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

//console.log(store)
epicMiddleware.run(epic);
export default store;