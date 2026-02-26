import React, { useCallback, useEffect, useReducer } from 'react'

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
            case 'GAGAGL':
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

const Kontak = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const ambil = useCallback (async () => {
        const kirim = await fetch("https://restaurant-api.dicoding.dev/list");
        const data = await kirim.json();
        // setResto(data.restaurants);
        dispatch({type: "BERHASIL", payload: data.restaurants});
    }, []); 

    useEffect(() =>{
        ambil();
    }, []);

    console.log(state)

  return (
    <div>
        <div className="">
            <div className="card card-dash card-sm">
            {state?.data?.map((item) => {
                return(
                        <div className="">
                            <h1 className="">{item.name}</h1>
                            </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Kontak