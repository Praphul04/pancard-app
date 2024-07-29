

import React, { useState } from 'react';
import './PanCardCorrectionForm.css'; // Ensure this file contains your custom CSS
import PanCardApplicationForm from './PanCardApplicationForm';
import { Link } from 'react-router-dom';

const MinorToMajorPanCardForm = () => {
 
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
          question: "How Major PAN Card is different from Minor PAN Card?",
          answer: (
            <>
            <p>
              Minor PAN Card does not have Applicant's Photo on it. Also, it has parent's/guardian's signature on it. When Minor PAN is converted to Major PAN Card, it will have Applicant's Photo and Signature as well. PAN holder details are printed on the Physical Card. It has PAN Number printed on top and contains PAN holder's Name, Date of Birth & Father's Name. Most importantly, PAN Card processed by us has a Hologram which makes it a genuine ID proof for its holder. This is why Major PAN Card with Genuine Hologram is required by banks or other financial institutions as proof of Identity.
            </p>
            <img
              alt="Minor to Major PAN Card Differences"
              src="https://www.pancardapp.com/assets/img/form-pages/minor-to-major-pan-card/minor-to-major-pan-card-difference.jpg?v=1"
              className="img-responsive mt-2"
            />
          </>
          
          )
        },
        {
          question: "How to update PAN Card from Minor to Major?",
          answer: "You can update PAN Card Minor to Major by filling up the online 'Minor to Major PAN Card Application Form' and completing all steps with the required documents."
        },
        {
          question: "Whether Minor PAN Card to Major PAN Card update is required?",
          answer: "Yes, after the applicant becomes 18 years old. Since Major PAN Card has the applicant's photo and signature on it, banks or financial institutions require it as PAN proof while opening a bank account or obtaining a loan. Therefore, at such times, PAN Card minor to major update is required."
        },
        {
          question: "How the updated Minor to Major PAN Card will be delivered to the applicant?",
          answer: "The updated Minor to Major Card will be delivered to the PAN Holder's Home Address by Speed POST. The applicant must mention the address in the PAN Form while applying for the minor to major PAN card update online. Address proof with the same address needs to be provided along with the application."
        },
        {
          question: "Will I receive a Soft Copy (ePAN) of my updated Major PAN Card by email?",
          answer: "Yes, you will receive an updated Minor to Major PAN Card's Soft Copy (ePAN) on the email address mentioned in the form by the applicant."
        },
        {
          question: "How can I track Minor to Major PAN Card Status after application?",
          answer: (
            <>
              After applying for a PAN Minor to Major update, you can track the real-time PAN card status on our portal at the following link: 
              <Link to="https://www.pancardapp.com/track-status" target="_blank" rel="noopener noreferrer"> Track PAN Card Status</Link>
            </>
          )
        },
        {
          question: "What if there are errors in my Minor to Major PAN Card Form?",
          answer: "Our team will verify your Minor to Major PAN Card Form and check for any errors. If there are any errors, our team will correct them and may contact you for further clarifications if needed."
        },
        {
          question: "Is Aadhaar card compulsory for Minor to Major PAN Card Application?",
          answer: "Yes, Aadhaar card is now compulsory for Minor to Major PAN Card Application."
        },
        {
          question: "My Minor PAN Card is not linked to my Aadhaar Card. Can I still apply for Minor to Major PAN Card?",
          answer: "Yes, you can apply for Major PAN Card even if your Minor PAN Card is not linked to Aadhaar Card."
        },
        {
          question: "My Aadhaar Card is not linked to my Mobile number. Can I still apply for Minor to Major PAN Card update?",
          answer: "Yes, you can apply for Minor to Major PAN Card update even if your Aadhaar Card is not linked to your Mobile number."
        },
        {
          question: "Will my PAN number change when updating from Minor to Major?",
          answer: "No, the PAN number remains the same. The details on the PAN Card are updated to reflect the change in status from Minor to Major."
        },
        {
          question: "What Documents are required for Minor to Major PAN Card Application?",
          answer: (
            <div>
              For PAN Card Minor to Major Application, the following documents are required:
              <br />
              <strong>Identity Proof (Any one of the following):</strong>
              <ul>
                <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
                <li>Driving License.</li>
                <li>Passport.</li>
                <li>Aadhaar Card.</li>
                <li>Election Card / Voter ID.</li>
                <li>Certificate of identity in Original signed by a Gazetted officer.</li>
              </ul>
             <div> <strong>Date Of Birth Proof (Any one of the following):</strong></div>
              <ul>
                <li>Matriculation certificate or Mark sheet of recognized board.</li>
                <li>Driving License.</li>
                <li>Affidavit sworn before a magistrate stating the date of birth.</li>
                <li>Passport.</li>
                <li>Election Card / Voter ID.</li>
                <li>Aadhaar Card.</li>
                <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
                <li>Birth certificate issued by the Municipal Authority or any office authorized to issue birth.</li>
              </ul>
              <div> <strong>Address Proof (Any one of the following):</strong></div>
              <ul>
                <li>Passport of Spouse (Husband/Wife).</li>
                <li>Post office passbook having address of the applicant.</li>
                <li>Driving License.</li>
                <li>Electricity Bill less than 3 months old.</li>
                <li>Bank account statement less than 3 months old.</li>
                <li>Domicile certificate issued by the Government.</li>
                <li>Election Card / Voter ID.</li>
                <li>Water Bill less than 3 months old.</li>
                <li>Passport.</li>
                <li>Aadhaar Card.</li>
                <li>Employer certificate in original.</li>
                <li>Consumer gas connection card or book or piped gas bill.</li>
                <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
                <li>Credit card statement less than 3 months old.</li>
                <li>Certificate of identity in Original signed by a Gazetted officer.</li>
                <li>Landline/Broadband connection bill less than 3 months old.</li>
              </ul>
            </div>
          )
        }
      ];



  return (
<>
<div className="container">
  <div className="">
  <h1 class="pan-form-heading">
Minor to Major PAN Card Application after 18 Age <br/> <mark class="text-xtiny mt-1 d-inline-block" style={{fontSize:"20px"}}>With Photo & Sign On Card</mark> 


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
  
    
                    <h2 className="text-center">Frequently Asked Questions</h2>
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

export default MinorToMajorPanCardForm;