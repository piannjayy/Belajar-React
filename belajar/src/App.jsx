import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [mobil, setMobil] = useState();
  const [mobilDetail, setMobilDetail] = useState();

  const fethCars = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();
    setMobil(data);
  };

  const fetchDetail = async () => {
    const responseDetail = await fetch("https://dummyjson.com/carts/1");
    const dataDetail = await responseDetail.json();
    setMobilDetail(dataDetail);
  };

  useEffect(() => {
    fethCars();
    fetchDetail();
  }, []);

  console.log(mobilDetail);

  return (
    <>
      <div>
        <Card />

        <div className="">
          {mobilDetail?.discountedTotal}
          {mobilDetail?.products.map((detil)=>(
            <div className="">
              <img src={detil.thumbnail} alt="" />
              </div>
          ))}
          </div>
          <hr />
          <hr />
      </div>
      <div>
        <div className="">
          {mobil?.carts.map((data) => (
            <div className="">
              total = {data.total}
              total Products = {data.totalProducts}
              total quantity = {data.totalQuantity}
              user id = {data.userId}
              <div className="">
                {data?.products.map((atas) => (
                  <div className="">
                    <img
                      src={atas.thumbnail}
                      alt="https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;