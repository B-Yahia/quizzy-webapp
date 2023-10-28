import React, { useEffect } from "react";
import "./Notification.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanNotifications,
  setHidenToTrue,
} from "../../ReduxStrore/NotifSlice";

function Notification() {
  const notifications = useSelector((state) => state.notifications);
  const dispatsh = useDispatch();

  function handleHide() {
    dispatsh(setHidenToTrue());
    dispatsh(cleanNotifications());
  }
  useEffect(() => {}, [notifications]);
  return (
    <div
      className={`notification_container ${notifications.hiden ? "hide" : ""}`}
    >
      <div className="notofication">
        {notifications.listOfMsgs.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
        <button className="hide_btn" onClick={handleHide}>
          X
        </button>
      </div>
    </div>
  );
}

export default Notification;
