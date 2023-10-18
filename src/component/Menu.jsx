import React, { useEffect, useState } from "react";
import "../css/menu.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../redux/actions/menuAction";

const Menu = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.menuReducer);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleMenu = 2;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < data.length - visibleMenu) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    dispatch(getMenus());
  }, []);

  console.log(data);

  return (
    <div className="menu-container">
      <div className="menu-title">
        <h3
          style={{
            fontFamily: " Great Vibes, cursive",
          }}
        >
          Signature
        </h3>
      </div>
      <div className="carousel">
        <div className="carousel-inner">
          {data
            .slice(currentIndex, currentIndex + visibleMenu)
            .map((item, id) => (
              <div key={id} className="menu-card">
                <img src={item.imageUrl} alt="" className="card-image" />
                <div className="menu-content">
                  <h4 className="name">{item.name}</h4>
                  <p className="description">{item.description}</p>
                  <p className="price">{item.price}k</p>
                </div>
              </div>
            ))}
        </div>
        <div className="button-group">
          <button className="carousel-button left" onClick={handlePrevClick}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button className="carousel-button right" onClick={handleNextClick}>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
