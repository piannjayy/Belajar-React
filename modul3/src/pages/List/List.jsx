import React, { useCallback, useEffect, useReducer } from 'react'
import ListView from './ListView';

const initialState = {
    data: [],
    loading: true,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'BERHASIL':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
            case 'GAGAL':
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
                    data: [],
                };
            default:
                throw new Error("Error disini bang" + action.type);
    }
}

const List = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const ambil = useCallback( async () => {
        try {
            const kirim = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await kirim.json();
        dispatch({type: "BERHASIL", payload: data});
        } catch (error) {
            dispatch({type: "GAGAL", payload: error});
        }
    }, []);

    useEffect(() => {
        ambil();
    }, []);


  return (
    <div>
        <ListView product={state.data}  />
    </div>
  )
}

export default List