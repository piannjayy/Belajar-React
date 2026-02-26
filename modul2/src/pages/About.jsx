import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis
        consequatur dolore exercitationem libero et dolorem provident, mollitia
        asperiores unde. Beatae impedit omnis nemo debitis ut repellat quos
        dolorum necessitatibus porro expedita ab sint reprehenderit modi
        voluptates hic dolor laboriosam aut cum exercitationem officia tempora,
        natus dolores. Fugit hic non similique ipsa, nisi voluptates at
        aspernatur voluptas quas asperiores molestias pariatur, cupiditate
        possimus maxime. Eius consequatur nam sint officia? Maiores?
      </p>
      <label className="swap swap-flip text-9xl">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
    </div>
  );
};

export default About;
