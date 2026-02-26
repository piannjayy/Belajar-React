import React, { useEffect } from 'react'
import ListView from './ListView'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {

    const listGetter = useSelector((state) => state.list.list);

    const listSetter = useDispatch();

    const ambil = async () =>{
        const rest = await fetch("https://restaurant-api.dicoding.dev/list");
        const data = await rest.json();
        listSetter({ type: "ADD_LIST", payload: data?.restaurants });
    };

    useEffect(() => {
        ambil();
    }, []);
    
    

  return (
    <div>
        <ListView makan={listGetter} />
    </div>
  )
}

export default List