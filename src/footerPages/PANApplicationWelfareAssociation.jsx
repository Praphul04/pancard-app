
import React, { useState } from 'react';
// import './CoOperativeSocietyForm.css'; // Import the CSS file for styling

const PANApplicationWelfareAssociation = () => {
  // State management for form fields
  const [formState, setFormState] = useState({
    applicationCategory: 'aop',
    fullName: '',
    identityProof: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    addressProof: '',
    authorizedSignatory: '',
    mobileNumber: '',
    emailId: ''
  });

  // Handle changes in form fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };
  return (
<div className="body-content container grid-lg">
<div className="columns">
  <div className="column col-12">
    <h1 className="pan-form-heading">New PAN Application for
      <small className="label">Welfare Association</small>
    </h1>
  </div>
  <div className="column col-12">
    <form className="main-pan-form aop" id="new-pan-form" method="POST" action="./" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="applicationCategory">Application Category</label>
        <select
          className="form-select"
          id="applicationCategory"
          value={formState.applicationCategory}
          onChange={handleChange}
        >
          <option value="individual" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php">Individual</option>
          <option value="individual-minor" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual-minor.php">Individual Minor (below 18 age)</option>
          <option value="huf" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/hindu-undivided-family-HUF.php">Hindu Undivided Family (HUF)</option>
          <option value="partnership-firm" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/partnership-firm.php">Partnership Firm</option>
          <option value="llp" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/limited-liability-partnership-LLP.php">Limited Liability Partnership (LLP)</option>
          <option value="trust" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/trust.php">Trust</option>
          <option value="aop" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/aop.php">Association of Persons</option>
          <option value="aop" data-subcategory="association" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/association.php">Association</option>
          <option value="aop" data-subcategory="co-operative-society" selected data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/co-operative-society.php">Co-Operative Society</option>
          <option value="aop" data-subcategory="housing-society" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/housing-society.php">Housing Society</option>
          <option value="aop" data-subcategory="memorial-society" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/memorial-society.php">Memorial Society</option>
          <option value="aop" data-subcategory="welfare-society" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/welfare-society.php">Welfare Society</option>
          <option value="aop" data-subcategory="welfare-association" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/welfare-association.php">Welfare Association</option>
          <option value="aop" data-subcategory="owners-association" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/owners-association.php">Owners Association</option>
          <option value="aop" data-subcategory="apartment-association" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/apartment-association.php">Apartment Association</option>
          <option value="aop" data-subcategory="educational-society" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/educational-society.php">Educational Society</option>
          <option value="aop" data-subcategory="mandali" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/mandali.php">Mandali</option>
          <option value="aop" data-subcategory="seva-sanstha" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/seva-sanstha.php">Sanstha</option>
          <option value="aop" data-subcategory="samiti" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/samiti.php">Samiti</option>
          <option value="aop" data-subcategory="seva-sangam" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/seva-sangam.php">Sangam</option>
          <option value="aop" data-subcategory="school" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/school.php">School</option>
          <option value="aop" data-subcategory="shg" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/shg.php">SHG - Self Help Group</option>
          <option value="aop" data-subcategory="joint-venture" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/joint-venture.php">Joint Venture</option>
          <option value="aop" data-subcategory="ngo" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/aop/ngo.php">NGO</option>
        </select>
      </div>
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">Welfare Association Full Name</label>
            <input
              className="form-input"
              type="text"
              id="fullName"
              placeholder="Enter your Name here"
              value={formState.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-group-select-poi-proof">
            <label className="form-label" htmlFor="identityProof">Welfare Association Identity Proof</label>
            <select
              className="form-select"
              id="identityProof"
              value={formState.identityProof}
              onChange={handleChange}
            >
              <option value>Select Co-Operative Society Identity Proof</option>
              <option value="agreement">Copy of Agreement</option>
              <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
              <option value="registration-number-by-cooperative-society-registrar">Registration Certificate issued by Cooperative Society Registrar</option>
              <option value="registration-number-by-competent-authority">Registration Certificate issued by any other Competent Authority</option>
              <option value="any-document-by-central-state">Any other document originating from any Central or State Government Department establishing identity and address of such person</option>
            </select>
          </div>
        </div>
      </div>
      <div className="hero bg-gray">
        <div className="hero-body">
          <div className="form-group form-group-date-of-birth">
            <label className="form-label" htmlFor="dobDay">Date Of Agreement/Incorporation/Registration</label>
            <div className="columns">
              <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                <select
                  className="form-select"
                  id="dobDay"
                  value={formState.dobDay}
                  onChange={handleChange}
                >
                  <option value="">Day</option>
                  {/* Add day options */}
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                <select
                  className="form-select"
                  id="dobMonth"
                  value={formState.dobMonth}
                  onChange={handleChange}
                >
                  <option value="">Month</option>
                  {/* Add month options */}
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                    <option key={i + 1} value={i + 1}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                <select
                  className="form-select"
                  id="dobYear"
                  value={formState.dobYear}
                  onChange={handleChange}
                >
                  <option value="">Year</option>
                  {/* Add year options */}
                  {[...Array(50)].map((_, i) => (
                    <option key={i + 1970} value={i + 1970}>{i + 1970}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group form-group-address-proof">
            <label className="form-label" htmlFor="addressProof">Welfare Association Address Proof *</label>
            <select
              className="form-select"
              id="addressProof"
              value={formState.addressProof}
              onChange={handleChange}
            >
              <option value>Select Co-Operative Society Address Proof</option>
              <option value="document">Copy of Address Proof Document</option>
              <option value="electricity-bill">Electricity Bill</option>
              <option value="telephone-bill">Telephone Bill</option>
              <option value="bank-statement">Bank Statement</option>
              <option value="ration-card">Ration Card</option>
              <option value="other">Any other document establishing address</option>
            </select>
          </div>
          <div className="form-group form-group-authorized-signatory">
            <label className="form-label" htmlFor="authorizedSignatory">Authorized Signatory Full Name</label>
            <input
              className="form-input"
              type="text"
              id="authorizedSignatory"
              placeholder="Enter Authorized Signatory Name here"
              value={formState.authorizedSignatory}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-group-mobile-email">
            <div className="columns">
              <div className="column col-xs-12 col-md-6">
                <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                <input
                  className="form-input"
                  type="text"
                  id="mobileNumber"
                  placeholder="Enter Mobile Number"
                  value={formState.mobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="column col-xs-12 col-md-6">
                <label className="form-label" htmlFor="emailId">Email ID</label>
                <input
                  className="form-input"
                  type="email"
                  id="emailId"
                  placeholder="Enter Email ID"
                  value={formState.emailId}
                  onChange={handleChange}
                />
              </div>
            </div>
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

export default PANApplicationWelfareAssociation;
