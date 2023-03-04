import { Addicecream, Deleteicecream, Editicecream, fetchicecream } from '../../common/apis/Aproduct.apis'
import * as ActionTypes from '../ActionTypes'

export const  geticecream = () => (dispatch) => {
    try{
        fetchicecream()
            .then((response) => dispatch({type: ActionTypes.ICECREAM_GET, payload: response.data}))
    } catch (error) {

    }
}

export const  posticecream = (data) => (dispatch) => {
    try{
        Addicecream(data)
            .then((response) => dispatch({type: ActionTypes.ICECREAM_ADD, payload: response.data}))
    } catch (error) {

    }
}

export const puticecream = (data) => (dispatch) => {
    try{
        Editicecream(data)
            .then((response) => dispatch({type: ActionTypes.ICECREAM_UPDATE, payload: response.data}))
    } catch (error) {

    }
}

// export const deleteicecream = (id) => (dispatch) => {
//     console.log(id);
//     try{
//         Deleteicecream(id)
//             .then(() => dispatch({type: ActionTypes.ICECREAM_DELETE, payload:id}))
//     } catch (error) {

//     }
// }   

export const deleteicecream = (id) => (dispatch) => {
    try{
        Deleteicecream(id)
            .then(() => dispatch({type: ActionTypes.ICECREAM_DELETE, payload: id}))
    } catch (error) {

    }
}