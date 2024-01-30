import { createStore } from "redux";
import reducer from "./reducers";
import * as actionCreators from './actions'
import { devToolsEnhancer } from "@redux-devtools/extension";


export default function configureStore() {
    const store = createStore(
        reducer,
        devToolsEnhancer({actionCreators}), 
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    );
    return store;
}