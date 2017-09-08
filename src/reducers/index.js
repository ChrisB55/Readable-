import { combineReducers } from 'redux';
import CategoryReducer from './reducer_categories';
import ActiveCategory from './reducer_active_categories';

const rootReducer = combineReducers ({
    categories: CategoryReducer,
    activeCategory: ActiveCategory
});

export default rootReducer;