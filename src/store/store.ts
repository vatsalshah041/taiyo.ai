// src/store.ts
import { legacy_createStore as createStore} from 'redux'
import rootReducer from '../reducers';// The index.ts file from the snippet above

const store = createStore(rootReducer); // rootReducer is a placeholder for your combined reducers

export default store;
