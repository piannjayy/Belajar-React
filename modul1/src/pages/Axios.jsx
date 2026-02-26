import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const details = async () => {
        try {
            const response = await 
            axios.get("https://restaurant-api.dicoding.dev/detail/rqdv5juczeskfw1e867");
            const data = await response.data;
            setData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        details();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(data);

  return (
    <div>
        <h1>Axios</h1>
        <h1>{data?.restaurant?.name}</h1>
        <p>{data?.restaurant?.description}</p>
        <p>Kota: {data?.restaurant?.city}</p>
        <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${data?.restaurant?.pictureId}`}
        alt={data?.restaurant?.name}
        />
        <h2>Menu Makanan : </h2>
        <ul>
            {data?.restaurant?.menus?.foods?.map((food) => (
                <li key={food.name}>{food.name}</li>
            ))}
        </ul>

        <h2>Menu Minuman : </h2>
        <ul>
            {data?.restaurant?.menus?.drinks?.map((drink) => (
                <li key={drink.name}>{drink.name}</li>
            ))}
        </ul>
        <hr />
    </div>
  )
}

export default Axios