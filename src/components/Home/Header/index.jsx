import React from "react";
import headQuarter from '../../../assets/img/headquarters.png';
import './header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="container__text">
                <h2 className="title-home">FONDO FAMILIAR</h2>
                <h1 className="title-home">FAGUGARAMISA</h1>
                <p>CALLE 148 # - 40</p>
                <p>COJUNTO RESIDENCIAL VERACRUZ</p>
                <p>Sede Principal</p>
                <div className="button">
                    Conoce más {'>'}
                </div>
            </div>
            <div className="container__img">
                <img src={headQuarter} alt="COJUNTO RESIDENCIAL VERACRUZ" />
            </div>
        </div>
    )
};
export default Header;
