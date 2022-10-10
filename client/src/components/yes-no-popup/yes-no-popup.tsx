import React, { useState } from "react";
import "./yes-no-popup.css";

interface Props {
  isVisible: boolean;
  title: string;
  onSubmit: () => void;
  onDecline?: () => void;
}
const YesNoPopup = (props: Props) => {
  const { isVisible, title, onSubmit, onDecline } = props;

  return (
    <>
      <div
        className="modal"
        style={{ display: `${isVisible ? "block" : "none"}` }}
        role="dialog"
      >
        <div className="popup__background"></div>
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => onDecline && onDecline()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="delete-modal-body">
                <button className="btn btn-secondary" onClick={onSubmit}>
                  Yes
                </button>
                <button
                  className="btn btn-primary close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => onDecline && onDecline()}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default YesNoPopup;
