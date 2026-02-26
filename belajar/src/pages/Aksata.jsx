import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Aksata = () => {
    const [data, setData] = useState();
    const [id, setId] = useState(1);

    const tombolNext = () => {
        const next = id + 1;
        if (next > 10) {
            return setId(1);
    }
        return setId(next);
    }

    const ambil = async () => {
        try {
            const kirim = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
        // const data = await kirim.json();
        setData(kirim.data);
        } 
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        ambil();

        // setTimeout(() => {
        //     alert("Data Berhasil Diambil");
        // }, 1000);

    }, [id]); 

    console.log(data);

  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <div>{data?.body}</div>
        <button onClick={tombolNext}>Next</button>
    </div>
  )
}

export default Aksata