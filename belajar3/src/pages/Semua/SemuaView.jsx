import React, { memo } from "react";

const SemuaView = ({ list, loading, fungsiPerubahan, q }) => {
  console.log(list);

  return (
    <div>
      <input className="input input-primary " type="search" onChange={fungsiPerubahan} value={q} />

      {loading ?? "masih loading!!"}

      <div className="">
        {list?.map((item) => {
          return (
            <div className="">
              <h1 className="">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(SemuaView);
