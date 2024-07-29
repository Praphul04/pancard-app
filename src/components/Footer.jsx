import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
const Footer = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
<>

    <footer className="main-app-footer" style={{ backgroundColor: "#e3f2fd", color: "#333333"}}>
    <div className="container footer-container">
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>How to Apply for</h6>
            <div>
              <Link to="apply-new-pan">New Individual PAN Card</Link>
              <Link to="/apply-minor-pan">New Minor PAN Card</Link>
              <Link to="/child-pan-card-application">Child PAN Card Apply</Link>
              <Link to="/pan-card-without-aadhaar-application">New PAN without Aadhaar OTP</Link>
              <Link to="/pan-card-for-student">New PAN Card for Students</Link>
            </div>
            <h6 className="mt-2">Apply Changes / Correction in</h6>
            <div>
              <Link to="/pan-correction">Individual PAN Card</Link>
              <Link to="/pan-changes-marriage">Name change after Marriage</Link>
              <Link to="/minor-to-major-pan">Minor to Major PAN Card</Link>
              <Link to="/change-signature-pan">PAN Card Signature Change</Link>
              <Link to="/change-DOB-pan-card">PAN Card DOB Change</Link>
              <Link to="/online-pan-card-amendment">PAN Card Amendment</Link>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Reprint / Reissue PAN Card</h6>
            <div>
              <Link to="/reprint-duplicate-pan">Duplicate PAN Card</Link>
              <Link to="/reprint-pan-card-application">Reprint PAN Card</Link>
              <Link to="/reprint-lost-pan">Reprint Lost PAN Card</Link>
              <Link to="/reprint-damaged-pan">Reprint Damaged PAN Card</Link>
            </div>
            <h6 className="mt-2">Surrender PAN Card</h6>
            <Link to="/surrender-duplicate-pan-application">Surrender Duplicate PAN Card</Link>
            <Link to="/cancel-duplicate-pan">Cancel Duplicate PAN Card</Link>
            <h6 className="mt-2">After Application links</h6>
            <div>
              <Link to="/track-pan">Track PAN Card</Link>
              <Link to="/pan-aadhaar-link-status">Check PAN Aadhaar Link Status</Link>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Physical PAN Card</h6>
            <Link to="/epan-to-physical-pan">ePAN to Physical PAN</Link>
            <Link to="/instant-pan">Instant PAN to Physical PAN</Link>
            <Link to="/physical-pan-card-application">Get Physical PAN Card</Link>
            <Link to="/e-pan-to-normal-pancard-application">ePAN to Normal PAN</Link>
            <Link to="/upgrade-smart-pan-with-qr-code-application">Get SMART PAN Card</Link>
            <Link to="/pvc-pan-card-application-form">Get PVC PAN Card</Link>
            <Link to="/plastic-pan-card-application">Get Plastic PAN Card</Link>
            <Link to="/pan-card-hard-copy-application">Get PAN Card Hard Copy</Link>
            <h6 className="mt-2">Below 18 years PAN Card</h6>
            <Link to="/age-sixteen-pan-card-application">PAN Card Apply Age 16</Link>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Trust</h6>
            <Link to="/apply-online-new-pan-card-application-form/trust">New Trust PAN Card</Link>
            <Link to="/trust-pan-card-correction-application">Trust PAN Card Correction Form</Link>
            <Link to="/duplicate-trust-pan-card-application">Duplicate Trust PAN Card</Link>
            <Link to="/reprint-trust-pan-card-application">Reprint Trust PAN Card</Link>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Partnership Firm</h6>
            <Link to="/apply-online-new-pan-card-application-form/partnership-firm">
New Partnership Firm PAN Card
</Link>
<Link to="/appliy-for-business-pan-card-application">
Business PAN Card
</Link>
<Link to="/partnership-firm-pan-card-correction-application">
Partnership Firm PAN Correction
</Link>
<Link to="/duplicate-partnership-firm-pan-card-application">
Duplicate Partnership Firm PAN
</Link>
<Link to="/reprint-damage-partnership-firm-pan-card-application">
Reprint Damaged Partnership Firm PAN
</Link>
          </div>
        </div>
        <div className="footer-column">
      
      <div className="footer-column-content">
      <h6 >LLP</h6>
        <Link to="/apply-online-new-pan-card-application-form/limited-liability-partnership-LLP">New LLP PAN Card</Link>
        <Link to="/llp-pan-card-correction-application">LLP PAN Card Correction Form</Link>
        <Link to="/duplicate-llp-pan-card-application">Duplicate LLP PAN Card</Link>
        <Link to="/reprint-llp-pan-card-application">Reprint LLP PAN Card</Link>
      </div>
      </div>
        <div className="footer-column">
          <div className="footer-column-content">
            <h6>Co-Operative Society</h6>
            <Link to="/apply-online-new-pan-card-application-form/aop/co-operative-society">
New Co-operative Society PAN Card
</Link>
<Link to="/co-operative-pan-card-correction-application">
Co-Operative Society PAN Correction
</Link>
<Link to="/duplicate-cooperative-pan-card-application">
Duplicate Co-Operative Society PAN
</Link>
<Link to="/reprint-Co-Operative-pan-card-application">
Reprint Co-Operative Society PAN
</Link>
<Link to="/reprint-lost-Co-Operative-pan-card-application">
Reprint Lost Co-Operative Society PAN
</Link>
          </div>
        </div>
    

        <div className="footer-column">
        <div className="footer-column-content">
      <h6 >Housing Society</h6>
        <Link to="new-pan-application-housing-society">New Housing Society PAN Card</Link>
        <Link to="/new-pan-correction-housing-society">Housing Society PAN Correction</Link>
      </div>
      </div>
     
      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >Welfare Association</h6>
        <Link to="/new-pan-application-Welfare-association">New Welfare Association PAN Card</Link>
        <Link to="/new-pan-correction-welfare-association">Welfare Association PAN Correction</Link>
      </div>
      </div>
   
      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >Welfare Society</h6>
        <Link to="/new-pan-application-Welfare-society">New Welfare Society PAN Card</Link>
        <Link to="/new-pan-correction-welfare-society">Welfare Society PAN Correction</Link>
        <Link to="/reprint-lost-Welfare-Society-pan-card-application">Reprint Lost Welfare Society PAN</Link>
      </div>
      </div>
     
      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >Sanstha</h6>
      <Link to="/new-pan-application-sanstha">
New Sanstha PAN Card
</Link>
<Link to="/new-pan-correction-welfare-society">
Sanstha PAN Correction
</Link>
<Link to="/reprint-lost-Welfare-Society-pan-card-application">
Reprint Lost Sanstha PAN
</Link>
      </div>
      </div>
   
      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >Samiti</h6>
      <Link to="/new-pan-application-Samiti">
New Samiti PAN Card
</Link>
<Link to="/new-pan-correction-welfare-society">
Samiti PAN Card Correction
</Link>
<Link to="/reprint-lost-Welfare-Society-pan-card-application">
Reprint Lost Samiti PAN
</Link>
      </div>
      </div>
      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >Association</h6>
      <Link to="/new-pan-application-apartment-association">
New Apartment Association PAN
</Link>
<Link to="/new-pan-correction-association">
Association PAN Correction
</Link>
<Link to="/reprint-association-pan-card-application">
Reprint Association PAN
</Link>
<Link to="/reprint-lost-association-pan-card-application">
Reprint Lost Association PAN
</Link>
      </div>
      </div>


      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >HUF</h6>
      <Link to="/apply-online-new-pan-card-application-form/hindu-undivided-family-HUF">
New HUF PAN Card
</Link>
<Link to="/HUF-PAN-Card-Correction-Application">
HUF PAN Correction
</Link>
<Link to="/duplicate-huf-pan-card-application">
Duplicate HUF PAN Card
</Link>
<Link to="/reprint-lost-huf-pan-card">
Reprint Lost HUF PAN
</Link>
      </div>
      </div>


      
      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >How to Apply for</h6>
      <Link to="/new-school-pan-card-application">
New School PAN Card
</Link>
<Link to="/new-sangam-pan-card-application">
New Seva Sangam PAN Card
</Link>
<Link to="/new-educational-society-pan-card-application">
New Educational Society PAN Card
</Link>
<Link to="/new-memorial-society-pan-card-application">
New Memorial Society PAN Card
</Link>
<Link to="/new-mandali-pan-card-application">
New Mandali PAN Card
</Link>
<Link to="/new-shg-self-help-group-pan-card-application">
SHG Self Help Group PAN Card
</Link>
<Link to="/new-joint-venture-pan-card-application">
Joint Venture PAN Card
</Link>
<Link to="/new-ngo-pan-card-application">
NGO PAN Card
</Link>
      </div>
      </div>

      <div className="footer-column">
      <div className="footer-column-content">
      <h6 >Apply by Locations</h6>
      <Link to="/all-india-pan-card-apply-application">
New PAN: India, States & Cities
</Link>
<h6 >More Reads</h6>
<Link to="/pan-card-speed-post-tracking">PAN Card Speed POST Tracking</Link>

<Link to="https://www.pancardapp.com/blog/reviews/">Reviews</Link>
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
    <Link to="/contect-us-page" className="footer-link">Contact Us</Link> 
    <Link to="https://www.pancardapp.com/blog/about-us/" className="footer-link">About Us</Link> 
    <Link to="https://www.pancardapp.com/blog/terms-conditions/" className="footer-link">Terms & Conditions</Link> 
    <Link to="https://www.pancardapp.com/blog/refund-policy/" className="footer-link">Refund Policy</Link> 
    <Link to="https://www.pancardapp.com/blog/shipping-delivery-policy/" className="footer-link">Shipping Policy</Link> 
    <Link to="https://www.pancardapp.com/blog/disclaimer-policy/" className="footer-link">Disclaimer Policy</Link> 
    <Link to="https://www.pancardapp.com/blog/privacy-policy/" className="footer-link">Privacy Policy</Link>
  </div>



</div>
<button className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-circle-up"></i>
        </button>


    </footer>
    <div className="footer-bottom row">

<div className="col-md-12">
  <p className="footer-company">© PANCardApp.com 2024. All Rights reserved</p>
</div>
</div>
    </>
  );
};

export default Footer;
