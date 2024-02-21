import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../redux/actions/menuAction";
import "../../css/contentMenu.css";

const ContentMenu = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.menuReducer);
  const [selectedMenus, setSelectedMenus] = useState([]);

  useEffect(() => {
    dispatch(getMenus());
  }, []);

  const handleSelectMenu = (menu) => {
    const existingMenu = selectedMenus.find((item) => item.id === menu.id);
    if (existingMenu) {
      const updatedMenus = selectedMenus.map((item) =>
        item.id === menu.id ? { ...item, count: item.count + 1 } : item
      );
      setSelectedMenus(updatedMenus);
    } else {
      setSelectedMenus([...selectedMenus, { ...menu, count: 1 }]);
    }
  };

  const handleAddCount = (menuId) => {
    const updatedMenus = selectedMenus.map((menu) =>
      menu.id === menuId ? { ...menu, count: menu.count + 1 } : menu
    );
    setSelectedMenus(updatedMenus);
  };

  const handleDecCount = (menuId) => {
    const updatedMenus = selectedMenus.map((menu) =>
      menu.id === menuId && menu.count >= 1
        ? { ...menu, count: menu.count - 1 }
        : menu
    );
    setSelectedMenus(updatedMenus.filter((menu) => menu.count !== 0));
  };

  const totalPrice = selectedMenus.reduce((total, selectedMenu) => {
    return total + selectedMenu.price * selectedMenu.count;
  }, 0);

  return (
    <div className="content-container">
      <div className="content-title">
        <h1
          style={{
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
              {selectedMenus.some(
                (selectedMenu) => selectedMenu.id === menu.id
              ) ? (
                <div className="menu-count">
                  <>
                    <button
                      className="del-button"
                      onClick={() => handleDecCount(menu.id)}
                    >
                      -
                    </button>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid",
                        cursor: "default",
                      }}
                    >
                      {selectedMenus.find((item) => item.id === menu.id).count}
                    </button>
                    <button
                      className="add-button"
                      onClick={() => handleAddCount(menu.id)}
                    >
                      +
                    </button>
                  </>
                </div>
              ) : (
                <button
                  className="select-btn"
                  onClick={() => handleSelectMenu(menu)}
                >
                  Select
                </button>
              )}
              <div className="select-menu"></div>
            </div>
          ))}
        </div>
        <div className="content-preview">
          <h2>List Order</h2>
          <div className="tittle-preview">
            <p style={{ width: "90px", textAlign: "left" }}>Name</p>
            <p>Qty</p>
            <p>Price</p>
          </div>
          {selectedMenus.map((selectedMenu) => (
            <div className="select-menu-preview" key={selectedMenu.id}>
              <p style={{ width: "80px", textAlign: "left" }}>
                {selectedMenu.name}
              </p>
              <p>{selectedMenu.count}</p>
              <p>{selectedMenu.price * selectedMenu.count}K</p>
            </div>
          ))}
          {selectedMenus.length > 0 ? (
            <div className="total-content">
              <div className="total-price">
                <p>Total Price</p>
                <p>{totalPrice}K</p>
              </div>
              <button className="total-button">Konfirmasi Pesanan</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContentMenu;
