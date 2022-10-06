import api from "."

export const singIn = (data, setIsload) => {
    const response = api.post("/sessions", data)
        .then(res => {
            setIsload(false)
            return res
        })
        .catch(err => {
            setIsload(false)
            return err.response
        })

    return response;

}