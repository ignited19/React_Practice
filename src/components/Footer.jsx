import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  const CurrentDate = new Date();
  const CurrentYear = CurrentDate.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {CurrentYear}</p>
    </footer>
  );
}

export default Footer;
