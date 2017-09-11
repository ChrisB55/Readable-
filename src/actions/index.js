//import * as readableAPI from '../ReadableAPI';
export const CATEGORY_SELECTED= 'CATEGORY_SELECTED'


export function selectCategory (category) {
    return {
        type:CATEGORY_SELECTED,
        category
    };
}
//action creator, needs to retrun an action, an object with type prop






//const loadCategories = (categories) => ({
  //  type: "LOAD_CATEGORIES",
   // categories
//}); --!>

// loadCategories