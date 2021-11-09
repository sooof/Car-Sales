export const ADD_FEATURE = 'ADD_FEATURE'

export const addedFeature = (feature) => {
    return {type: "ADD_FEATURE", payload: feature}
}