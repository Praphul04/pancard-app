import React, { useState, useEffect } from 'react';
import './PanCardCorrectionForm.css'; // Ensure this file contains your custom CSS
import PanCardApplicationForm from './PanCardApplicationForm';
import { Link } from 'react-router-dom';



const PanChangesAfterMarrigeForm = () => {
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
      question: "PAN Card Name Change After Marriage - Hassle Free Process",
      answer: (
        <div>
          At PANCardApp.com, we understand how important it is to update your PAN card with your new name after marriage. Our dedicated service makes the process of changing your PAN card name after marriage simple, quick, and stress-free.
          <div className="text-center">
            <img 
              src="https://www.pancardapp.com/assets/img/form-pages/individual-name-change-after-marriage/after-marriage-pan-card-change-poster.jpg" 
              className="img-responsive col-mx-auto" 
              alt="pan card name change after marriage" 
              style={{ maxHeight: '350px' }} 
            />
          </div>
        </div>
      )
    },
    {
      question: "How to Change Your Name in PAN Card After Marriage?",
      answer: (
        <div>
          Changing your name on your PAN card after marriage is essential for maintaining accurate financial records. Here’s how you can do it quickly with pancardapp.com:
          <ol>
            <li>
              <strong>Visit <Link to="./individual-name-change-after-marriage.php">PAN Name Change After Marriage Form</Link> at Pancardapp.com:</strong>
              <br /> Our user-friendly portal guides you through the process effortlessly to update your PAN card after marriage.
            </li>
            <li>
              <strong>Fill Out the Form:</strong>
              Enter your PAN card details, current name, and your new name after marriage. Ensure all details are accurate to avoid delays.
            </li>
            <li>
              <strong>Submit Documents:</strong>
              Submit the required documents for PAN card name change after marriage, including:
              <ul>
                <li>Marriage certificate Xerox</li>
                <li>Existing PAN card Xerox</li>
                <li>Proof of identity with your new name (such as an updated Aadhaar card) Xerox</li>
              </ul>
            </li>
            <li>
              <strong>Pay the Fee:</strong>
              Pay a nominal fee for processing your PAN card name change online after marriage.
            </li>
            <li>
              <strong>Verification and Delivery:</strong>
              Our team verifies your submitted documents, and once approved, you receive your updated PAN card at your registered address.
            </li>
          </ol>
        </div>
      )
    },
    {
      question: "How to Change Surname in PAN Card After Marriage online?",
      answer: (
        <div>
          For Surname Change after marriage, fill up the above online PAN Change Application Form and complete all steps. Required documents like Marriage Certificate, Old PAN copy etc. needs to be submitted.
        </div>
      )
    },
    {
      question: "Is it mandatory to change name on PAN card after marriage?",
      answer: (
        <div>
          Yes. Banks or Financial Institutions ask to present PAN Card with updated Name after Marriage as PAN proof while opening bank account or providing loan. Hence, PAN card name correction after marriage is mandatory.
        </div>
      )
    },
    {
      question: "Why Update Your PAN Card After Marriage?",
      answer: (
        <div>
          Updating your PAN card after marriage is required for several reasons:
          <ul>
            <li><strong>Consistency in Financial Records:</strong> Ensures all your financial documents and transactions have your new updated name.</li>
            <li><strong>Legal Identity Proof:</strong> Your PAN card serves as a main identity proof.</li>
            <li><strong>Avoiding Legal Complications:</strong> Ensures smooth verification for financial and legal transactions.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Whose Father Name should be mentioned in Female PAN Surname Change Application after Marriage?",
      answer: (
        <div>
          There will be no change in Father's Name of married woman. Father Name in PAN Card will remain same as it was in before marriage PAN Card. So Father-in-law name should not be mentioned in after marriage name change PAN Application.
        </div>
      )
    },
    {
      question: "Who has to sign the PAN Name update Application after Marriage application?",
      answer: (
        <div>
          PAN Holder i.e. married woman needs to sign the PAN Card Form. If she is unable to sign then her left thumb impression is required on form.
        </div>
      )
    },
    {
      question: "How PAN Card with updated name after marriage will be delivered?",
      answer: (
        <div>
          PAN Card with name correction after marriage will be delivered to PAN Holder's Home Address by Courier mentioned in PAN Form. Address proof having same address needs to be submitted along with application.
        </div>
      )
    },
    {
      question: "How can I track PAN Card Name Change Status after doing application?",
      answer: (
        <div>
          After applying for PAN Card update after marriage, you can track PAN card status on our portal at below link: <br />
          <Link to="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</Link>
        </div>
      )
    },
    {
      question: "Complete document list for PAN Card Name change after marriage.",
      answer: (
        <div>
          For PAN Card Name update after marriage Application following documents are required: <br /><br />
          <div className="text-bold">
            Marriage Supporting Proof: Proof Of Marriage (Any one of the following):
          </div>
          <ol>
            <li>Marriage Certificate</li>
            <li>Marriage Invitation Card</li>
            <li>Passport showing Husband’s name</li>
            <li>Publication of Name Change in Official Gazette</li>
          </ol>
          <div className="text-bold">
            Identity Proof with your updated name after marriage (Any one of the following):
          </div>
          <ol>
            <li>Election Card / Voter ID.</li>
            <li>Aadhaar Card.</li>
            <li>Driving License.</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Passport.</li>
          </ol>
          <div className="text-bold">
            Address Proof (Any one of the following):
          </div>
          <ol>
            <li>Electricity Bill less than 3 months old.</li>
            <li>Election Card / Voter ID.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
            <li>Passport of Spouse (Husband/Wife).</li>
            <li>Domicile certificate issued by the Government.</li>
            <li>Passport.</li>
            <li>Employer certificate in original.</li>
            <li>Aadhaar Card.</li>
            <li>Water Bill less than 3 months old.</li>
            <li>Driving License.</li>
            <li>Credit card statement less than 3 months old.</li>
            <li>Consumer gas connection card or book or piped gas bill.</li>
            <li>Landline/Broadband connection bill less than 3 months old.</li>
            <li>Post office passbook having address of the applicant.</li>
            <li>Bank account statement less than 3 months old.</li>
          </ol>
        </div>
      )
    }
  ];
  

  const testimonialsData = [
    {
      text: 'I used pancardapp.com to change my name on my PAN card after getting married. It was very easy and fast. I got my new card quickly. I highly recommend their service!',
      author: '- Priya Sharma, Mumbai'
    },
    {
      text: 'Changing my name on my PAN card after marriage was very easy with pancardapp.com. I was a bit worried, but their online process was simple and quick. Great service!',
      author: '- Anjali Mehta, Delhi'
    },
    {
      text: 'Pancardapp.com made updating my PAN card after marriage so easy. Everything went smoothly, and their customer service was very helpful. Thank you.',
      author: '- Rohini Kapoor, Bangalore'
    },
    {
      text: 'I recommend pancardapp.com for anyone needing to change their PAN card name after marriage. The process was simple, and I got my new card in a few days. Excellent service!',
      author: '- Meena Desai, Ahmedabad'
    },
    {
      text: 'Using pancardapp.com to update my PAN card after marriage was a great decision. Their instructions were clear, and the online process was easy to follow. Great experience!',
      author: '- Shreya Patel, Rajkot'
    },
    {
      text: 'Pancardapp.com made changing the name on my PAN card after marriage very simple. Everything was done quickly. I\'m very happy with their service.',
      author: '- Neha Reddy, Chennai'
    },
    {
      text: 'The service from pancardapp.com for updating my PAN card after marriage was excellent. They made the whole process easy and stress-free. I appreciate their help.',
      author: '- Aruna Lakshmi, Kolkata'
    },
    {
      text: 'Thanks to pancardapp.com, I was able to change my PAN card name after marriage quickly and easily. Their website is easy to use, and the whole process was very fast. Highly recommend!',
      author: '- Kavya Talwar, Pune'
    },
    {
      text: 'I\'m so glad I chose pancardapp.com to update my PAN card after marriage. The online application was easy, and the support team was very helpful. Great service.',
      author: '- Divya Joshi, Jaipur'
    },
    {
      text: 'Pancardapp.com provided a great service for my PAN card name change after marriage. The process was quick, the instructions were clear, and I got my new card fast. Couldn\'t be happier.',
      author: '- Sneha Gupta, Lucknow'
    },
  ];


  return (
    <>
    <div className="container">
      <div className="">
        <h1 className="hero-body pan-form-heading">PAN Card Name Change After MARRIAGE Form (2024)</h1>
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
      <h2 className="text-center">FAQs: Name Update in PAN Card After Marriage</h2>
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

<div className="columns mt-50">
      <div className="column col-12">
        <h3 className="text-center">
          What <span className="text-primary underline">Applicants</span> Are Saying
        </h3>
      </div>
      <div className="column col-12" style={{ padding: '0px 30px' }}>
        <div className="glider-contain">
          <div className="glider">
            {testimonialsData.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <div className="testimonial-text">
                  {testimonial.text}
                  <div className="text-italic text-right">
                    {testimonial.author}
                    <div className="rating">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button aria-label="Previous" className="glider-prev">«</button>
          <button aria-label="Next" className="glider-next">»</button>
          <div role="tablist" className="dots"></div>
        </div>
      </div>
    </div>
      <div className="text-center mt-50">
        <button className="btn btn-primary btn-xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          APPLY NOW
        </button>
      </div>
    </div>

</>
  );
};

export default PanChangesAfterMarrigeForm;
