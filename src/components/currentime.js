import React, { useState, useEffect } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Cập nhật mỗi giây

    return () => clearInterval(timer); // Dọn dẹp bộ đếm giờ khi component bị huỷ
  }, []);

  return (
    <div className="container ticker-item ">
      <p>
        Date: {currentTime.toLocaleDateString()} Time:
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default CurrentTime;
