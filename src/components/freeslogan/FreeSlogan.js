import React, { useState } from "react";
import ShowSlogans from "../pagination/ShowSlogans";
import "./FreeSlogan.css";
import data from "../pagination/mock-data.json";

function FreeSlogan() {
  const [slogans, setSlogans] = useState(data);
  const [slogan, setSlogan] = useState("cozy");
  const [searchSlogan, setSearchSlogan] = useState("");

  const handleChangeSloganFn = (e) => {
    setSearchSlogan(e.target.value);
  };
  const setEmptyFn = () => {
    setSearchSlogan("");
  };

  return (
    <div className="freeSlogans">
      <div className="freeslogan_container">
        <h2 className="freeslogan_container_title">Free slogan maker</h2>
        <p className="freeslogan_container_subtitle">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>

        <p className="freeslogan_search_subtitle">Word for your slogan</p>

        <div className="freeslogan_search_component">
          <input
            placeholder="Example: cozy"
            value={searchSlogan}
            onChange={handleChangeSloganFn}
          />
          {searchSlogan.length ? <span onClick={setEmptyFn}>x</span> : null}
        </div>
        <button
          onClick={() => setSlogan(searchSlogan)}
          className="generate_slogan_btn"
        >
          Generate slogans
        </button>
        {slogans.length ? (
          <>
            <hr />
            <div className="slogans_top">
              <p className="slogan_top_title">
                We have generated {slogans.length} slogans for “{slogan}”
              </p>
              <button className="downloadAll_button">Download all</button>
            </div>
            <div className="slogans_container">
              <ShowSlogans data={slogans} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default FreeSlogan;
