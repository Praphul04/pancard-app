// src/components/CancelDuplicatePanCard.jsx
import React, { useState } from 'react';
import PanCardApplicationForm from '../pages/PanCardApplicationForm';




const SurrenderDuplicatePanCard = () => {
  const [duplicatePanNumber, setDuplicatePanNumber] = useState('');
  const [duplicatePanProof, setDuplicatePanProof] = useState('');
  const [activePanNumber, setActivePanNumber] = useState('');
  const [activePanProof, setActivePanProof] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      duplicatePanNumber,
      duplicatePanProof,
      activePanNumber,
      activePanProof,
    });
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
    }
  ];
  
  


  return (
<>
<div className="body-content container">
    <div className="columns">
      <div className="column col-12" >
        <h1 className="pan-form-heading">
        Surrender Duplicate PAN Card Application
        </h1 >
      </div>
      <div className="column col-12">
        <form className="main-pan-form individual" id="change-pan-form" method="POST" onSubmit={handleSubmit}>
          <div className="hero bg-gray">
            <div className="hero-body">
              <div className="form-group">
                <label className="form-label" htmlFor="pan-form-applicant-pan-number-surrender">
                  Enter Duplicate PAN Number to
                  <mark>Surrender</mark>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pan-form-applicant-pan-number-surrender"
                  placeholder="Enter Duplicate PAN Number to CANCEL"
                  maxLength="10"
                  value={duplicatePanNumber}
                  onChange={(e) => setDuplicatePanNumber(e.target.value)}
                />
              </div>
              <div className="form-group pan-proof">
                <label className="form-label" htmlFor="pan-form-select-pan-proof-surrender">
                  Duplicate PAN Issuance Proof
                </label>
                <select
                  className="form-select"
                  id="pan-form-select-pan-proof-surrender"
                  value={duplicatePanProof}
                  onChange={(e) => setDuplicatePanProof(e.target.value)}
                >
                  <option value="">Select Duplicate PAN Issuance Proof</option>
                  <option value="no-pan-card-copy">PAN copy not available</option>
                  <option value="pan-card-copy-surrender">PAN Card Copy OR e-PAN</option>
                  <option value="pan-allotment-letter-surrender">PAN Allotment Letter Copy</option>
                </select>
              </div>
            </div>
          </div>
          <div className="hero bg-gray">
            <div className="hero-body">
              <div className="form-group">
                <label className="form-label" htmlFor="pan-form-applicant-pan-number">
                  Enter PAN Card Number To Keep <mark>ACTIVE</mark>
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pan-form-applicant-pan-number"
                  placeholder="Enter PAN Number To Keep ACTIVE"
                  maxLength="10"
                  value={activePanNumber}
                  onChange={(e) => setActivePanNumber(e.target.value)}
                />
              </div>
              <div className="form-group pan-proof">
                <label className="form-label" htmlFor="pan-form-select-pan-proof">
                  ACTIVE PAN Issuance Proof
                </label>
                <select
                  className="form-select"
                  id="pan-form-select-pan-proof"
                  value={activePanProof}
                  onChange={(e) => setActivePanProof(e.target.value)}
                >
                  <option value="">Select Active PAN Issuance Proof</option>
                  <option value="pan-card-copy">PAN Card Copy OR e-PAN</option>
                  <option value="pan-allotment-letter">PAN Allotment Letter Copy</option>
                  <option value="no-pan-card-copy">PAN copy not available</option>
                </select>
              </div>
            </div>
          </div>
          <PanCardApplicationForm/>
        </form>
    
      </div>
    </div>
  </div>
  

  <div className="container">
  <h2 className="text-center">FAQs: Surrender Duplicate PAN Card</h2>
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
  <div className="text-center mt-50">
    <button className="btn btn-primary btn-xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      APPLY NOW
    </button>
  </div>
</div>
</>


  );
};

export default SurrenderDuplicatePanCard;
