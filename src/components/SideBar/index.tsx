import React, { useState } from "react";

import "./styles.css";

const SideBar: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className={`main-sidebar ${toggled ? "toggled" : "unttogled"}`}>
      <button type="button" onClick={() => setToggled(!toggled)}>
        <p>{toggled ? ">" : "<"}</p>
      </button>
    </div>
  );
};

export default SideBar;
