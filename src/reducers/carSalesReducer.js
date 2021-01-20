
import { ADD_CAR_FEATURE, REMOVE_CAR_FEATURE } from '../actions/carSalesActions';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

// 1. User should be able to add features to the car
//    - Onclick of Add button, should add feature to state.
//    - Onlick should send feature from additional feature to features
// 2. User should be able to remove added features from the car
//    - Onclick of Remove button, should remove exact feature from state
// 3. Total should update as user adds and removes features from the car


export const carSalesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR_FEATURE:
            // return {
            //     ...state, 
            //     features: state.additionalFeatures.map((additionalFeature) => {
            //         if (additionalFeature.id == action.payload) {
            //             console.log('log')
            //             return {
            //                 features: state.car.features.push(additionalFeature),
            //             }
            //         }
            //         else return additionalFeature;
            //     })
            // }
            return {
                ...state,
                car: {
                    ...state.car, 
                    features: state.car.features.concat(state.additionalFeatures.filter(x => x.id == action.payload))
                }
            }
        case REMOVE_CAR_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car, 
                    features: state.car.features.filter(x => x.id !== action.payload)
                }
            }
        default:
            return state;
    }
};