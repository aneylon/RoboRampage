import { legacy_createStore, applyMiddleware } from "redux";

const store = legacy_createStore(rootReducer);

export default store;
