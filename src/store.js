import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer} from './reducers';
//first argument for createStore is going to be rootReducer
///second argument is an enhancer , typicall known as middleware, thunk is always the first middleware 
export const store = createStore(rootReducer, applyMiddleware(thunk))
