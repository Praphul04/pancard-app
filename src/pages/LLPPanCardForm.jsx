import React, { useState } from 'react';

const LLPPanCardForm = () => {
  const [applicationCategory, setApplicationCategory] = useState('llp');
  const [applicantName, setApplicantName] = useState('');
  const [identityProof, setIdentityProof] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [addressProof, setAddressProof] = useState('');
  const [managingPartnerName, setManagingPartnerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailId, setEmailId] = useState('');

  return (

    <div className="body-content container grid-lg">
      <div className="columns mt-50">
        <div className="column col-12">
          <h1 className="pan-form-heading">
            New PAN Application for
            <small className="label">Limited Liability Partnership (LLP)</small>
          </h1>
        </div>
        <div className="column col-12">
          <form className="main-pan-form llp" id="new-pan-form" method="POST" action="./">
            <div className="form-group hide">
              <label className="form-label" htmlFor="pan-form-application-category">Application Category</label>
              <select
                className="form-select"
                id="pan-form-application-category"
                value={applicationCategory}
                onChange={(e) => setApplicationCategory(e.target.value)}
              >
                <option value="individual" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php">Individual</option>
                <option value="individual-minor" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-minor.php">Individual Minor (below 18 age)</option>
                <option value="huf" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/hindu-undivided-family-HUF.php">Hindu Undivided Family (HUF)</option>
                <option value="partnership-firm" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/partnership-firm.php">Partnership Firm</option>
                <option value="llp" selected data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/limited-liability-partnership-LLP.php">Limited Liability Partnership (LLP)</option>
                <option value="trust" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/trust.php">Trust</option>
                <option value="aop" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/aop.php">Association of Persons</option>
                {/* Add remaining options here */}
              </select>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-applicant-full-name">LLP Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="pan-form-applicant-full-name"
                    placeholder="Enter your Name here"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                  />
                </div>
                <div className="form-group form-group-select-poi-proof">
                  <label className="form-label" htmlFor="pan-form-select-poi-proof">LLP Identity Proof</label>
                  <select
                    className="form-select"
                    id="pan-form-select-poi-proof"
                    value={identityProof}
                    onChange={(e) => setIdentityProof(e.target.value)}
                  >
                    <option value>Select LLP Identity Proof</option>
                    <option value="registration-certificate-by-llps-registrar">Registration Certificate issued by Registrar of LLP/Firms</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group form-group-date-of-birth">
                  <label className="form-label" htmlFor="pan-form-select-dob">Date Of LLP Incorporation/Registration</label>
                  <div className="columns">
                    <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                      <select
                        className="form-select"
                        id="pan-form-select-dob-day"
                        value={dobDay}
                        onChange={(e) => setDobDay(e.target.value)}
                      >
                        <option value>Day</option>
                        {/* Add day options here */}
                      </select>
                      <p className="form-input-hint">Day</p>
                    </div>
                    <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                      <select
                        className="form-select"
                        id="pan-form-select-dob-month"
                        value={dobMonth}
                        onChange={(e) => setDobMonth(e.target.value)}
                      >
                        <option value>Month</option>
                        {/* Add month options here */}
                      </select>
                      <p className="form-input-hint">Month</p>
                    </div>
                    <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                      <select
                        className="form-select"
                        id="pan-form-select-dob-year"
                        value={dobYear}
                        onChange={(e) => setDobYear(e.target.value)}
                      >
                        <option value>Year</option>
                        {/* Add year options here */}
                      </select>
                      <p className="form-input-hint">Year</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-select-poa-proof">LLP Address Proof <sup>*</sup></label>
                  <select
                    className="form-select"
                    id="pan-form-select-poa-proof"
                    value={addressProof}
                    onChange={(e) => setAddressProof(e.target.value)}
                  >
                    <option value>Select LLP Address Proof</option>
                    <option value="registration-certificate-by-llps-registrar">Registration Certificate issued by Registrar of LLP/Firms</option>
                  </select>
                  <div className="mt-2 address-proof-courier-note">
                    <strong>* PAN Card will be sent in courier as per Address Proof.</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-managing-person-full-name">Managing Partner Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="pan-form-managing-person-full-name"
                    placeholder="Enter Partner Name here"
                    value={managingPartnerName}
                    onChange={(e) => setManagingPartnerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-input-mobile-number">Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-addon">+91</span>
                    <input
                      className="form-input"
                      type="tel"
                      id="pan-form-input-mobile-number"
                      placeholder="Enter your Mobile number here"
                      maxlength="10"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-input-email-id">Email ID</label>
                  <input
                    className="form-input"
                    type="email"
                    id="pan-form-input-email-id"
                    placeholder="Enter your Email ID here"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="btn-submit-main-pan-form-div">
              <button  className="btn btn-primary"
      
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer' }} type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   


  );
};

export default LLPPanCardForm;
