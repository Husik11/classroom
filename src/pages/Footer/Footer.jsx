import React from "react";
import ld from "../../image/white_linkedin.svg";
import fb from "../../image/facebook_white.svg";
import goya from "../../image/white_logo.png";
const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div className="Footer_footerBg__vvFZO">
          <div className="Footer_footer__1IwEk">
            <div className="Footer_leftSide__zOUic">
              <div className="Footer_items__jPN5n">
                <section className="Footer_contacts__U5xtT">
                  <a href="mailto:info@goya.am" className="Footer_item__YyNR2">
                    info@goya.am
                  </a>
                  <a href="tel: +37455575332" className="Footer_item__YyNR2">
                    +374 55 575332
                  </a>
                  <span className="Footer_item__YyNR2">
                    24/15 Azatutyan Ave., Yerevan
                  </span>
                </section>
                <section className="Footer_col__HXN_W"></section>
              </div>
            </div>
            <div className="Footer_middle__hh27G">
              <a className="Footer_item__YyNR2" href="/hy">
                <img src={goya} alt="logo" />
              </a>
              <section className="Footer_socialLinks__gIVF8">
                <a
                  href="https://www.facebook.com/goyaschool/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} alt="facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/company/goya-cjsc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ld} alt="linkedin" />
                </a>
              </section>
            </div>
            <div className="Footer_rightSide__ipH0R"></div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
