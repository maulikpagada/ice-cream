import { deleteRequest, getRequest, postRequest, putRequest } from "../request"

export const fetchicecream = () => {
    return getRequest('icecream/')
}

export const Addicecream = (data) => {
    return postRequest('icecream/', data)
}

export const Editicecream = (data) => {
    return putRequest('icecream/', data)
}

export const Deleteicecream = (id) => {
    return deleteRequest('icecream/', id)
}