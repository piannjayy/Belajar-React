import React, { useEffect, useState } from 'react'

const Fecth = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      
    const response = await fetch("https://restaurant-api.dicoding.dev/list");
    const data = await response.json();
    setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(data);

  return (
    <div>
      <h1>Fetch</h1>
      <div>
        {data?.restaurants?.map((item) => (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.city}</p>
    <img 
      src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`} 
      alt={item.name} 
    />
  </div>
))}

      </div>
    </div>
  )
}

export default Fecth