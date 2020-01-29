import React, { Component } from 'react'


export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="   blue darken-2">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-5">Footer Content</h5>
                <img src="/src/assets/images/RBRolling Bank.png" alt="" styley="width: 70%" />
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
                <ul className="list-unstyled ">
                  <li>
                    <p>
                      <a className="" href="#!">Inicio</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="" href="#!">Tarjetas</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="" href="#!">Creditos</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a className="" href="#!">Home banking</a>
                    </p>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-home mr-3"></i> Gral. Paz 576, San Miguel de Tucumán, Tucumán, Argentina</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> info@rollingbank.com</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
                <i className="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-dribbble"></i>
              </div>
            </div>
          </div>
          <div class="footer-copyright text-center py-3 blue darken-3">© 2018 Copyright:
            <a class="" href="index.html"> Rolling Bank</a>
          </div>
        </div>
      </div>

    )
  }
}
