import React, { useState } from 'react';
// import './YourStyles.css'; // Make sure to import your CSS file

const PartnershipFirmForm = () => {
  const [fullName, setFullName] = useState('');
  const [identityProof, setIdentityProof] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [addressProof, setAddressProof] = useState('');
  const [managingPartnerName, setManagingPartnerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log({
      fullName,
      identityProof,
      dob: `${dobDay}-${dobMonth}-${dobYear}`,
      addressProof,
      managingPartnerName,
      mobileNumber,
      email
    });
  };
  const faqs = [
    {
      question: "How to apply PAN card for Partnership Firm?",
      answer: "You can apply PAN Card for Partnership Firm online by filling up the above Partnership Firm PAN Card Application Form and completing all steps with the required documents."
    },
    {
      question: "What Documents are required for Partnership Firm PAN Card Application?",
      answer: (
        <div>
          For Partnership Firm PAN Card, the following documents are required:
          <div className="text-bold">
            Partnership Firm Identity Proof (Any one):
          </div>
          <ol>
            <li>Copy of Partnership Deed.</li>
            <li>Registration Certificate issued by Registrar of Firms.</li>
          </ol>
          <div className="text-bold">
            Partnership Firm Address Proof (Any one):
          </div>
          <ol>
            <li>Copy of Partnership Deed.</li>
            <li>Registration Certificate issued by Registrar of Firms.</li>
          </ol>
        </div>
      )
    },
    {
      question: "Who has to sign the PAN application for Partnership Firm?",
      answer: "Any one Partner of Firm can sign the PAN Card Form."
    },
    {
      question: "How Partnership Firm PAN Card will be delivered?",
      answer: "Partnership Firm PAN Card will be delivered to the Partnership Firm's Address by Courier mentioned in PAN Form while applying PAN Card for Partnership Firm online. Address proof having the same address needs to be submitted along with the application."
    },
    {
      question: "How can I track Partnership Firm PAN Card Status after application?",
      answer: (
        <div>
          After applying PAN Card for Partnership Firm, you can track PAN Card status on our portal at the below link:
          <br />
          <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a>
        </div>
      )
    }
  ];
  
  return (
    <>
    <div className="body-content container grid-lg">
      <div className="columns">
        <div className="column col-12">
          <h1 className="pan-form-heading">
            Apply PAN Card for
            <div className="label">Partnership Firm</div>
          </h1>
        </div>
        <div className="column col-12">
          <form
            className="main-pan-form partnership-firm"
            id="new-pan-form"
            method="POST"
            action="./"
            onSubmit={handleSubmit}
          >
            <div className="form-group hide">
              <label className="form-label" htmlFor="pan-form-application-category">Application Category</label>
              <select
                className="form-select"
                id="pan-form-application-category"
                defaultValue="partnership-firm"
              >
                <option value="individual">Individual</option>
                <option value="individual-minor">Individual Minor (below 18 age)</option>
                <option value="huf">Hindu Undivided Family (HUF)</option>
                <option value="partnership-firm" selected>Partnership Firm</option>
                <option value="llp">Limited Liability Partnership (LLP)</option>
                <option value="trust">Trust</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-applicant-full-name">Partnership Firm Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="pan-form-applicant-full-name"
                    placeholder="Enter your Name here"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group form-group-select-poi-proof">
                  <label className="form-label" htmlFor="pan-form-select-poi-proof">Partnership Firm Identity Proof</label>
                  <select
                    className="form-select"
                    id="pan-form-select-poi-proof"
                    value={identityProof}
                    onChange={(e) => setIdentityProof(e.target.value)}
                  >
                    <option value>Select Partnership Firm Identity Proof</option>
                    <option value="partnership-deed">Copy of Partnership Deed</option>
                    <option value="registration-certificate-by-firms-registrar">Registration Certificate issued by Registrar of Firms</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group form-group-date-of-birth">
                  <label className="form-label" htmlFor="pan-form-select-dob">Date Of Partnership Deed/Registration</label>
                  <div className="columns">
                    <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                      <select
                        className="form-select"
                        id="pan-form-select-dob-day"
                        value={dobDay}
                        onChange={(e) => setDobDay(e.target.value)}
                      >
                        <option value>Day</option>
                        {/* Populate with day options */}
                      </select>
                      <p className="form-input-hint">Day</p>
                    </div>
                    <div className="column col-xs-5 col-md-3 col-lg-2 col-2 ">
                      <select
                        className="form-select"
                        id="pan-form-select-dob-month"
                        value={dobMonth}
                        onChange={(e) => setDobMonth(e.target.value)}
                      >
                        <option value>Month</option>
                        {/* Populate with month options */}
                      </select>
                      <p className="form-input-hint">Month</p>
                    </div>
                    <div className="column col-xs-4 col-md-3 col-lg-2 col-2 ">
                      <select
                        className="form-select"
                        id="pan-form-select-dob-year"
                        value={dobYear}
                        onChange={(e) => setDobYear(e.target.value)}
                      >
                        <option value>Year</option>
                        {/* Populate with year options */}
                      </select>
                      <p className="form-input-hint">Year</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-select-poa-proof">Partnership Firm Address Proof <sup>*</sup></label>
                  <select
                    className="form-select"
                    id="pan-form-select-poa-proof"
                    value={addressProof}
                    onChange={(e) => setAddressProof(e.target.value)}
                  >
                    <option value>Select Partnership Firm Address Proof</option>
                    <option value="partnership-deed">Copy of Partnership Deed</option>
                    <option value="registration-certificate-by-firms-registrar">Registration Certificate issued by Registrar of Firms</option>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

<div className="container">
<h2 className="text-center">FAQs: Apply PAN Card for Partnership Firm</h2>
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

export default PartnershipFirmForm;
