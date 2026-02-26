import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";


const Cari = () => {
  const [cariResto, setCariResto] = useSearchParams();
  const [data, setData] = useState();
  const q = cariResto.get("q");

  const ambil = async (datacari) => {
    const res = await axios.get(
      "https://restaurant-api.dicoding.dev/search?q=" + datacari
    );
    const data = await res.data;
    setData(data);
  };

  const fungsipencarian = (isi) => {
    const isian = isi.target.value;
    if (isian) {
      setCariResto({ q: isian });
    } else {
      setCariResto({});
    }
  };

  useEffect(() => {
    ambil(q);
  }, [q]);

  console.log(data);

  return (
    <div>
      <div className="">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Search</legend>
          <input
            value={q}
            onChange={fungsipencarian}
            type="text"
            className="input"
            placeholder="Type here"
          />
          <p className="label">Optional</p>
        </fieldset>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data?.restaurants.map((item) => (
          <div>
            <div className="card bg-white text-black w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={
                    "https://restaurant-api.dicoding.dev/images/large/" +
                    item.pictureId
                  }
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions">
                  <Link to={"/resto/" + item.id} className="btn btn-primary">
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cari;
