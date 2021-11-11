import "./navSide.scss";
import { useState } from "react";
import Modal from "./Modal";

export default function NabSide() {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="options">
        <img className="logo" src="img/logo.svg" alt="logo" />
        <button className="login">
          <img
            src="/img/Male User.svg"
            alt="login"
            onClick={() => setShow(!show)}
          />
        </button>

        <Modal show={show} setShow={setShow} />

        <img className="explorer" src="../img/explorer.svg" alt="explorer" />
      </div>
    </nav>
  );
}
