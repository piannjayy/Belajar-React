import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button';

const DetailView = ({ detail }) => {
  console.log(detail);

  return (
    <div className="max-w-5xl mx-auto bg-base-100 rounded-xl shadow-md overflow-hidden p-6">
      <div className=""><Link to="/list" className="btn btn-sm btn-circle">
              ✕
            </Link></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img
            src={detail.images?.[0]}
            alt={detail.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{detail.title}</h1>
          <p className="text-gray-600">{detail.description}</p>
          <p className="text-2xl font-semibold text-primary">
            ${detail.price}
          </p>
          <div className="mt-4">
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(DetailView)
