import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap cho button

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Xử lý sự kiện khi cuộn trang
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true); // Hiển thị nút khi cuộn quá 300px
      } else {
        setShowButton(false); // Ẩn nút khi ở gần đầu trang
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary scroll-to-top"
          style={styles.scrollToTopButton}
        >
          ↑ Top
        </button>
      )}
    </>
  );
}

const styles = {
  scrollToTopButton: {
    position: "fixed",
    bottom: "50px", // Đặt nút cách đáy trang 50px
    right: "30px", // Đặt nút cách cạnh phải 30px
    zIndex: 1000, // Giữ nút trên tất cả các thành phần khác
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "50px", // Làm nút tròn
    backgroundColor: "#007bff", // Màu nền
    color: "white",
    border: "none",
  },
};

export default ScrollToTopButton;
