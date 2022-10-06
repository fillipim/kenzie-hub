import api from "."

export const post = (data, route) => {

    const response = api.post(route, data)
        .then(res => res)
        .catch(err => err.response)

    return response;
}

export const get = (id, route) => {
    const response = api.get(`${route}/${id}`)
        .then(res => res.data)
        .catch(err => err)

    return response
}