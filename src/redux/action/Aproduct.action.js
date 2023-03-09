import { Addicecream, Deleteicecream, Editicecream, fetchicecream } from '../../common/apis/Aproduct.apis'
import { db } from '../../firebase';
import * as ActionTypes from '../ActionTypes'
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";


export const geticecream = () => async (dispatch) => {
    try {
        // fetchicecream()
        // .then((response) => dispatch({type: ActionTypes.ICECREAM_GET, payload: response.data}))

        const querySnapshot = await getDocs(collection(db, "icecream"));

        let data = []

        querySnapshot.forEach((doc) => {

            data.push({
                id: doc.id,
                ...doc.data()
            })

            dispatch({ type: ActionTypes.ICECREAM_GET, payload: data })
        });
    } catch (error) {

    }
}

export const posticecream = (data) => async (dispatch) => {
    try {
        // Addicecream(data)
        //     .then((response) => dispatch({type: ActionTypes.ICECREAM_ADD, payload: response.data}))


        const docRef = await addDoc(collection(db, "icecream"), data);

        dispatch({ type: ActionTypes.ICECREAM_ADD, payload: { id: docRef.id, ...data } })

    } catch (error) {

    }
}

export const puticecream = (data) => async(dispatch) => {
    try {
        // Editicecream(data)
        //     .then((response) => dispatch({type: ActionTypes.ICECREAM_UPDATE, payload: response.data}))
    
        const icecreamRef = doc(db, "icecream", data.id);  

        await updateDoc(icecreamRef, data);

        dispatch({type: ActionTypes.ICECREAM_UPDATE, payload:data})
    } catch (error) {

    }
}

export const deleteicecream = (id) => async (dispatch) => {
    try {
        // Deleteicecream(id)
        //     .then(() => dispatch({type: ActionTypes.ICECREAM_DELETE, payload: id}))

        await deleteDoc(doc(db, "icecream", id));

        dispatch({type: ActionTypes.ICECREAM_DELETE, payload: id})
        
    } catch (error) {

    }
}