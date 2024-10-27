import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Aboutus() {
  return (
    <div>
      <h1 className="text-center backgroundcustom2 container ">About Us</h1>
      <p className="container  backgroundcustom1">
        Welcome to{" "}
        <strong>Global Heritage: Explore the World's Historic Monuments</strong>
        , your ultimate digital gateway to the world’s most iconic historical
        landmarks. Our mission is to inspire, educate, and connect people with
        the cultural and historical wealth of our planet.
      </p>
      <h2 className="container  backgroundcustom2 text-center">Our Vision</h2>
      <p className="container  backgroundcustom1">
        We believe that the world's historical monuments hold timeless stories
        that deserve to be shared with everyone. Our goal is to bring these
        stories to life through a user-friendly and visually engaging platform,
        helping users discover, learn, and appreciate the history and
        significance of each monument.
      </p>
      <h2 className="container  backgroundcustom2 text-center">What We Do</h2>
      <p className="container  backgroundcustom1">
        Our website provides detailed information, stunning images, and
        historical insights about the world’s most famous monuments. Whether
        you’re an avid history enthusiast, a student, or simply curious about
        the world, our platform is designed to give you a virtual tour of the
        monuments that have shaped human civilization.
      </p>
      <ul className="container  backgroundcustom1">
        <li>
          <strong>Explore Monuments by Region:</strong> Discover monuments
          categorized by geographical zones – East, North, West, and South.
        </li>
        <li>
          {" "}
          <strong>Interactive Gallery:</strong>
          Browse through a rich collection of images showcasing the beauty of
          historical landmarks.
        </li>
        <li>
          {" "}
          <strong>Learn More:</strong>
          Each monument is accompanied by a brief history, images, and links to
          additional resources for deeper learning.
        </li>
      </ul>

      <h2 className="container  backgroundcustom2 text-center">Our Mission</h2>
      <p className="container  backgroundcustom1">
        To bridge the gap between cultures and histories by providing a digital
        space where people from all around the world can learn and appreciate
        the treasures of global heritage. We strive to make our content
        accessible and informative for users of all ages and backgrounds.
      </p>
    </div>
  );
}
export default Aboutus;
