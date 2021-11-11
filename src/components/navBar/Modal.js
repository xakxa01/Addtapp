export default function Modal(show, setShow) {
  return (
    <div className="loginModal">
      <div className="triangle"></div>
      <div className="formContent">
        <h2>Login</h2>

        <form>
          <div className="input">
            <label htmlFor="email"> correo </label>
            <input type="email" id="email" />
          </div>

          <div className="input">
            <label htmlFor="password"> password </label>
            <input type="password" id="password" />
          </div>

          <div className="buttons">
            <button type="submit">
              Get Into
              <img src="../img/angle-small-right.svg" alt="arrow" />
            </button>
            <div> Register Here </div>
          </div>
        </form>
      </div>

      <img className="vector" src="img/Vector.svg" alt="diseño de fondo" />
    </div>
  );
}
