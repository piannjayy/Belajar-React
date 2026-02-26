import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  console.log(id);

  const ambil = async () => {
    const res = await axios.get(
      "https://restaurant-api.dicoding.dev/detail/" + id
    );
    const data = await res.data;
    setData(data);
  };

  useEffect(() => {
    ambil();
  }, [id]);

  console.log(data);

  return (
    <div>
        <div className="grid gap-5">
      <h1>Detail</h1>
      <h1>{data?.restaurant.name}</h1>
      <img
        src={
            "https://restaurant-api.dicoding.dev/images/large/" +
            data?.restaurant?.pictureId
        }
        alt="Shoes"
        className="rounded-xl"
      />
      <hr />
      <h1>Description</h1>
      <p>{data?.restaurant.description}</p>
      <p>kota : {data?.restaurant.city}</p>
      <p>Tempat : {data?.restaurant.address}</p>
      <hr />
      <h3>Kategori</h3>
      <ul>
        {data?.restaurant?.categories.map((cat, idx) => (
          <li key={idx}>{cat.name}</li>
        ))}
      </ul>
      <hr />
      <h3>Makanan</h3>
      <ul>
        {data?.restaurant?.menus.foods.map((food, idx) => (
            <li key={idx}>{food.name}</li>
        ))}
      </ul>
      <hr />
      <h3>Minuman</h3>
      <ul>
        {data?.restaurant?.menus.drinks.map((drink, idx) => (
            <li key={idx}>{drink.name}</li>
        ))}
      </ul>
      <hr />
        </div>
        <Link to={"/cari-resto"} className="btn btn-primary">kembali</Link>
    </div>
  );
};

export default Detail;
