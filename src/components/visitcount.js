import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function VisitCount() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Lấy số lần truy cập từ localStorage
    const visits = localStorage.getItem("visitCount");

    if (visits) {
      // Nếu đã có số lần truy cập, tăng giá trị lên 1
      const updatedVisits = parseInt(visits) + 1;
      setVisitCount(updatedVisits);
      localStorage.setItem("visitCount", updatedVisits);
    } else {
      // Nếu chưa có, thiết lập số lần truy cập là 1
      setVisitCount(1);
      localStorage.setItem("visitCount", 1);
    }
  }, []);

  return (
    <div className="">
      <img
        src="./img/visitor.jfif"
        alt=""
        className="img-fluid d-inline-block "
        style={{ maxWidth: "25px" }}
      />
      <span className="d-inline"> {visitCount}</span>
    </div>
  );
}

export default VisitCount;
