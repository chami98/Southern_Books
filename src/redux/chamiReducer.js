
const _initState = {
    name : 'Chamikara',
    girlFriends : [
        {
            name : "Anu",
            age : 23,
            education : 'UG',
            priority : 5,
        },
        {
            name : "Navo",
            age : 23,
            education : 'UG',
            priority : 74,
        }
    ],
}

export const chamiReducer = (state = _initState, action) => {
    switch(action?.type) {

        case "ADD_NEW_GF": {
            return {
                ...state,
                girlFriends: [...state.girlFriends, action.payload]
            }
        }

        case "REMOVE_GF": {
            const girls = state.girlFriends.slice(1,  state.girlFriends.length)

            return {
                ...state,
                girlFriends: [...girls]
            }
        }

        default:
            return state
    }
}