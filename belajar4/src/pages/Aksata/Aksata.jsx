import React from 'react'
import AksataView from './AksataView'
import { useDispatch, useSelector } from 'react-redux'

const Aksata = () => {
    const bahasaGetter = useSelector((state)=>state.bahasa.bahasa);
    const temaGetter = useSelector((state)=>state.tema.tema);
    const bahasaSetter = useDispatch();
    const temaSetter = useDispatch();

    console.log(bahasaGetter)


  return (
    <div>
        <div>{bahasaGetter}</div>
        <div>{temaGetter}</div>
        <button onClick={()=>bahasaSetter({type:"GANTI_BAHASA", payload : "Alexandra"})}>Alexandra</button>
        <button onClick={()=>bahasaSetter({type:"GANTI_BAHASA", payload : "Malang"})}>Malang</button>
        <button onClick={()=>bahasaSetter({type:"GANTI_TEMA", payload : "Gelap"})}>gelap</button>
        <button onClick={()=>bahasaSetter({type:"GANTI_TEMA", payload : "terang"})}>terang</button>
        <AksataView />
    </div>
  )
}

export default Aksata;