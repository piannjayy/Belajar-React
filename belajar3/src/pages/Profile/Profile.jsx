import React, { useCallback, useState } from "react";

const Anak = React.memo(({ onClick }) => {
  console.log("anak render");
  return (
    <div className="">
      <button onClick={onClick} className="btn">
        Klik Anak
      </button>
    </div>
  );
});

const Profile = () => {
  const [hitung, setHitung] = useState(0);

  const fungsiKlik = useCallback(() => {
    console.log("Fungsi klik");
  }, []);

  return (
    <div>
      <div className="">
        <button
          onClick={() => setHitung(hitung + 1)}
          className="btn btn-soft btn-primary btn-md"
        >
          Tambah {hitung}
        </button>

        <Anak onClick={fungsiKlik} />
      </div>
    </div>
  );
};

export default Profile;
