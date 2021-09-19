import React from "react";

import "./Button.scss";

function Button({ handleModalOpen, children }) {
  return <button onClick={handleModalOpen}>{children}</button>;
}

export default Button;
