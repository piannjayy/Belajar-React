import React from "react";

const Button = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary w-full text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Buy Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Pleasee</h3>
          <p className="py-4">Follow IG : abcdomzz </p>
        </div>
      </dialog>
    </div>
  );
};

export default Button;
