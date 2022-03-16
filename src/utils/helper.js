export const setLocalStorageData = (msg, botName) => {
    let chatData = (getLocalStorageData(botName) || [])
    chatData.push(msg)
    localStorage.setItem(botName, JSON.stringify(chatData))
}

export const getLocalStorageData = (botName) => {
    let data = localStorage.getItem(botName)
    return JSON.parse(data) || []
}