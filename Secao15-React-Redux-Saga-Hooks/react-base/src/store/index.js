import { createStore } from 'redux';

import rootReduce from './modules/rootReduce';

const store = createStore(rootReduce);

export default store;
