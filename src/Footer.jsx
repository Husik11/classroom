import React from "react";
import ld from "./image/white_linkedin.svg";
import fb from "./image/facebook_white.svg";
import goya from "./image/white_logo.png";
const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div class="Footer_footerBg__vvFZO">
          <div class="Footer_footer__1IwEk">
            <div class="Footer_leftSide__zOUic">
              <div class="Footer_items__jPN5n">
                <section class="Footer_contacts__U5xtT">
                  <a href="mailto:info@goya.am" class="Footer_item__YyNR2">
                    info@goya.am
                  </a>
                  <a href="tel: +37455575332" class="Footer_item__YyNR2">
                    +374 55 575332
                  </a>
                  <span class="Footer_item__YyNR2">
                    24/15 Azatutyan Ave., Yerevan
                  </span>
                </section>
                <section class="Footer_col__HXN_W"></section>
              </div>
            </div>
            <div class="Footer_middle__hh27G">
              <a class="Footer_item__YyNR2" href="/hy">
                <img src={goya} alt="logo" />
              </a>
              <section class="Footer_socialLinks__gIVF8">
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
            <div class="Footer_rightSide__ipH0R"></div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
