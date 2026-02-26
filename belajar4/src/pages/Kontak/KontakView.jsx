import React, { useContext } from 'react'
import RegionContext from '../../context/RegionContext';

const KontakView = () => {

    const { isRegion, setIsRegion } = useContext(RegionContext);

    const ubahRegion = () => {
        setIsRegion("Indonesia");
    }

    const ubahRegion2 = () => {
        setIsRegion("Malaysia");
    }

  return (
    <div>
        <h1>Kontak</h1>
        <h1>{isRegion}</h1>
        <button onClick={ubahRegion}>Indonesia</button>
        <button onClick={ubahRegion2}>Malaysia</button>
        
    </div>
  )
}

export default KontakView