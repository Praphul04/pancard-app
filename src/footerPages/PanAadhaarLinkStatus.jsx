import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PanAadhaarLinkStatus = () => {
  const [panNumber, setPanNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or other actions here
    console.log("PAN Number:", panNumber);
    console.log("Aadhaar Number:", aadhaarNumber);
  };

  const faqs = [
    {
      question: "How to Surrender Duplicate PAN Card Online?",
      answer: (
        <div>
          You can apply for Surrender Duplicate PAN Card online by completing the Surrender Duplicate PAN Card Application Form and submitting all relevant documents.
        </div>
      )
    },
    {
      question: "Is Duplicate PAN Card Surrender required?",
      answer: (
        <div>
          Yes, it is mandatory to surrender the duplicate PAN Card; otherwise, the income tax officer can levy a penalty of Rs.10,000 on a person who has more than one PAN card under Section 272B of the Income Tax Act.
        </div>
      )
    },
    {
      question: "How can I track Surrender Duplicate PAN Card application status?",
      answer: (
        <div>
          After applying for Surrender Duplicate PAN Card online, you can track the status on our portal at the following link: <br />
          <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a>
        </div>
      )
    },
    {
      question: "What Documents are required for Surrendering Duplicate PAN Card application Online?",
      answer: (
        <div>
          <div><strong>Duplicate PAN Card Proof (Any one)</strong></div>
          <ol>
            <li>PAN Card Copy</li>
            <li>PAN Allotment Letter</li>
            <li>If you have only PAN number, select option 'PAN Copy Not Available' in the form</li>
          </ol>
          <div><strong>Active PAN Card Proof (Any one)</strong></div>
          <ol>
            <li>PAN Card Copy</li>
            <li>PAN Allotment Letter</li>
            <li>If you have only PAN number, select option 'PAN Copy Not Available' in the form</li>
          </ol>
          <div><strong>Name Identity Proof (Any one)</strong></div>
          <ol>
            <li>Ex-Servicemen Contributory Health Scheme photo card</li>
            <li>Passport</li>
            <li>Pensioner card with photograph</li>
            <li>Aadhaar Card</li>
            <li>Bank certificate with photograph and account number</li>
            <li>Driving License</li>
            <li>Certificate of identity signed by a Municipal Councilor</li>
            <li>Arm’s license</li>
            <li>Photo identity card issued by Central/State Government or Public Sector Undertaking</li>
            <li>Election Card / Voter ID</li>
            <li>Ration card with photograph</li>
            <li>Certificate of identity signed by a Member of Legislative Assembly</li>
            <li>Certificate of identity signed by a Gazetted officer</li>
            <li>Certificate of identity signed by a Member of Parliament</li>
            <li>Central Government Health Scheme Card</li>
          </ol>
          <div><strong>Address Proof (Any one)</strong></div>
          <ol>
            <li>Water Bill less than 3 months old</li>
            <li>Electricity Bill less than 3 months old</li>
            <li>Depository account statement less than 3 months old</li>
            <li>Consumer gas connection card or bill</li>
            <li>Post office passbook with address</li>
            <li>Driving License</li>
            <li>Election Card / Voter ID</li>
            <li>Landline/Broadband bill less than 3 months old</li>
            <li>Domicile certificate issued by the Government</li>
            <li>Passport of Spouse</li>
            <li>Credit card statement less than 3 months old</li>
            <li>Employer certificate in original</li>
            <li>Latest property tax assessment order</li>
            <li>Certificate of identity signed by a Member of Legislative Assembly</li>
            <li>Certificate of identity signed by a Gazetted officer</li>
            <li>Bank account statement less than 3 months old</li>
            <li>Certificate of identity signed by a Municipal Councilor</li>
            <li>Aadhaar Card</li>
            <li>Property Registration Document</li>
            <li>Allotment letter of accommodation issued by the Government</li>
          </ol>
          <div><strong>Birth Date Proof (Any one)</strong></div>
          <ol>
            <li>Birth certificate issued by the Municipal Authority</li>
            <li>Affidavit sworn before a magistrate</li>
            <li>Passport</li>
            <li>Ex-Servicemen Contributory Health Scheme photo card</li>
            <li>Marriage Certificate</li>
            <li>Central Government Health Scheme Card</li>
            <li>Aadhaar Card</li>
            <li>Driving License</li>
            <li>Domicile certificate issued by the Government</li>
            <li>Matriculation certificate or Mark sheet</li>
            <li>Election Card / Voter ID</li>
            <li>Photo identity card issued by the Government</li>
            <li>Pension payment order</li>
          </ol>
        </div>
      )
    },
    {
      question: "How does this 'Check PAN Aadhaar Link Status' tool work?",
      answer: (
        <div>
          This tool helps taxpayers to check if their PAN and Aadhaar are linked or not.
          You just need to type in your PAN (Permanent Account Number) and Aadhaar (Unique Identification Number).
          The tool then checks with the Income Tax Department and tells you if your PAN and Aadhaar are linked or not.
          <br/><br/>
          There are three possible statuses:
          <ol>
            <li>Aadhaar is linked with PAN</li>
            <li>Aadhaar is not linked with PAN</li>
            <li>Aadhaar is linked to some other PAN</li>
          </ol>
          If your PAN isn't linked to Aadhaar, then you will get an option to click on "Link PAN with Aadhaar" and you will be redirected to the e-filing portal where you can submit the required details to link your PAN and Aadhaar.
          <br/><br/>
          After June 30, 2023, if your PAN isn't linked to Aadhaar then your PAN will stop working. This means you won't be able to use it for any financial transactions where PAN is required.
          <br/><br/>
          <div className="text-center">
            <a href="https://www.pancardapp.com/track-pan-card.php" className="btn btn-secondary input-group-btn btn-lg">TRACK PAN CARD STATUS</a>
          </div>
        </div>
      )
    }
  ];
  const containerStyle = {
    maxWidth: '1200px', // Adjust the max-width as needed
    margin: '0 auto',
    padding: '20px', // Optional padding to add space around content
  };

  const formContainerStyle = {
    maxWidth: '800px', // Adjust the max-width of the form container if needed
    margin: '0 auto',
  };

  return (
    <>
    <div className="body-content" style={containerStyle}>
      <div className="columns">
        <div className="column col-xs-12 col-md-12 col-lg-12 col-12">
          <h1 className="pan-form-heading">
            Check PAN Aadhaar Link Status Online (Jul 2024)
          </h1>
        </div>
      </div>
      <div className="columns mt-2">
        <div className="column col-xs-12 col-md-8 col-lg-8 col-8 col-mx-auto" style={formContainerStyle}>
          <form className="main-pan-form individual" onSubmit={handleSubmit}>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div >
                  <label className="form-label" htmlFor="pan-form-applicant-pan-number">
                    Enter PAN Number
                  </label>
                  <div className="input-group">
                    <input
                      className="form-input input-lg"
                      type="text"
                      placeholder="Enter PAN No."
                      name="application-pan-no"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                      required
                      minLength="10"
                      maxLength="10"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="form-label" htmlFor="pan-form-applicant-aadhaar-number">
                    Enter Aadhaar Number
                  </label>
                  <div className="input-group">
                    <input
                      className="form-input input-lg"
                      type="text"
                      placeholder="Enter Aadhaar No."
                      name="application-aadhaar-no"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                      required
                      minLength="12"
                      maxLength="12"
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button className="btn btn-primary input-group-btn btn-lg mt-2" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


<div className="container">
<h2 className="text-center">How does this "Check PAN Aadhaar Link Status" tool work?</h2>
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

export default PanAadhaarLinkStatus;
