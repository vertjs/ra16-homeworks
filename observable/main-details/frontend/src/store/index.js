import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import detailsReducer from '../reducers/details';
import { refreshDetailsEpic, searchDataEpic, refreshItemsEpic } from '../epics';

const reducer = combineReducers({
  details: detailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic1 = combineEpics(
  refreshDetailsEpic,
  searchDataEpic
);

const epic2 = combineEpics(
  refreshItemsEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

//console.log(reducer.details)
epicMiddleware.run(epic1);
epicMiddleware.run(epic2);
export default store;