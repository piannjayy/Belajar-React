import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Resto = () => {
  const [data, setData] = useState();

  const ambil = async () => {
    const res = await axios.get("https://restaurant-api.dicoding.dev/list");
    const data = await res.data;
    setData(data);
  };

  useEffect(() => {
    ambil();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Resto</h1>

    <div className="grid grid-cols-3 gap-4">
      {data?.restaurants.map((item) => (
        <div>
          <div className="card bg-white text-black w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={'https://restaurant-api.dicoding.dev/images/large/' + item.pictureId}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}
              </p>
              <div className="card-actions">
                <Link to={"/resto/" + item.id} className="btn btn-primary">Detail</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Resto;
