import "../css/about.css";
import aboutImg from "../assets/homepage/shawnanggg-nmpW_WwwVSc-unsplash.jpg";

const About = () => {
  return (
    <div className="about-content" id="about">
      <h3>About Us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, odio
        ea animi error est laborum deleniti corrupti minima reprehenderit
        accusamus dolores nesciunt voluptatum. Velit nemo distinctio nesciunt
        quos nulla perspiciatis voluptates accusamus beatae architecto et
        ratione explicabo itaque repellendus animi doloremque quidem est esse,
        provident suscipit. Voluptatibus officiis, quo saepe ut cum architecto
        magni atque maxime minima eius. Quis exercitationem dolores sed quod
        ipsum quisquam, fugit ducimus, accusantium voluptatibus deleniti
        cupiditate saepe! Ipsa praesentium perferendis laudantium suscipit
        aliquid, illum magnam ipsam, inventore nulla totam vero earum, nemo
        blanditiis error ea repellendus quae rerum! Iure ipsam itaque
        consequatur dolores, consequuntur eius.
      </p>
      <div className="about-details">
        <div className="detail">
          <i
            style={{ fontSize: "25px" }}
            class="fa-solid fa-bell-concierge"
          ></i>
          <p>Freshly Cooked</p>
        </div>
        <div className="detail">
          <i style={{ fontSize: "25px" }} class="fa-solid fa-wheat-awn"></i>
          <p>Best Ingredient</p>
        </div>
        <div className="detail">
          <i style={{ fontSize: "25px" }} class="fa-regular fa-clock"></i>
          <p>Fast Service</p>
        </div>
      </div>
    </div>
  );
};

export default About;
