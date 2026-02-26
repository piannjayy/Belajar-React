import React, { useEffect, useState } from 'react'

const Maps = () => {
    const [data, setData] = useState();

    const ambil = async () => {
        const kirim = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await kirim.json();
        setData(data);
    };

    useEffect(() => {
        ambil();
    }, []);

    console.log(data);

  return (
    <div>
        <div>
            {data?.map((d)=>(
                <div >
                    {d.title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Maps