import { getLocalStorageData, setLocalStorageData } from "../../utils/helper";
import { SET_MESSAGE, SET_SELECTED_BOT } from "../constants";

export const saveMessage = (msg, bot) => {
    setLocalStorageData(msg, bot)
    return {
        type: SET_MESSAGE,
        payload: msg
    }
}

export const setSelectedBot = (bot) => {
    let data = getLocalStorageData(bot)
    return {
        type: SET_SELECTED_BOT,
        payload: { bot, data }
    }
}