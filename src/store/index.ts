import { createStore, combineReducers } from 'redux';
import { bingoReducer } from './bingo/reducers';

const rootReducer = combineReducers({
  bingo: bingoReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
