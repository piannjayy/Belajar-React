import React, { useContext } from 'react'
import TranslateContext from '../../context/TranslateContext';

const HomeView = () => {

    const {isIndonesia, setIsIndonesia} = useContext(TranslateContext);

    console.log(isIndonesia)

    const klikDisini = () => {
        setIsIndonesia(!isIndonesia);
    }

  return (
    <div>
        <button onClick={klikDisini}>Translate</button>
        <div className="">
            {isIndonesia ? "Indonesia" : "English"}
        </div>
    </div>
  )
}

export default HomeView