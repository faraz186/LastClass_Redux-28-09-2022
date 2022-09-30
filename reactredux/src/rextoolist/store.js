import rootReducer from "./reducer/index";

import {createStore} from "redux";

const store = createStore(rootReducer);

export default store;

