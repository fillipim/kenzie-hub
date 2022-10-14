import * as yup from "yup"

export const addTechSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório")
})
