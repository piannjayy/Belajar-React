import React, { useEffect, useReducer } from "react";
import SemuaView from "./SemuaView";
import { useSearchParams } from "react-router-dom";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducerSemua = (state, action) => {
  switch (action.tipe) {
    case "BISA":
      return {
        ...state,
        data: action.isi,
        loading: false,
      };
    case "TIDAKBISA":
      return {
        ...state,
        error: action.isi,
        loading: false,
      };
    default:
      console.log("error" + action.tipe);
  }
};

const Semua = () => {
  const [state, setState] = useReducer(reducerSemua, initialState);
  const [cari, setCari] = useSearchParams();
  const q = cari.get("q");

  const ambilData = async (tangkap) => {
    try {
      const kirim = await fetch(
        "https://restaurant-api.dicoding.dev/search?q=" + tangkap
      );
      const data = await kirim.json();
      setState({ tipe: "BISA", isi: data?.restaurants });
    } catch (error) {
      setState({ tipe: "TIDAKBISA", isi: error });
    }
  };

  useEffect(() => {
    ambilData(q);
  }, [q]);

  const fungsiperubahan = (isi) => {
    const value = isi.target.value;
    if (value) {
      setCari({ q: value });
    } else {
      setCari({});
    }
  };

  return (
    <div>
      <SemuaView
        list={state?.data}
        loading={state.loading}
        fungsiPerubahan={fungsiperubahan}
        q={q ?? ""}
      />
    </div>
  );
};

export default Semua;
