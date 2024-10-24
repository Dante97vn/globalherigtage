import "./css/ticker.css"; // Import file CSS để định nghĩa hiệu ứng cuộn

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CurrentLocation from "./currentime.js";
import CurrentTime from "./currentlocation.js";

function Ticker() {
  return (
    <div className="container  p-0">
      <div className=" ticker-container ">
        <div className="ticker">
          <CurrentLocation />
          <CurrentTime />
        </div>
      </div>
    </div>
  );
}

export default Ticker;
