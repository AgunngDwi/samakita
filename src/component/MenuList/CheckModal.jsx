import React, { useState } from "react";
import "../../css/modal.css";
import note from "../../assets/homepage/Checklist.jpg";
import imgDeliv from "../../assets/homepage/ojek.png";
import { useNavigate } from "react-router-dom";

const CheckModal = ({ show, handleClose }) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const handleConfirm = () => {
    setConfirmOrder(true);
  };

  const showHideClassName = show ? "popup display-block" : "popup display-none";
  return (
    <div className={showHideClassName}>
      <div className="popup-main">
        {!confirmOrder ? (
          <div>
            <div className="icon-note">
              <img
                style={{ width: "350px", height: "250px" }}
                src={note}
                alt=""
              />
            </div>
            <div className="sub-popup">
              <h3>Konfirmasi Pesanan</h3>
              <p style={{ marginTop: "15px" }}>
                Apakah Anda yakin ingin mengkonfirmasi pesanan?
              </p>
              <div className="button-group">
                <button className="close-button" onClick={handleClose}>
                  Batalkan
                </button>
                <button
                  style={{ backgroundColor: "rgb(10, 224, 10)" }}
                  className="confirm-button"
                  onClick={handleConfirm}
                >
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="icon-note">
              <img
                style={{ width: "250px", height: "250px" }}
                src={imgDeliv}
                alt=""
              />
            </div>
            <div className="sub-popup">
              <h3>Terima Kasih</h3>
              <p style={{ marginTop: "15px" }}>
                Pesananmu akan segera diantar, Silahkan Menunggu !
              </p>
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <button
                  style={{
                    width: "50%",
                    height: "35px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => window.location.reload()}
                >
                  {" "}
                  Close{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckModal;
