import React from "react";
import "../../css/modal.css";
import note from "../../assets/homepage/Checklist.jpg";

const CheckModal = ({ show, handleClose, confirm }) => {
  const showHideClassName = show ? "popup display-block" : "popup display-none";
  return (
    <div className={showHideClassName}>
      <div className="popup-main">
        <div className="icon-note">
          <img style={{ width: "250px", height: "150px" }} src={note} alt="" />
        </div>
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
            onClick={confirm}
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckModal;
