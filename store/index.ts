import { RootState, reducer} from './reducers';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkDispatch } from "redux-thunk";


const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });




