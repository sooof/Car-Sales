import {ADD_FEATURE} from './actions'

const initialstate = {
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
};

export const reducer  = (state = initialstate, action) => {
    console.log("reduce action", action)
    switch(action.type){
        case ADD_FEATURE:
            console.log("fired")
            return {
                ...state,
                    additionalPrice: state.additionalPrice + action.payload.price ,
                car : {...state.car,
                        features :[ ...state.car.features, action.payload]
                    },
                additionalFeatures : state.additionalFeatures.filter(item => item.id != action.payload.id)
            };
        default:
            return state
    }
}