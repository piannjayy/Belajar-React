import React, { useCallback, useEffect, useReducer } from 'react'
import { useSearchParams } from 'react-router-dom';
import SearchView from './SearchView';

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

const Search = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [Golek, setGolek] = useSearchParams();
    const title = Golek.get("title");
    
        const ambil = useCallback( async (ambil) => {
            try {
                const kirim = await fetch("API" + ambil );
            const data = await kirim.json();
            dispatch({type: "BERHASIL", payload: data});
            } catch (error) {
                dispatch({type: "GAGAL", payload: error});
            }
        }, []);
    
        useEffect(() => {
            ambil(title);
        }, [title]);

        const fungsiRubah = (payload) => {
            const value = payload.target.value;
            if (value) {
                setGolek({ title: value });
            } else {
                setGolek({});
            }
        };

  return (
    <div>
        <SearchView product={state.data} search={fungsiRubah} title={title} />
    </div>
  )
}

export default Search