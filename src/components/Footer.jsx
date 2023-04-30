import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright © {currentYear}</p>
        <p>Made my myself</p>
      </footer>
    </div>
  );
}

export default Footer;
