// src/components/CancelDuplicatePanCard.jsx
import React, { useState } from 'react';

import PanCardApplicationForm from './PanCardApplicationForm';


const CancelDuplicatePanCard = () => {
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
      question: "How to Cancel Duplicate PAN Card Online?",
      answer: "You can apply for Cancel Duplicate PAN Card online by completing the Cancel Duplicate PAN Card Application Form and submit all relevant documents."
    },
    {
      question: "Is Duplicate PAN Card Cancel required?",
      answer: "Yes, it is mandatory to cancel the duplicate PAN Card else The income tax officer can levy a penalty of Rs.10,000 on a person who has more than one PAN card under Section 272B of the Income Tax Act."
    },
    {
      question: "How can I track Cancel Duplicate PAN Card application status?",
      answer: (
        <div>
          After applying for Cancel Duplicate PAN Card application online, you can track status on our portal at below link: <br />
          <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a>
        </div>
      )
    },
    {
      question: "What Documents are required for Cancelling Duplicate PAN Card application Online?",
      answer: (
        <div>
          <div><strong>Duplicate PAN Card Proof (Any one):</strong></div>
          <ul>
            <li>PAN Card Copy</li>
            <li>PAN Allotment Letter</li>
            <li>If you have only PAN number then select option 'PAN Copy Not Available' in above form</li>
          </ul>
          <div><strong>Active PAN Card Proof (Any one):</strong></div>
          <ul>
            <li>PAN Card Copy</li>
            <li>PAN Allotment Letter</li>
            <li>If you have only PAN number then select option 'PAN Copy Not Available' in above form</li>
          </ul>
          <div><strong>Name Identity Proof (Any one):</strong></div>
          <ul>
            <li>Certificate of identity in Original signed by a Member of Parliament.</li>
            <li>Pensioner card having photograph of the applicant.</li>
            <li>Ration card having photograph of the applicant.</li>
            <li>Passport.</li>
            <li>Central Government Health Scheme Card.</li>
            <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
            <li>Bank certificate in Original on letter head from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant.</li>
            <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
            <li>Driving License.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Aadhaar Card.</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
            <li>Arm’s license.</li>
            <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
            <li>Election Card / Voter ID.</li>
          </ul>
          <div><strong>Address Proof (Any one):</strong></div>
          <ul>
            <li>Domicile certificate issued by the Government.</li>
            <li>Employer certificate in original.</li>
            <li>Water Bill less than 3 months old.</li>
            <li>Passport of Spouse (Husband/Wife).</li>
            <li>Consumer gas connection card or book or piped gas bill.</li>
            <li>Passport.</li>
            <li>Certificate of identity in Original signed by a Member of Parliament.</li>
            <li>Election Card / Voter ID.</li>
            <li>Electricity Bill less than 3 months old.</li>
            <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
            <li>Bank account statement less than 3 months old.</li>
            <li>Property Registration Document.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Depository account statement less than 3 months old.</li>
            <li>Credit card statement less than 3 months old.</li>
            <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
            <li>Aadhaar Card.</li>
            <li>Latest property tax assessment order.</li>
            <li>Driving License.</li>
            <li>Landline/Broadband connection bill less than 3 months old.</li>
            <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
            <li>Post office passbook having address of the applicant.</li>
          </ul>
          <div><strong>Birth Date Proof (Any one):</strong></div>
          <ul>
            <li>Birth certificate issued by the Municipal Authority or any office authorised to issue birth.</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
            <li>Driving License.</li>
            <li>Affidavit sworn before a magistrate stating the date of birth.</li>
            <li>Election Card / Voter ID.</li>
            <li>Aadhaar Card.</li>
            <li>Marriage Certificate.</li>
            <li>Passport.</li>
            <li>Matriculation certificate or Mark sheet of recognized board.</li>
            <li>Central Government Health Scheme Card.</li>
            <li>Domicile certificate issued by the Government.</li>
            <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
            <li>Pension payment order.</li>
          </ul>
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
          Cancel Duplicate PAN Card Application
        </h1 >
      </div>
      <div className="column col-12">
        <form className="main-pan-form individual" id="change-pan-form" method="POST" onSubmit={handleSubmit}>
          <div className="hero bg-gray">
            <div className="hero-body">
              <div className="form-group">
                <label className="form-label" htmlFor="pan-form-applicant-pan-number-surrender">
                  Enter Duplicate PAN Number to
                  <mark>CANCEL</mark>
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
  <h2 className="text-center">FAQs: Cancel Duplicate PAN Card</h2>
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

export default CancelDuplicatePanCard;
