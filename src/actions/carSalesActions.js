// action types

export const ADD_CAR_FEATURE = 'ADD_CAR_FEATURE'
export const REMOVE_CAR_FEATURE = 'REMOVE_CAR_FEATURE'
export const TOTAL_CAR_PRICE = 'TOTAL_CAR_PRICE'


// action creator
export const addCarFeature = (data) => {
    return { type: ADD_CAR_FEATURE, payload: data } //action object
}

export const removeCarFeature = (data) => {
    console.log('remove feature action fired', data)
    return { type: REMOVE_CAR_FEATURE, payload: data } //action object
}

export const totalCarPrice = (data) => {
    return { type: TOTAL_CAR_PRICE, payload: data } //action object
}