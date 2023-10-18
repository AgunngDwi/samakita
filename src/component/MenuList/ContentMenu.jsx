import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../redux/actions/menuAction";
import "../../css/contentMenu.css";

const ContentMenu = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.menuReducer);

  useEffect(() => {
    dispatch(getMenus());
  }, []);

  return (
    <div className="content-container">
      <div className="content-title">
        <h1
          style={{
            fontFamily: " Great Vibes, cursive",
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          List Menu :
        </h1>
      </div>
      <div className="content-wrap">
        <div className="content-menu">
          {data.map((menu, id) => (
            <div key={id} className="card">
              <img src={menu.imageUrl} alt="card-img" className="card-img" />
              <div className="card-content">
                <h3 className="name">{menu.name}</h3>
                <p className="price">{menu.price}K</p>
              </div>
            </div>
          ))}
        </div>
        <div className="content-preview">
          <h2>List Order</h2>
          <h4>Menu :</h4>
        </div>
      </div>
    </div>
  );
};

export default ContentMenu;
