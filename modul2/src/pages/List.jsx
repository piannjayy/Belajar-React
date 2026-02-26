import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const ambil = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
    const data = await res.data;
    setData(data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    ambil();
  }, []);

  if (loading) {
    return <div>Loading......</div>
  }

  console.log(data);

  return (
    <div>
      <h1>List</h1>
      <div className="grid grid-cols-3 gap-5">
        {data?.products.map((item) => (
          <div>
            <div className="card bg-white text-black w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={item.thumbnail}  
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions">
                  <Link to={"/List/" + item.id} className="btn btn-primary">
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

export default List;
