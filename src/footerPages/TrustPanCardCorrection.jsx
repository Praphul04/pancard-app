import React, { useState } from 'react';

const PanCardCorrectionForm = () => {
  // State management for the form
  const [panNumber, setPanNumber] = useState('');
  const [nameCorrection, setNameCorrection] = useState(false);
  const [nameChangeReason, setNameChangeReason] = useState('');
  const [fullName, setFullName] = useState('');
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [poiProof, setPoiProof] = useState('');
  const [supportingProof, setSupportingProof] = useState('');
  const [dobCorrection, setDobCorrection] = useState(false);
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [addressCorrection, setAddressCorrection] = useState(false);
  const [photoCorrection, setPhotoCorrection] = useState(false);
  const [signatureCorrection, setSignatureCorrection] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [correctionDob, setCorrectionDob] = useState(false);
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [dobProof, setDobProof] = useState('');

 

  const [addressProof, setAddressProof] = useState('');
  const [trustDetails, setTrustDetails] = useState({ fullName: '', surname: '', firstName: '', middleName: '' });
  const [fatherName, setFatherName] = useState({ surname: '', firstName: '', middleName: '' });


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({
      panNumber,
      nameCorrection,
      nameChangeReason,
      fullName,
      surname,
      firstName,
      middleName,
      poiProof,
      supportingProof,
      dobCorrection,
      dob,
      addressCorrection,
      photoCorrection,
      signatureCorrection,
      mobileNumber,
      email,
    });
  };

  return (
    <div className="container">
      <h1 className="hero-body pan-form-heading">TRUST PAN Card Correction Application</h1>
      <form className="hero bg-gray" onSubmit={handleSubmit}>
        {/* PAN Card Number */}
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

        {/* Name Correction */}
       
        {/* Correction Checkboxes */}
        <div className="form-correction-group">
          <label className="form-label">Please select/tick the items you want to correct or change in your PAN Card:</label>

          <div className="hero bg-gray">
            <div className="hero-body">
              <div className="form-group">
          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={nameCorrection}
              onChange={() => setNameCorrection(!nameCorrection)}
              id="pan-form-checkbox-correction-name"
            />
           
            <i className="form-icon"></i> Make Correction in TRUST's <span className="sub-i-b">Name</span>
          </label>
</div>
{nameCorrection && (
        <div className="form-group name-change-group">
        
          {/* Additional Fields */}
          <div className="form-group name-change-group full-name">
            <label className="form-label" htmlFor="pan-form-applicant-full-name">Updated TRUST Full Name</label>
            <input
              className="form-input"
              type="text"
              id="pan-form-applicant-full-name"
              placeholder="Enter your Full Name here"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

      

          <div className="form-group form-group-select-poi-proof name-change-group">
            <label className="form-label" htmlFor="pan-form-select-poi-proof">TRUST Name Identity Proof</label>
            <select
              className="form-select"
              id="pan-form-select-poi-proof"
              value={supportingProof}
              onChange={(e) => setSupportingProof(e.target.value)}
            >
              <option value="">Select Name Identity Proof</option>
              <option value="trust-deed">Copy of Trust Deed</option>
              <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
            </select>
          </div>

          <div className="form-group form-group-select-supporting-poi-proof name-change-group">
            <label className="form-label" htmlFor="pan-form-select-supporting-poi-proof">Supporting Document for Name Change</label>
            <select
              className="form-select"
              id="pan-form-select-supporting-poi-proof"
              value={supportingProof}
              onChange={(e) => setSupportingProof(e.target.value)}
            >
              <option value="">Select Supporting Proof</option>
              <option value="marriage-certificate">Marriage Certificate</option>
              <option value="marriage-invitation-card">Marriage Invitation Card</option>
              <option value="passport-showing-husband-name">Passport showing Husband’s name</option>
              <option value="publication-name-change-gazette">Publication of Name Change in Official Gazette</option>
            </select>
          </div>
        </div>
      )}
      </div>
        </div>

        <div className="hero bg-gray make-correction-checkbox-hero">
      <div className="hero-body">
        <div className="form-group mb-0">
          <label className="form-checkbox form-inline">
            <input
              type="checkbox"
              id="pan-form-checkbox-correction-dob"
              checked={correctionDob}
              onChange={(e) => setCorrectionDob(e.target.checked)}
            />
            <i className="form-icon"></i>
            Make Correction in
            <span className="sub-i-b">Date Of Incorporation/Formation</span>
          </label>
        </div>

        {correctionDob && (
          <div className="form-group form-group-date-of-birth dob-change-group mt-2">
            <label className="form-label" htmlFor="pan-form-select-dob">
              Updated Date Of Registration/Incorporation/Deed
            </label>
            <div className="columns">
              <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                <p className="text-center mb-0" htmlFor="pan-form-select-dob-day">Day</p>
                <select
                  className="form-select"
                  id="pan-form-select-dob-day"
                  value={dobDay}
                  onChange={(e) => setDobDay(e.target.value)}
                >
                  <option value="">Day</option>
                  {/* Add options for days here */}
                </select>
              </div>
              <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                <p className="text-center mb-0" htmlFor="pan-form-select-dob-month">Month</p>
                <select
                  className="form-select"
                  id="pan-form-select-dob-month"
                  value={dobMonth}
                  onChange={(e) => setDobMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {/* Add options for months here */}
                </select>
              </div>
              <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                <p className="text-center mb-0" htmlFor="pan-form-select-dob-year">Year</p>
                <select
                  className="form-select"
                  id="pan-form-select-dob-year"
                  value={dobYear}
                  onChange={(e) => setDobYear(e.target.value)}
                >
                  <option value="">Year</option>
                  {/* Add options for years here */}
                </select>
              </div>
            </div>
          </div>
        )}

        {correctionDob && (
          <div className="form-group dob-change-grou podob-proof mt-2">
            <label className="form-label" htmlFor="pan-form-select-podob-proof">
              Date Of Incorporation/Formation Proof
            </label>
            <select
              className="form-select"
              id="pan-form-select-podob-proof"
              value={dobProof}
              onChange={(e) => setDobProof(e.target.value)}
            >
              <option value="">Select Date of Incorporation/Formation Proof</option>
              {/* Add options for proofs here */}
            </select>
          </div>
        )}
      </div>
      </div>
   

      <div className="pan-card-correction-form">
      {/* Address Correction Section */}
      <div className="hero bg-gray make-correction-checkbox-hero">
        <div className="hero-body">
          <div className="form-group mb-0">
            <label className="form-checkbox form-inline">
              <input
                type="checkbox"
                id="pan-form-checkbox-correction-address"
                checked={addressCorrection}
                onChange={(e) => setAddressCorrection(e.target.checked)}
              />
              <i className="form-icon"></i> Make Correction in
              <span className="sub-i-b">Address for Communication</span>
            </label>
          </div>
          {addressCorrection && (
            <div className="form-group address-change-group poa-proof mt-2">
              <label className="form-label" htmlFor="pan-form-select-poa-proof">
                Address Proof <sup>*</sup>
              </label>
              <select
                className="form-select"
                id="pan-form-select-poa-proof"
                value={addressProof}
                onChange={(e) => setAddressProof(e.target.value)}
              >
                <option value="">Select Address Proof</option>
                <option value="trust-deed">Copy of Trust Deed</option>
                <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
              </select>
              <div className="mt-2 address-proof-courier-note">
                <strong>* PAN Card will be sent in courier as per Address Proof.</strong>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Photo and Signature Correction Section */}
      <div className="hero bg-gray make-correction-checkbox-hero">
        <div className="hero-body">
          <div className="form-group mb-0">
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={photoCorrection}
                onChange={(e) => setPhotoCorrection(e.target.checked)}
              />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Photo</span>
            </label>
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={signatureCorrection}
                onChange={(e) => setSignatureCorrection(e.target.checked)}
              />
              <i className="form-icon"></i> Make Correction in <span className="sub-i-b">Signature</span>
            </label>
          </div>
        </div>
      </div>

      {/* Trust Details Section */}
      <div className="hero bg-gray general-info-hero-1">
        <div className="hero-body">
          <div className="form-group general-info-group full-name">
            <label className="form-label text-dark">TRUST DETAILS</label>
            <label className="form-label" htmlFor="pan-form-applicant-full-name">
              TRUST Full Name
            </label>
            <input
              className="form-input"
              type="text"
              id="pan-form-applicant-full-name"
              placeholder="Enter your Name here"
              value={trustDetails.fullName}
              onChange={(e) => setTrustDetails({ ...trustDetails, fullName: e.target.value })}
            />
           
          </div>

          {/* Date of Incorporation/Formation */}
          <div className="form-group form-group-date-of-birth general-info-group dob">
            <label className="form-label" htmlFor="pan-form-select-dob">
              Date Of Incorporation/Formation
            </label>
            <div className="columns">
              <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                <p className="text-center mb-0">Day</p>
                <select
                  className="form-select"
                  id="pan-form-select-dob-day"
                  value={dob.day}
                  onChange={(e) => setDob({ ...dob, day: e.target.value })}
                >
                  <option value="">Day</option>
                  {/* Add day options here */}
                </select>
              </div>
              <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                <p className="text-center mb-0">Month</p>
                <select
                  className="form-select"
                  id="pan-form-select-dob-month"
                  value={dob.month}
                  onChange={(e) => setDob({ ...dob, month: e.target.value })}
                >
                  <option value="">Month</option>
                  {/* Add month options here */}
                </select>
              </div>
              <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                <p className="text-center mb-0">Year</p>
                <select
                  className="form-select"
                  id="pan-form-select-dob-year"
                  value={dob.year}
                  onChange={(e) => setDob({ ...dob, year: e.target.value })}
                >
                  <option value="">Year</option>
                  {/* Add year options here */}
                </select>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* TRUST Name Identity Proof */}
      <div className="hero bg-gray general-info-hero-2">
        <div className="hero-body">
          <div className="form-group form-group-select-poi-proof general-info-group poi-proof">
            <label className="form-label" htmlFor="pan-form-select-poi-proof">
              TRUST Name Identity Proof
            </label>
            <select
              className="form-select"
              id="pan-form-select-poi-proof"
              value={poiProof}
              onChange={(e) => setPoiProof(e.target.value)}
            >
              <option value="">Select Name Identity Proof</option>
              <option value="trust-deed">Copy of Trust Deed</option>
              <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
            </select>
          </div>
          {poiProof === 'trust-deed' && (
            <div className="form-group general-info-group podob-proof">
              <label className="form-label" htmlFor="pan-form-select-podob-proof">
                Date Of Incorporation/Formation Proof
              </label>
              <select
                className="form-select"
                id="pan-form-select-podob-proof"
                value={dobProof}
                onChange={(e) => setDobProof(e.target.value)}
              >
                <option value="">Select Date of Incorporation/Formation Proof</option>
                {/* Add proof options here */}
              </select>
            </div>
          )}
          <div className="form-group general-info-group poa-proof">
            <label className="form-label" htmlFor="pan-form-select-poa-proof">
              TRUST Address Proof <sup>*</sup>
            </label>
            <select
              className="form-select"
              id="pan-form-select-poa-proof"
              value={addressProof}
              onChange={(e) => setAddressProof(e.target.value)}
            >
              <option value="">Select Address Proof</option>
              <option value="trust-deed">Copy of Trust Deed</option>
              <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
            </select>
            <div className="mt-2 address-proof-courier-note">
              <strong>* PAN Card will be sent in courier as per Address Proof.</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Authorized Signatory and Contact Details */}
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-label" htmlFor="pan-form-managing-person-full-name">
              Authorized Signatory Full Name
            </label>
            <div className="mt-0 mb-1 address-proof-courier-note">
              <strong>(Chairman / Secretary / Partner / Director / Karta)</strong>
            </div>
            <input
              className="form-input"
              type="text"
              id="pan-form-managing-person-full-name"
              placeholder="Enter Authorized Signatory Name here"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="pan-form-input-mobile-number">
              Mobile Number
            </label>
            <div className="input-group">
              <span className="input-group-addon">+91</span>
              <input
                className="form-input"
                type="tel"
                id="pan-form-input-mobile-number"
                placeholder="Enter your Mobile number here"
                maxLength="10"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="pan-form-input-email-id">
              Email ID
            </label>
            <input
              className="form-input"
              type="email"
              id="pan-form-input-email-id"
              placeholder="Enter your Email ID here"
            />
          </div>
        </div>
    
    </div>
    <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>

        </div>
        </div>
      </form>
    </div>
  );
};

export default PanCardCorrectionForm;
