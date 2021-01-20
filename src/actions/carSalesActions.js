// action types

export const ADD_CAR_FEATURE = 'ADD_CAR_FEATURE'
export const REMOVE_CAR_FEATURE = 'REMOVE_CAR_FEATURE'


// action creator
export const addCarFeature = (data) => {
    return { type: ADD_CAR_FEATURE, payload: data } //action object
}

export const removeCarFeature = (data) => {
    console.log('remove feature action fired', data)
    return { type: REMOVE_CAR_FEATURE, payload: data } //action object
}