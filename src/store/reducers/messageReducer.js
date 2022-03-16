import { SET_MESSAGE, SET_SELECTED_BOT } from "../constants"

const initialState = { messages: [], selectedBot: null }
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            let msgArr = [...state.messages, action.payload]
            return {
                ...state,
                messages: msgArr
            }
        case SET_SELECTED_BOT:
            let data = action.payload.data
            return {
                ...state,
                messages: data,
                selectedBot: action.payload.bot
            }
        default:
            return state
    }
}

export default messageReducer