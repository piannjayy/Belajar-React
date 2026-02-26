import React, { memo } from 'react'
import { Link } from 'react-router-dom';

const ListView = ({ product }) => {
    console.log(product);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {product?.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-200 border rounded-xl overflow-hidden"
              >
                <figure>
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg font-semibold line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.description}
                  </p>
                  <p className="font-bold text-lg text-primary mt-2">
                    ${item.price}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={"/detail/" + item.slug}
                      className="btn btn-primary btn-sm"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
  )
}

export default memo(ListView)
