import React from "react";
import './Footer.css';
const Footer = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
<>

    <footer className="main-app-footer" style={{ backgroundColor: "#e3f2fd",
  color: "#333333"}}>
    <div className="container footer-container">
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>How to Apply for</h6>
            <div>
              <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php">New Individual PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-minor.php">New Minor PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-minor-child.php">Child PAN Card Apply</a>
              <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-without-aadhaar-otp.php">New PAN without Aadhaar OTP</a>
              <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-students.php">New PAN Card for Students</a>
            </div>
            <h6 className="mt-2">Apply Changes / Correction in</h6>
            <div>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual.php">Individual PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-name-change-after-marriage.php">Name change after Marriage</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-minor-to-major.php">Minor to Major PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-signature-change.php">PAN Card Signature Change</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-dob-change.php">PAN Card DOB Change</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-amendment.php">PAN Card Amendment</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Reprint / Reissue PAN Card</h6>
            <div>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-duplicate-pan-card.php">Duplicate PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-reprint-pan-card.php">Reprint PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-lost-pan-card.php">Reprint Lost PAN Card</a>
              <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-damaged-pan-card.php">Reprint Damaged PAN Card</a>
            </div>
            <h6 className="mt-2">Surrender PAN Card</h6>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/surrender/individual-surrender-duplicate-pan-card.php">Surrender Duplicate PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/surrender/individual-cancel-duplicate-pan-card.php">Cancel Duplicate PAN Card</a>
            <h6 className="mt-2">After Application links</h6>
            <div>
              <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card</a>
              <a href="https://www.pancardapp.com/check-pan-aadhaar-link-status.php">Check PAN Aadhaar Link Status</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Physical PAN Card</h6>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-epan-to-physical-pan-card.php">ePAN to Physical PAN</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-instant-pan-to-physical-pan.php">Instant PAN to Physical PAN</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-physical-pan-card.php">Get Physical PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-epan-to-normal-pan-card.php">ePAN to Normal PAN</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-upgrade-pan-card-design.php">Get SMART PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-pvc-pan-card.php">Get PVC PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-plastic-pan-card.php">Get Plastic PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/individual-pan-card-hard-copy.php">Get PAN Card Hard Copy</a>
            <h6 className="mt-2">Below 18 years PAN Card</h6>
            <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-minor-age-16.php">PAN Card Apply Age 16</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Trust</h6>
            <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/trust.php">New Trust PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/trust/">Trust PAN Card Correction Form</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/trust/duplicate-pan-card.php">Duplicate Trust PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/trust/reprint-pan-card.php">Reprint Trust PAN Card</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Partnership Firm</h6>
            <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/partnership-firm.php">New Partnership Firm PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/partnership-firm-reprint.php">Reprint Partnership Firm PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/partnership-firm.php">Partnership Firm PAN Card Correction</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Corporate</h6>
            <a href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/corporate.php">New Corporate PAN Card</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/corporate.php">Corporate PAN Card Correction</a>
            <a href="https://www.pancardapp.com/apply-online-pan-card-correction-application-form/corporate/reprint-pan-card.php">Reprint Corporate PAN Card</a>
          </div>
        </div>
      </div>
      <div className="container grid-lg">
      <div className="footer-disclaimer text-center">
    <p>
      This disclaimer is applicable to this website. By using or accessing
      this website you agree with the terms and conditions in this
      disclaimer. This is just a website that assists Indians to get PAN
      Card Assistance. This website is managed by Government registered
      Company. We are trusted professional consultants having 10+ years of
      experience in providing PAN Card assistance for business benefits.
      Although the greatest possible care has been exercised to ensure the
      correctness and completeness of the information provided on this
      website, we do not accept any liability for it. Use of this website
      constitutes your acceptance to agreeing to all our terms &
      conditions, and that you have gone through the disclaimer mentioned
      in it.
    </p>
  </div>
  <div className="footer-links text-center">
    <a href="https://www.pancardapp.com/customer-care.php" className="footer-link">Contact Us</a> 
    <a href="https://www.pancardapp.com/blog/about-us/" className="footer-link">About Us</a> 
    <a href="https://www.pancardapp.com/blog/terms-conditions/" className="footer-link">Terms & Conditions</a> 
    <a href="https://www.pancardapp.com/blog/refund-policy/" className="footer-link">Refund Policy</a> 
    <a href="https://www.pancardapp.com/blog/shipping-delivery-policy/" className="footer-link">Shipping Policy</a> 
    <a href="https://www.pancardapp.com/blog/disclaimer-policy/" className="footer-link">Disclaimer Policy</a> 
    <a href="https://www.pancardapp.com/blog/privacy-policy/" className="footer-link">Privacy Policy</a>
  </div>



</div>
<button className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-circle-up">^</i>
        </button>
<div className="footer-bottom row">

<div className="col-md-12">
  <p className="footer-company">© PANCardApp.com 2024. All Rights reserved</p>
</div>
</div>

    </footer>
  
    </>
  );
};

export default Footer;
