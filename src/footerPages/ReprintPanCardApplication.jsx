

import React, { useState } from 'react';
// import './PanCardCorrectionForm.css'; // Ensure this file contains your custom CSS

import { Link } from 'react-router-dom';
import PanCardApplicationForm from '../pages/PanCardApplicationForm';


const ReprintPanCardApplication = () => {
 
    const [nameChangeReason, setNameChangeReason] = useState('');
    const [fatherNameChangeReason, setFatherNameChangeReason] = useState('');
    const [dobChange, setDobChange] = useState(false);
    const [addressChange, setAddressChange] = useState(false);
    const [photoChange, setPhotoChange] = useState(true);
    const [signatureChange, setSignatureChange] = useState(true);
  
  
    const handleCheckboxChange = (setter) => (e) => {
      setter(e.target.checked);
    };
  
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add form submission logic here
    };
  
    const [selectedOption, setSelectedOption] = useState('no');
  
    // Handler for radio button change
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };


    const faqs = [
        {
          question: "What is Reprint PAN Card?",
          answer: (
            <div>
              The Income Tax Department reprints the PAN holder's existing data on the card in Reprint PAN Card Application. It will have the most up-to-date PAN Card design, such as a hologram, making it a perfect ID proof.
            </div>
          )
        },
        {
          question: "How to Reprint PAN Card Online?",
          answer: (
            <div>
              You can apply for Reprint PAN Card online by completing the Reprint PAN Card Application Form and submitting all relevant documents.
            </div>
          )
        },
        {
          question: "How to reprint old PAN card online?",
          answer: (
            <div>
              You can reprint any old PAN Card online by filling out the Reprint PAN Card Application and submitting all relevant documents.
            </div>
          )
        },
        {
          question: "How to get PAN Card Reprint online in email?",
          answer: (
            <div>
              You can obtain a PAN Card Reprint in email by providing the right email address in the above Reprint PAN Card Application Form.
            </div>
          )
        },
        {
          question: "Does PAN Number Change in Reprint PAN Card Application?",
          answer: (
            <div>
              No, the PAN number does not change when you reprint your PAN card.
            </div>
          )
        },
        {
          question: "What Documents are required for Reprint PAN Card Application Online?",
          answer: (
            <div>
              <div><strong>Name Identity Proof (Any one of the following):</strong></div>
              <ol>
                <li>Driving License.</li>
                <li>Passport.</li>
                <li>Aadhaar Card.</li>
                <li>Central Government Health Scheme Card.</li>
                <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
                <li>Bank certificate in Original on letter head from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant.</li>
                <li>Ration card having photograph of the applicant.</li>
                <li>Pensioner card having photograph of the applicant.</li>
                <li>Certificate of identity in Original signed by a Member of Parliament.</li>
                <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
                <li>Arm’s license.</li>
                <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
                <li>Certificate of identity in Original signed by a Gazetted officer.</li>
                <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
                <li>Election Card / Voter ID.</li>
              </ol>
              <div><strong>Address Proof (Any one of the following):</strong></div>
              <ol>
                <li>Credit card statement less than 3 months old.</li>
                <li>Water Bill less than 3 months old.</li>
                <li>Aadhaar Card.</li>
                <li>Domicile certificate issued by the Government.</li>
                <li>Certificate of identity in Original signed by a Gazetted officer.</li>
                <li>Consumer gas connection card or book or piped gas bill.</li>
                <li>Property Registration Document.</li>
                <li>Landline/Broadband connection bill less than 3 months old.</li>
                <li>Passport of Spouse (Husband/Wife).</li>
                <li>Passport.</li>
                <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
                <li>Employer certificate in original.</li>
                <li>Post office passbook having address of the applicant.</li>
                <li>Driving License.</li>
                <li>Certificate of identity in Original signed by a Member of Parliament.</li>
                <li>Depository account statement less than 3 months old.</li>
                <li>Latest property tax assessment order.</li>
                <li>Bank account statement less than 3 months old.</li>
                <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
                <li>Election Card / Voter ID.</li>
                <li>Electricity Bill less than 3 months old.</li>
                <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
              </ol>
              <div><strong>Birth Date Proof (Any one of the following):</strong></div>
              <ol>
                <li>Matriculation certificate or Mark sheet of recognized board.</li>
                <li>Affidavit sworn before a magistrate stating the date of birth.</li>
                <li>Pension payment order.</li>
                <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
                <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
                <li>Marriage Certificate.</li>
                <li>Driving License.</li>
                <li>Election Card / Voter ID.</li>
                <li>Domicile certificate issued by the Government.</li>
                <li>Central Government Health Scheme Card.</li>
                <li>Aadhaar Card.</li>
                <li>Passport.</li>
                <li>Birth certificate issued by the Municipal Authority or any office authorized to issue birth certificates.</li>
              </ol>
            </div>
          )
        },
        {
          question: "Is PAN Card Reprint required?",
          answer: (
            <div>
              Financial Institutions or Banks request a PAN Card as proof of PAN. If your PAN Card is stolen or misplaced, you can apply for PAN Card Reprint and present Reprint PAN Card.
            </div>
          )
        },
        {
          question: "Who has to sign the Reprint PAN Application?",
          answer: (
            <div>
              The PAN Card Reprint Form must be signed by the PAN Holder. If he or she is unable to sign, a left thumb impression must be done on the PanReprint form.
            </div>
          )
        },
        {
          question: "Can I update PAN Details while we make Reprint PAN Card online?",
          answer: (
            <div>
              Yes, you can update your PAN details when you apply for PAN card Reprint online.
            </div>
          )
        },
        {
          question: "How PAN Card Reprint will be delivered?",
          answer: (
            <div>
              PAN Card Reprint will be delivered by Courier to the PAN Holder's Home Address as specified in the PAN Form when requesting a Reprint PAN Card. Address proof with the same address must be given with the application.
            </div>
          )
        },
        {
          question: "How can I track PAN Card Reprint Status after application?",
          answer: (
            <div>
              After applying for Reprint PAN Card online, you can track PAN card Reprint status on our portal at the following link: <br />
              <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a>
            </div>
          )
        }
      ];
      


  return (
<>
<div className="container">
  <div className="">
  <h1 class="pan-form-heading">
  Reprint PAN Card Application


</h1>
  </div>
  <form className="hero bg-gray" id="change-pan-form" method="POST" action="./" onSubmit={handleSubmit}>
    
    {/* PAN Card Number and Issuance Proof */}
    <div className="form-group">
      <label className="form-label" htmlFor="pan-form-applicant-pan-number">PAN Card Number</label>
      <input className="form-input" type="text" id="pan-form-applicant-pan-number" placeholder="Enter your PAN Card Number here" maxLength="10" />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="pan-form-select-pan-proof">PAN Issuance Proof</label>
      <select className="form-select" id="pan-form-select-pan-proof">
        <option value>Select PAN Issuance Proof</option>
        <option value="pan-card-copy">PAN Card Copy OR e-PAN</option>
        <option value="pan-allotment-letter">PAN Allotment Letter Copy</option>
        <option value="no-pan-card-copy">PAN copy not available</option>
      </select>
    </div>
    <div className="card bg-light">
    <div className="card-body">
      <div className="form-group">
        <div className="form-label">
          Do you want to make correction/changes in PAN Card also?
        </div>
        <label className="radio-option">
          <input
            type="radio"
            name="pan-form-radio-changes-with-reprint"
            value="yes"
            checked={selectedOption === 'yes'}
            onChange={handleRadioChange}
          />
          <span className="custom-radio"></span> Yes
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="pan-form-radio-changes-with-reprint"
            value="no"
            checked={selectedOption === 'no'}
            onChange={handleRadioChange}
          />
          <span className="custom-radio"></span> No
        </label>
      </div>
    </div>
  </div>

{/* Correction Choices */}
 {selectedOption === 'yes' && (
 
<div className="form-correction-group">
      <label className="form-label">Please select/tick the items you want to correct or change in your PAN Card</label>
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" id="pan-form-checkbox-correction-name" checked={!!nameChangeReason} onChange={() => setNameChangeReason(nameChangeReason ? '' : 'name-change')} />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Name</span>
            </label>
          </div>
          {nameChangeReason && (
           <div className="form-group name-change-group">
           <label className="form-label">Select Reason for change:</label>
           <div className="radio-group">
             <label className="form-radio">
               <input type="radio" name="pan-form-radio-name-change-reason" value="minor-name-change" checked={nameChangeReason === 'minor-name-change'} onChange={() => setNameChangeReason('minor-name-change')} />
               <span className="radio-custom"></span>Spelling mistake in Name or <br className="show-xs" /> Change in Name order/sequence
             </label>
             <label className="form-radio">
               <input type="radio" name="pan-form-radio-name-change-reason" value="major-name-change" checked={nameChangeReason === 'major-name-change'} onChange={() => setNameChangeReason('major-name-change')} />
               <span className="radio-custom"></span>
               Major Name Change
             </label>
             <label className="form-radio">
               <input type="radio" name="pan-form-radio-name-change-reason" value="change-after-marriage" checked={nameChangeReason === 'change-after-marriage'} onChange={() => setNameChangeReason('change-after-marriage')} />
               <span className="radio-custom"></span>
               Name Change after Marriage <span style={{ fontSize: '12px' }}>(for ladies)</span>
             </label>
           </div>
         </div>
         
          )}
          {nameChangeReason && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-applicant-full-name">Updated Full Name</label>
              <input className="form-input" type="text" id="pan-form-applicant-full-name" placeholder="Enter your Full Name here" />
            </div>
          )}
          {nameChangeReason && (
            <div className="form-group">
              <div className="columns">
                <div className="column">
                  <label className="form-label" htmlFor="application_name_birfurcation_last_name">Surname / Last Name</label>
                  <input className="form-input" type="text" id="application_name_birfurcation_last_name" placeholder="Enter your Surname here" />
                </div>
                <div className="column">
                  <label className="form-label" htmlFor="application_name_birfurcation_first_name">First Name</label>
                  <input className="form-input" type="text" id="application_name_birfurcation_first_name" placeholder="Enter your First Name here" />
                </div>
                <div className="column">
                  <label className="form-label" htmlFor="application_name_birfurcation_middle_name">Middle Name</label>
                  <input className="form-input" type="text" id="application_name_birfurcation_middle_name" placeholder="Enter your Middle Name here" />
                </div>
              </div>
            </div>
          )}
          {nameChangeReason && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-poi-proof">Name Identity Proof</label>
              <select className="form-select" id="pan-form-select-poi-proof">
                <option value>Select Name Identity Proof</option>
                <option value="aadhaar-card">Aadhaar Card</option>
                <option value="election-card">Election Card / Voter ID</option>
                <option value="driving-license">Driving License</option>
                <option value="passport">Passport</option>
                <option value="ration-card">Ration card having photograph of the applicant</option>
                <option value="certificate-gazetted-officer">Certificate of identity in Original signed by a Gazetted officer</option>
                <option value="certificate-member-parliament">Certificate of identity in Original signed by a Member of Parliament</option>
                <option value="certificate-member-legislative-assembly">Certificate of identity in Original signed by a Member of Legislative Assembly</option>
                <option value="certificate-municipal-councilor">Certificate of identity in Original signed by a Municipal Councilor</option>
                <option value="pensioner-card">Pensioner card having photograph of the applicant</option>
                <option value="central-government-health-scheme-card">Central Government Health Scheme Card</option>
                <option value="ex-servicemen-contributory-health-scheme">Ex-Servicemen Contributory Health Scheme photo card</option>
                <option value="arms-license">Arm’s license</option>
                <option value="poi-by-central-state-public-sector">Photo identity card issued by the Central Government or State Government or Public Sector Undertaking</option>
                <option value="bank-certificate">Bank certificate in Original on letter head from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant</option>
              </select>
            </div>
          )}
          {nameChangeReason && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-supporting-poi-proof">Supporting Document for Name Change</label>
              <select className="form-select" id="pan-form-select-supporting-poi-proof">
                <option value>Select Supporting Document</option>
                <option value="marriage-certificate">Marriage Certificate</option>
                <option value="deed-poll">Deed Poll</option>
                <option value="gazette-notification">Gazette Notification</option>
                <option value="court-order">Court Order</option>
              </select>
            </div>
          )}
        </div>
      </div>

    {/* Father's Name Correction */}
    <div className="form-correction-group">
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" id="pan-form-checkbox-correction-fathers-name" checked={!!fatherNameChangeReason} onChange={() => setFatherNameChangeReason(fatherNameChangeReason ? '' : 'father-name-change')} />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Father's Name</span>
            </label>
          </div>
          {fatherNameChangeReason && (
           <div className="form-group">
           <label className="form-label">Select Reason for change:</label>
           <div className="radio-group">
             <label className="form-radio">
               <input type="radio" name="pan-form-radio-fathers-name-change-reason" value="minor-name-change" checked={fatherNameChangeReason === 'minor-name-change'} onChange={() => setFatherNameChangeReason('minor-name-change')} />
               <span className="radio-custom"></span>
               Spelling mistake in Father's Name or <br className="show-xs" /> Change in Father's Name order/sequence
             </label>
             <label className="form-radio">
               <input type="radio" name="pan-form-radio-fathers-name-change-reason" value="major-name-change" checked={fatherNameChangeReason === 'major-name-change'} onChange={() => setFatherNameChangeReason('major-name-change')} />
               <span className="radio-custom"></span>
               Major Father's Name Change
             </label>
           </div>
         </div>
          )}
          {fatherNameChangeReason && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-applicant-fathers-name">Updated Father's Name</label>
              <input className="form-input" type="text" id="pan-form-applicant-fathers-name" placeholder="Enter Father's Name here" />
            </div>
          )}
          {fatherNameChangeReason && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-supporting-poi-proof-fathers-name">Supporting Document for Father's Name Change</label>
              <select className="form-select" id="pan-form-select-supporting-poi-proof-fathers-name">
                <option value>Select Supporting Document</option>
                <option value="birth-certificate">Birth Certificate</option>
                <option value="deed-poll">Deed Poll</option>
                <option value="court-order">Court Order</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>

  
    {/* Date of Birth Correction */}
    <div className="form-correction-group">
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" id="pan-form-checkbox-correction-dob" checked={dobChange} onChange={handleCheckboxChange(setDobChange)} />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Date Of Birth</span>
            </label>
          </div>
          {dobChange && (
            <div className="form-group">
              <label className="form-label">Updated Date Of Birth:</label>
              <div className="columns">
                <div className="column">
                  <input className="form-input" type="number" id="dob-day" placeholder="Day" min="1" max="31" />
                </div>
                <div className="column">
                  <input className="form-input" type="number" id="dob-month" placeholder="Month" min="1" max="12" />
                </div>
                <div className="column">
                  <input className="form-input" type="number" id="dob-year" placeholder="Year" min="1900" max={new Date().getFullYear()} />
                </div>
              </div>
            </div>
          )}
          {dobChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-dob-proof">Date Of Birth Proof</label>
              <select className="form-select" id="pan-form-select-dob-proof">
                <option value>Select DOB Proof</option>
                <option value="birth-certificate">Birth Certificate</option>
                <option value="passport">Passport</option>
                <option value="aadhaar-card">Aadhaar Card</option>
                <option value="driving-license">Driving License</option>
                <option value="matriculation-certificate">Matriculation Certificate</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Address Correction */}
    <div className="form-correction-group">
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" id="pan-form-checkbox-correction-address" checked={addressChange} onChange={handleCheckboxChange(setAddressChange)} />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Address for Communication</span>
            </label>
          </div>
          {addressChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-applicant-address">Updated Address</label>
              <textarea className="form-input" id="pan-form-applicant-address" placeholder="Enter your new Address here" rows="3"></textarea>
            </div>
          )}
          {addressChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-address-proof">Address Proof</label>
              <select className="form-select" id="pan-form-select-address-proof">
                <option value>Select Address Proof</option>
                <option value="utility-bill">Utility Bill (e.g., electricity, water, telephone)</option>
                <option value="rent-agreement">Rent Agreement</option>
                <option value="bank-statement">Bank Statement</option>
                <option value="passport">Passport</option>
                <option value="aadhaar-card">Aadhaar Card</option>
                <option value="voter-id">Voter ID</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Photo and Signature Correction */}
    <div className="form-correction-group">
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" id="pan-form-checkbox-correction-photo" checked={photoChange} onChange={handleCheckboxChange(setPhotoChange)} />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Photo</span>
            </label>
          </div>
          {photoChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-upload-photo">Upload New Photo</label>
              <input className="form-input" type="file" id="pan-form-upload-photo" accept="image/*" />
            </div>
          )}
          {photoChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-photo-proof">Photo Proof</label>
              <select className="form-select" id="pan-form-select-photo-proof">
                <option value>Select Photo Proof</option>
                <option value="photo-id">Photo ID</option>
                <option value="passport">Passport</option>
                <option value="driver-license">Driver's License</option>
                <option value="aadhaar-card">Aadhaar Card</option>
              </select>
            </div>
          )}
          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" id="pan-form-checkbox-correction-signature" checked={signatureChange} onChange={handleCheckboxChange(setSignatureChange)} />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Signature</span>
            </label>
          </div>
          {signatureChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-upload-signature">Upload New Signature</label>
              <input className="form-input" type="file" id="pan-form-upload-signature" accept="image/*" />
            </div>
          )}
          {signatureChange && (
            <div className="form-group">
              <label className="form-label" htmlFor="pan-form-select-signature-proof">Signature Proof</label>
              <select className="form-select" id="pan-form-select-signature-proof">
                <option value>Select Signature Proof</option>
                <option value="photo-id">Photo ID</option>
                <option value="passport">Passport</option>
                <option value="driver-license">Driver's License</option>
                <option value="aadhaar-card">Aadhaar Card</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>

    </div>
)}

    {/* Contact Information */}
  
  </form>
  <PanCardApplicationForm/>
</div>

<div className="container">
  
    
                    <h2 className="text-center">FAQs: Reprint PAN Card Apply Online</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-panel">
                            <div className="faq-question"><strong>{faq.question}</strong></div>
                            <div className="faq-answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
    <div className="text-center mt-50">
      <button className="btn btn-primary btn-xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        APPLY NOW
      </button>
    </div>


</>

);
};

export default ReprintPanCardApplication;