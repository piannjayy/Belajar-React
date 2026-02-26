import React, { useEffect, useState } from 'react'

const Post = () => {
    const [data, setData] = useState();
    const ambil = async () => {
        const kirim = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await kirim.json();
        setData(data);
    }

    useEffect(() => {
        ambil();
    }, []);

    console.log(data);

  return (
    <div>
        <div>
            {data?.map((item)=>(
                <div >
                    userId = {item.userId}, title = {item.title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Post