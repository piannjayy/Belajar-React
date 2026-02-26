import React, { useCallback, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import DetailView from './DetailView';

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

const Detail = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { slug } = useParams();
    
        const ambil = useCallback( async () => {
            try {
                const kirim = await fetch("https://api.escuelajs.co/api/v1/products/slug/" + slug);
            const data = await kirim.json();
            dispatch({type: "BERHASIL", payload: data});
            } catch (error) {
                dispatch({type: "GAGAL", payload: error});
            }
        }, []);
    
        useEffect(() => {
            ambil();
        }, [slug]);

  return (
    <div>
        <DetailView detail={state.data} />
    </div>
  )
}

export default Detail