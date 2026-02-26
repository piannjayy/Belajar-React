import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState();
  const [ loading, setLoading] = useState(true);
  const { id } = useParams();


  const ambil = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/" + id);
    setData(res.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    ambil();
  }, [id]);

  if (loading) {
    return <div>Loading.....</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={data?.thumbnail}
            alt={data?.title}
            className="rounded-xl w-80"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{data?.title}</h2>
          <p className="text-gray-600">{data?.description}</p>

          <div className="divider"></div>

          <div className="grid md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Brand:</span> {data?.brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {data?.category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${data?.price}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {data?.rating}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {data?.stock}
            </p>
          </div>

          <div className="divider"></div>

          <h3 className="font-bold text-lg">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {data?.tags?.map((tag, idx) => (
              <span key={idx} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>

          <div className="divider"></div>

          <h3 className="font-bold text-lg">Reviews</h3>
          <div className="space-y-3">
            {data?.reviews?.map((rev, idx) => (
              <div
                key={idx}
                className="border border-gray-200 p-4 rounded-lg shadow-sm"
              >
                <p className="font-semibold">{rev.reviewerName}</p>
                <p className="text-sm text-gray-500">Rating: {rev.rating}</p>
                <p className="italic text-gray-600">"{rev.comment}"</p>
              </div>
            ))}
          </div>

          <div className="card-actions justify-end mt-6">
            <Link to="/list" className="btn btn-primary">
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
