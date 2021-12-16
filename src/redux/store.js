//Common imports for all redux files
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// custom files
import rootReducer from "./rootReducer";

// lodash
import throttle from "lodash/throttle";

// Saga files import and creations
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas/home";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);
 
// To run middileware(saga)
sagaMiddleware.run(rootSaga);

export default store;







