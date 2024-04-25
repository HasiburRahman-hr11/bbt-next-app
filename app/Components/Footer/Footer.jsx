"use client";
import FooterMenuWrapper from "./FooterMenuWrapper";
import FooterMenuDesktop from "./FooterMenuDesktop";
import FooterAppLinks from "./FooterAppLinks";
import FooterCopyRight from "./FooterCopyRight";
import BackToTop from '../CommonComponents/BackToTop/BackToTop'

const Footer = () => {
  return (
    <>
      
      <footer className="bg-black pb-20 sm:pb-0" id="footer">
        <div className="max-1920">
          <div className="container">
            <div className="lg:hidden">
              <FooterMenuWrapper />
            </div>
            <div className="hidden lg:block">
              <FooterMenuDesktop />
            </div>
            <FooterAppLinks />
            <FooterCopyRight />
          </div>
        </div>
        <BackToTop />
      </footer>
    </>
  );
};

export default Footer;
