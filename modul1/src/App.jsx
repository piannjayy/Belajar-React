import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("https://restaurant-api.dicoding.dev/list");
        const json = await response.json();
        setData(json.restaurants); // karena struktur JSON punya key "restaurants"
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Daftar Restoran</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <p>Kota: {item.city}</p>
            <p>Rating: {item.rating}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
