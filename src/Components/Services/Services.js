import React, { Component } from 'react';
import imagen1 from '../../images/Services-img/imagen1.jpg'
import imagen3 from '../../images/Services-img/imagen3.jpg'
import imagen4 from '../../images/Services-img/imagen4.jpg'
import imagen5 from '../../images/Services-img/imagen5.jpg'
import imagen6 from '../../images/Services-img/imagen6.jpg'
import imagen7 from '../../images/Services-img/imagen7.jpg'


class Services extends Component {
    render() {
        return (

            <div className="box-2 my-4 mx-5">

                <h1 id="services">Our services</h1>
                <div className="row">

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <h3 id="services">Consulta</h3>
                        <img src={imagen3} class="d-block w-100" alt="..." />

                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <h3 id="services">Estetica</h3>
                        <img src={imagen7} class="d-block w-100" alt="..." />

                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <h3 id="services">Cirugia</h3>
                        <img src={imagen6} class="d-block w-100" alt="..." />

                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <h3 id="services">Internacion</h3>
                        <img src={imagen5} class="d-block w-100" alt="..." />

                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <h3 id="services">Vacunacion</h3>
                        <img src={imagen1} class="d-block w-100" alt="..." />

                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <h3 id="services">Radiofrafia</h3>
                        <img src={imagen4} class="d-block w-100" alt="..." />

                    </div>

                </div>

            </div>
        );

    }
}

export default Services;