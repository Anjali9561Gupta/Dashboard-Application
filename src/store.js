import { createStore } from 'redux';
import dashboardReducer from './reducer';

const store = createStore(dashboardReducer, {
  categories: [
    {
      id: '1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'w1', name: 'Widget 1', text: 'Random text for Widget 1' },
        { id: 'w2', name: 'Widget 2', text: 'Random text for Widget 2' }
      ]
    }
  ]
});

export default store;