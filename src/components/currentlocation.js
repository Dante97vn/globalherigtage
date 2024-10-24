import React, { useState, useEffect } from "react";

function CurrentLocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      // Lấy vị trí khi trang vừa tải
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null); // Reset lỗi nếu thành công
        },
        (err) => {
          setError(err.message); // Cập nhật thông báo lỗi nếu không thể lấy vị trí
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []); // Mảng rỗng [] để chỉ thực thi khi component được mount (trang tải)

  return (
    <div className="container ticker-item">
      {location.latitude && location.longitude ? (
        <p>
          Your location is: Latitude: {location.latitude}, Longitude:{" "}
          {location.longitude}
        </p>
      ) : (
        <p>Location not available</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default CurrentLocation;
