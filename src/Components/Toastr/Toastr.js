import React, { useState, useEffect, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastr(props) {
  //   const [isActive, setActive] = useState(0);

  useEffect(() => {
    toast.error("Cannot Like Any More");
  });

  if (props.errorType == "error") {
    return (
      <Fragment>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Toastr;
