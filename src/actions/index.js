export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

// Action Creator
export function addRecipe({day, recipe, meal}) {
    // Action
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

// Action Creator
export function removeFromCalendar({day, meal}) {
    // Action
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}