import React, { useCallback, useEffect, useReducer, useState } from "react";
import AboutView from "./AboutView";

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


const About = () => {
//   const [data, setData] = useState();
const [state, dispatch] = useReducer(reducer, initialState)
  const [hitung, setHitung] = useState(1);

  const ambil = useCallback(async () => {
    const kirim = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await kirim.json();
    // setData(data);
    dispatch({type : "BERHASIL", payload: data});
  }, []);

  useEffect(() => {
    ambil();
  }, []);

  return (
    <div>
      <button onClick={() => setHitung(hitung + 1)} className="btn btn-primary">
        klik sayaa {hitung}
      </button>
      <AboutView todos={state} />
    </div>
  );
};

export default About;
