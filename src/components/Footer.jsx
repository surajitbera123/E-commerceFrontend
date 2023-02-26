import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../index.css";


function Footer() {
  return (
    <div>
      <MDBFooter className="text-center" color="white" bgColor="dark" style={{"backgroundColor":"dark"}}>
        <MDBContainer className="p-4">
          <section className="mb-4"></section>
          <hr />
          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="3" md="6" id="nanu" className="mb-4 mb-md-0">
                  <h1 style={{color:"white"}}>iShop</h1>
                  <p>
                    this software is sells the all software gugates like
                    tabs,laptops , phone ,airpods and most expensive product
                    like apple laptops ,iphones and microsoft prodcts etc...
                  </p>
                </MDBCol>

                <MDBCol lg="3" md="6" id="nanu" className="mb-4 mb-md-0">
                  <h2>Follow Us</h2>
                  <p>
                    <br />
                    <MDBBtn
                      outline
                      color="dark"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <MDBIcon fab icon="facebook-f">
                        <img
                          className="footericons"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                          alt=""
                          style={{border:"0px"}}
                        />
                      </MDBIcon>
                    </MDBBtn>

                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <MDBIcon fab icon="linkedin-in">
                        <img
                          className="footericons"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png?20140125013055"
                          alt=""
                          
                        />
                      </MDBIcon>
                    </MDBBtn>
                  </p>
                </MDBCol>

                <MDBCol lg="3" md="6" id="nanu" className="mb-4 mb-md-0">
                  <h2>Contact Us</h2>
                  <br />
                  <p>
                    Email :<strong> ishop99@gmail.com</strong>
                    <br />
                    <br />
                    Ph-No: <strong>700109-52501</strong>
                  </p>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <hr />
          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" id="nanu" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Information</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="textWhite">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="textWhite">
                      Information
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="textWhite">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="textWhite">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Service</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                  <a href="#!" className="textWhite">
                      About Us
                    </a>
                  </li>
                  <li>
                  <a href="#!" className="textWhite">
                      Information
                    </a>
                  </li>
                  <li>
                  <a href="#!" className="textWhite">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                  <a href="#!" className="textWhite">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Extras</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                  <a href="#!" className="textWhite">
                      About Us
                    </a>
                  </li>
                  <li>
                  <a href="#!" className="textWhite">
                      Information
                    </a>
                  </li>
                  <li>
                  <a href="#!" className="textWhite">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                  <a href="#!" className="textWhite">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Our Offers</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <MDBIcon fab icon="visa">
                        <img
                          className="footericons"
                          src="https://w7.pngwing.com/pngs/992/823/png-transparent-visa-credit-card-gift-card-payment-cheque-mastercard-s-blue-text-service-thumbnail.png"
                          alt=""
                        />
                      </MDBIcon>
                    </MDBBtn>
                  </li>
                  <li>
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <MDBIcon fab icon="amazon pay">
                        <img
                          className="footericons"
                          src="https://www.citypng.com/public/uploads/preview/-11596410140qyi0u0o2pg.png"
                          alt=""
                        />
                      </MDBIcon>
                    </MDBBtn>
                  </li>
                  <li>
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="#!"
                      role="button"
                    >
                      <MDBIcon fab icon="mastercard">
                        <img
                          className="footericons"
                          src="https://w7.pngwing.com/pngs/648/903/png-transparent-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-mobile-payment-thumbnail.png"
                          alt=""
                        />
                      </MDBIcon>
                    </MDBBtn>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://google.com/">
            @surajitbera98
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
