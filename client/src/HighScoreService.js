const baseUrl = "http://127.0.0.1:5000/api/highScores/"

export const getUser = (username) => {
    return fetch(baseUrl + username)
    .then(res => res.json())
}

export const createUser = (payload) => {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{'Content-type':'application/json'}
    })
    .then(res => res.json())
}

export const updateUser = (user) => {
    return fetch(baseUrl + user._id, {
        method:'PUT',
        body: JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json)
}
//for sign-in, maybe get individual user, if result is none, create User, else return that there is already a problem
//post highscore