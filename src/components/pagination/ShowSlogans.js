import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
import "./ShowSlogans.css";

let PageSize = 20;

export default function ShowSlogans({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [labelValue, setLabelValue] = useState("");
  const [labelTop, setLabelTop] = useState(0);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const copyToClipBoard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    setLabelValue("copied");
  };
  const handleMouseEnter = (index) => {
    if (index > 10) setLabelTop(200 + index * 10);
    else setLabelTop(50 + index * 10);
    setLabelValue("click to copy");
  };

  return (
    <div className="slogan">
      {labelValue && (
        <div className="slogan_label" style={{ top: `${labelTop}px` }}>
          <label>{labelValue}</label>
        </div>
      )}
      <div className="slogans_container">
        {currentTableData.map((item, index) => {
          return (
            <p
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setLabelValue("")}
              onClick={copyToClipBoard}
              key={item + index}
            >
              {item}
            </p>
          );
        })}
      </div>
      <Pagination
        propClassName="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
