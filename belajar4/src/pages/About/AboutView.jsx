import React, { useContext } from 'react'
import TemaContext from '../../context/TemaContext';

const AboutView = () => {

    const {isTema, setIsTema} = useContext(TemaContext);

    const ubahGelap = () => {
        setIsTema("gelap")
    }
    const ubahTerang= () => {
        setIsTema("terang")
    }

    const ubahTema = (isi) => {
        setIsTema(isi);
    }

  return (
    <div>
        <h1>
            {isTema}
        </h1>
        <button onClick={()=> ubahTema("terang")}>terang</button>
        <button onClick={()=> ubahTema("gelap")}>gelap</button>
        <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nulla reprehenderit maiores doloremque cum! Omnis optio ullam tempore consequuntur incidunt.</div>
    </div>
  )
}

export default AboutView