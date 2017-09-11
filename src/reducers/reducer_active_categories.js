function activeCategory (state={}, action) {
    switch(action.type) {
        case 'CATEGORY_SELECTED':
        const { category } = action
        
        return {
            ...state,
            [category.title]: category,
        }
        default:
    return state;
    }
}

export default activeCategory 