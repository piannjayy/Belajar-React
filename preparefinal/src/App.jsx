import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0)
  const [ListMovie, setListMovie] = useState();
  const [ListMovieAxios, setListMovieAxios] = useState();

  const ambilMovieAxios = async () => {
    const responAxios = await axios.get("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        accept: "Application/json",
        Authorization: "Bearer " + import.meta.env.VITE_KEY_TMDB,
      },
    })
    const data = await responAxios.data;
    setListMovieAxios(data);
  }

  const ambilFilmlist = async () => {
    const respon = await fetch("https://api.themoviedb.org/3/discover/movie", {
      method: "GET",
      headers: {
        accept: "Application/json",
        Authorization: "Bearer " + import.meta.env.VITE_KEY_TMDB,
      },
    });
    const data = await respon.json();
    setListMovie(data);
  };

  useEffect(() => {
    ambilMovieAxios();
  }, []);

  console.log(ListMovieAxios);

  return (
    <>
      <div className=""></div>
    </>
  );
}

export default App;
