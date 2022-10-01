export const parseUserFriends = (friends) => {
    if(friends.length <= 0) {
        return null
    }
    else {
        const parsedData = friends.split('&')
        return parsedData.map(data => Number(data))
    }
}