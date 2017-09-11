function activeCategory (state={}, action) {
    switch(action.type) {
        case 'CATEGORY_SELECTED':
        const { title } = action.category

        return {
            active: title,
        }
        default:
    return state;
    }
}

export default activeCategory