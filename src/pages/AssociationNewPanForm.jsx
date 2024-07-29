import React, { useState } from 'react';
import './AssociationNewPanForm.css'; // Assuming your CSS file is named NewPanApplicationForm.css

const AssociationNewPanForm = () => {
    const [formData, setFormData] = useState({
        category: 'aop',
        fullName: '',
        identityProof: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        addressProof: '',
        signatoryName: '',
        mobileNumber: '',
        emailId: ''
      });
    
      // Handle form data changes
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [id]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
      };
  return (
    <div className="body-content container grid-lg">
    <div className="columns">
      <div className="column col-12">
        <h1 className="pan-form-heading">
          New PAN Application for
          <small className="label">Association</small>
        </h1>
      </div>
      <div className="column col-12">
        <form className="main-pan-form aop" id="new-pan-form" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="category">Application Category</label>
            <select className="form-select" id="category" value={formData.category} onChange={handleChange}>
              <option value="aop">Association</option>
              {/* Add other options if needed */}
            </select>
          </div>
          
          <div className="hero bg-gray">
            <div className="hero-body">
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Association Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  placeholder="Enter your Name here"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="identityProof">Association Identity Proof</label>
                <select className="form-select" id="identityProof" value={formData.identityProof} onChange={handleChange}>
                  <option value="">Select Association Identity Proof</option>
                  <option value="agreement">Copy of Agreement</option>
                  <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
                  <option value="registration-number-by-cooperative-society-registrar">Registration Certificate issued by Cooperative Society Registrar</option>
                  <option value="registration-number-by-competent-authority">Registration Certificate issued by any other Competent Authority</option>
                  <option value="any-document-by-central-state">Any other document originating from any Central or State Government Department establishing identity and address of such person</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="dobDay">Date Of Agreement/Incorporation/Registration</label>
                <div className="columns">
                  <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                    <select className="form-select" id="dobDay" value={formData.dobDay} onChange={handleChange}>
                      <option value="">Day</option>
                      {/* Add day options here */}
                    </select>
                    <p className="form-input-hint">Day</p>
                  </div>
                  <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                    <select className="form-select" id="dobMonth" value={formData.dobMonth} onChange={handleChange}>
                      <option value="">Month</option>
                      {/* Add month options here */}
                    </select>
                    <p className="form-input-hint">Month</p>
                  </div>
                  <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                    <select className="form-select" id="dobYear" value={formData.dobYear} onChange={handleChange}>
                      <option value="">Year</option>
                      {/* Add year options here */}
                    </select>
                    <p className="form-input-hint">Year</p>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="addressProof">Association Address Proof <sup>*</sup></label>
                <select className="form-select" id="addressProof" value={formData.addressProof} onChange={handleChange}>
                  <option value="">Select Association Address Proof</option>
                  <option value="agreement">Copy of Agreement</option>
                  <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
                  <option value="registration-number-by-cooperative-society-registrar">Registration Certificate issued by Cooperative Society Registrar</option>
                  <option value="registration-number-by-competent-authority">Registration Certificate issued by any other Competent Authority</option>
                  <option value="any-document-by-central-state">Any other document originating from any Central or State Government Department establishing identity and address of such person</option>
                </select>
                <div className="mt-2 address-proof-courier-note">
                  <strong>* PAN Card will be sent in courier as per Address Proof.</strong>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="signatoryName">Authorized Signatory Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="signatoryName"
                  value={formData.signatoryName}
                  placeholder="Enter Authorized Signatory Name here"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                <div className="input-group">
                  <span className="input-group-addon">+91</span>
                  <input
                    className="form-input"
                    type="tel"
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    placeholder="Enter your Mobile number here"
                    maxlength="10"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="emailId">Email ID</label>
                <input
                  className="form-input"
                  type="email"
                  id="emailId"
                  value={formData.emailId}
                  placeholder="Enter your Email ID here"
                  onChange={handleChange}
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

export default AssociationNewPanForm;
