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