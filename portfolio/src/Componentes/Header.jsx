import foto from "../Imagenes/Franco.jpg";
import "../css/Header.css";

export const Header = () => {
  return (
    <div>
      <div className="Foto1">
      <img src={foto} alt="" className="Foto" />
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>

      </div>

      <div className="contenedor">
        <p>Franco</p>
        <ul>
          <li>Cornejo</li>
          <li>Cornejo</li>
          <li>Cornejo</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
