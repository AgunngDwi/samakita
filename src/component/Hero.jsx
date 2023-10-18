import { useNavigate } from "react-router-dom";
import heroImg from "../assets/homepage/heroImg.jpg";
import "../css/hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container" id="#">
      <div className="hero-title">
        <h3>Get Your Food Now</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          blanditiis, dicta laboriosam corrupti odio, eveniet excepturi quasi,
          provident ratione qui illo vero doloremque doloribus fugit.
        </p>
        <button
          onClick={() => {
            navigate("/menu");
          }}
        >
          Order Here
        </button>
      </div>
    </div>
  );
};

export default Hero;
