// src/components/ContactUs.jsx
import React,{useState} from 'react';
import './ContactUs.css'; // Import the custom CSS file for styling
import { Link } from 'react-router-dom';

const ContectUsPage = () => {

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [officeAddress, setOfficeAddress] = useState(null);
  
    // Function to display the phone number
    const showMobileNumber = () => {
      setPhoneNumber("+91-7600777683");
    };
  
    // Function to display the office address
    const showOfficeAddress = () => {
      setOfficeAddress("Address goes here...");
    };
  
    const faqs = [
        {
          question: "How to check my current PAN Application Status?",
          answer: (
            <div>
              If you have already applied and want to track your application status, click on the link below and go through the status mentioned carefully:
              <br />
              <a href="https://www.pancardapp.com/track-pan-card.php" className="btn bg-secondary btn-sm">
                Track PAN Status
              </a>
            </div>
          ),
        },
        {
          question: "I have applied online but still not received my PAN Card, Why?",
          answer: (
            <div>
              Even though you have applied online, one last important step is sending the Printed PAN Form with Applicant Sign to our Office Address.
              If you have not downloaded your PAN Application form, please visit the link below and download it. Read all instructions on the last pages of the PDF form and send the printed form with sign/photo in courier to our office address.
              Without the Physical Form with Applicant Sign, PAN Applications will not be processed. So please send it as early as possible.
              <br />
              <a href="https://www.pancardapp.com/track-pan-card.php" className="btn bg-secondary btn-sm">
                Download PAN Application Form
              </a>
            </div>
          ),
        },
        {
          question: "I have a few other queries, how to contact your team?",
          answer: (
            <div>
              Please send an email to <a href="mailto:email@protected" className="__cf_email__">[email&#160;protected]</a> and mention your query. Our team will reply as soon as possible.
            </div>
          ),
        },
        {
          question: "Support Email:",
          answer: (
            <div>
              Users can also contact our support by sending an email to
              <a href="mailto:support@domain.com">support@domain.com</a> {/* Replace with your actual support email */}
            </div>
          ),
        },
        {
          question: "Contact Number:",
          answer: (
            <div>
              {phoneNumber ? (
                <div>{phoneNumber}</div>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={showMobileNumber}>Click To Show Mobile Number</button>
              )}
              (<strong>WhatsApp only</strong> for Quick Support)
              <br />
              Timings: Monday to Friday (10:30 AM to 6:30 PM)
              <br />
              Holidays: Saturday/Sunday & Public Holidays
            </div>
          ),
        },
        {
          question: "Office Address:",
          answer: (
            <div>
              {officeAddress ? (
                <div>{officeAddress}</div>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={showOfficeAddress}>Click To Show Office Address</button>
              )}
            </div>
          ),
        }
      ];
    
  return (
    <>
    <div className="body-content container grid-lg">
      <div className="columns">
        <div className="column col-12">
          <h1 className="h4">Contact Us:</h1>
        </div>
        <div className="column col-12">
          <div className="content">
            <div>
              <p>
                If you have already applied and want to track your application status then click on the link below:
              </p>
              <p style={{ maxWidth: '200px' }}>
                <Link
                  to="/track-pan"
                  className="btn bg-secondary btn-block"
                >
                  Track PAN Status
                </Link>
              </p>
            </div>
            <div className="mt-50">
              <p>
                For any other PAN Card related query you can contact us via the link below.
              </p>
              <Link
                className="btn btn-primary btn-lg"
                to="/cdn-cgi/l/email-protection#a3c0c2d1c6e3d3c2cdc0c2d1c7c2d3d38dc0ccce"
              >
                Click Here To Send Email To Support Team
              </Link>
            </div>
            <div className="mt-50 hide">
              <p>
                For any other PAN Card related query you can contact us via the form below.
              </p>
              <div className="col-6 col-md-6 col-sm-12 col-xs-12">
                <form
                  action="./customer-care.php?submit=2014817227"
                  method="post"
                  className="php-email-form main-pan-form"
                >
                  <div className="form-group">
                    <label className="form-label text-dark">APPLICANT NAME:</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      id="customer-care-form-name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">EMAIL:</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      id="customer-care-form-email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">APPLICATION NUMBER:</label>
                    <input
                      className="form-input"
                      type="text"
                      name="applicationNumber"
                      placeholder="Application Number"
                      id="customer-care-form-appno"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">MESSAGE:</label>
                    <textarea
                      className="form-input"
                      type="text"
                      name="message"
                      placeholder="Your Message"
                      required
                      id="customer-care-form-message"
                    ></textarea>
                  </div>
                  <div
                    id="recaptcha"
                    className="g-recaptcha"
                    data-sitekey="6LcG4EUoAAAAAIpcf6LX5laldjpomXn_UPLCRaxv"
                    data-callback="customerCareFormJSresponseFromCaptchaFn"
                    data-size="invisible"
                  ></div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-lg"
                      id="customer-care-form-submit-btn"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="container">
<h2 className="text-center">FAQs: PAN Card Application</h2>
{faqs.map((faq, index) => (
  <div className="faq-panel" key={index}>
    <div className="faq-question">
      <strong>{faq.question}</strong>
    </div>
    <div className="faq-answer">
      {faq.answer}
    </div>
  </div>
))}

</div>
</>
  );
};

export default ContectUsPage;
