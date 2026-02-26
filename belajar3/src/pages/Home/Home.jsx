import React, { useCallback, useEffect, useState } from 'react'
import HomeView from './HomeView';

const Home = () => {
    const [resto, setResto] = useState();
    const [hitung, setHitung] = useState(1);


    const ambil = useCallback (async () => {
        const kirim = await fetch("https://restaurant-api.dicoding.dev/list");
        const data = await kirim.json();
        setResto(data.restaurants);
    }, []); 

    useEffect(() =>{
        ambil();
    }, []);


  return (
    <div>
        <button onClick={() => setHitung(hitung + 1)} className='btn btn-soft btn-primary' >pencet saya {hitung}</button>
        <HomeView namaSaya={"Mabar"} cafe={resto} />
    </div>
  ) 
}

export default Home