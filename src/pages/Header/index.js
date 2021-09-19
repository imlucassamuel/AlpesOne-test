import React, { useState } from "react";

import { carsList } from "../../mock/cars";

import arrowRight from "../../assets/seta-a-direita.svg";
import arrowLeft from "../../assets/seta-a-esquerda.svg";
import bmwLogo from "../../assets/logo-bmw-rio.svg";
import telefoneIcon from "../../assets/telefone.svg";
import whatsAppIcon from "../../assets/whatsapp-header.svg";
import whatsAppIconContact from "../../assets/whatsapp.svg";
import facebookIcon from "../../assets/facebook.svg";
import tourIcon from "../../assets/360.svg";

import "./Header.scss";

function Header() {
  const [isButtonListClicked, setIsButtonListClicked] = useState(false);

  const [scrollX, setScrollX] = useState(0);

  function handleListCars() {
    isButtonListClicked === false
      ? setIsButtonListClicked(true)
      : setIsButtonListClicked(false);
  }

  function handleLeftArrow() {
    let sliderLeft = scrollX + Math.round(window.innerWidth / 2);

    if (sliderLeft > 0) {
      sliderLeft = 0;
    }

    setScrollX(sliderLeft);
  }

  function handleRightArrow() {
    let sliderRight = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = carsList.length * 150;
    if (window.innerWidth - listWidth > sliderRight) {
      sliderRight = window.innerWidth - listWidth - 60;
    }
    setScrollX(sliderRight);
  }

  return (
    <header className="container">
      <div className="header-wrapper">
        <div className="main-header">
          <div className="contacts">
            <span className="phone-number">
              <img src={telefoneIcon} alt="telefone" />
              (21) 2042-4442
            </span>

            <span className="tour">
              <img src={tourIcon} alt="telefone" />
              <span>TOUR VIRTUAL</span>
            </span>

            <span className="whatsapp-contact">
              <img src={whatsAppIcon} alt="whatsApp" />
              <span className="whatsapp-text">WHATSAPP</span>
            </span>
          </div>

          <img className="bmw-logo" src={bmwLogo} alt="bmw-logo" />
        </div>

        <nav className="navigation-menu">
          <ul>
            <li>
              <button onClick={handleListCars}>1</button>
            </li>
            <li>
              <button onClick={handleListCars}>2</button>
            </li>
            <li>
              <button onClick={handleListCars}>3</button>
            </li>
            <li>
              <button onClick={handleListCars}>4</button>
            </li>
            <li>
              <button onClick={handleListCars}>5</button>
            </li>
            <li>
              <button onClick={handleListCars}>6</button>
            </li>
            <li>
              <button onClick={handleListCars}>7</button>
            </li>
            <li>
              <button onClick={handleListCars}>8</button>
            </li>
            <li>
              <button onClick={handleListCars}>X</button>
            </li>
            <li>
              <button onClick={handleListCars}>Z</button>
            </li>
            <li>
              <button onClick={handleListCars}>M</button>
            </li>
            <li>
              <button onClick={handleListCars}>I</button>
            </li>
            <li>
              <button onClick={handleListCars}>Plug-in-Hybrid</button>
            </li>
          </ul>

          {isButtonListClicked && isButtonListClicked !== false ? (
            <>
              <div className="arrow-left" onClick={handleLeftArrow}>
                <img src={arrowLeft} alt="seta-esquerda" />
              </div>

              <div className="arrow-right" onClick={handleRightArrow}>
                <img src={arrowRight} alt="seta-direita" />
              </div>
              
              <div className="menu-wrapper">
                {carsList.map((cars) => (
                  <div className="cars-menu" key={cars.id}>
                    <img src={cars.image} alt={cars.name} />
                    <p>{cars.name}</p>

                    <div className="menu-socialmidia">
                      <p>Compartilhe:</p>
                      <img src={facebookIcon} alt="ícone-facebook" />
                      <img src={whatsAppIconContact} alt="ícone-whatsapp" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

export default Header;
