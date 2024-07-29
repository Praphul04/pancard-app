import React, { useState } from 'react';
// import './TrustPanCardApplication.css'; // Import your CSS file if needed

const TrustPanCardApplication = () => {
  const [formData, setFormData] = useState({
    trustName: '',
    trustIdentityProof: '',
    deedDay: '',
    deedMonth: '',
    deedYear: '',
    addressProof: '',
    trusteeName: '',
    mobileNumber: '',
    emailId: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const faqs = [
    {
      question: "What is Trust PAN Card?",
      answer: (
        <div>
          PAN stands for Permanent Account Number. It is a ten-digit unique alphanumeric number. The fourth
          character of PAN reflects the PAN holder's status. The letter 'T' represents Trust (e.g., AYZTG2108L).
        </div>
      )
    },
    {
      question: "How to apply for Trust PAN Card?",
      answer: (
        <div>
          You can apply for Trust PAN online by filling up the TRUST PAN Card Application Form and completing all
          steps with the required documents.
        </div>
      )
    },
    {
      question: "What Documents are required for Trust PAN Card Application?",
      answer: (
        <div>
          For Trust PAN Card Application, the following documents are required:
          <div className="text-bold">
            Trust Identity Proof (Any one):
          </div>
          <ul>
            <li>Copy of Trust Deed</li>
            <li>Registration Certificate issued by Charity Commissioner</li>
          </ul>
          <div className="text-bold">
            Trust Address Proof (Any one):
          </div>
          <ul>
            <li>Copy of Trust Deed</li>
            <li>Registration Certificate issued by Charity Commissioner</li>
          </ul>
        </div>
      )
    },
    {
      question: "Who has to sign the PAN application for Trust?",
      answer: "Any one Trustee needs to sign the PAN Card Form. If he/she is unable to sign, then a left thumb impression is required on the form."
    },
    {
      question: "How will the Trust PAN Card be delivered?",
      answer: (
        <div>
          The Trust PAN Card soft copy (e-PAN copy) will be delivered to the email ID mentioned in the PAN Form while
          applying for the PAN Card for Trust.
          <br />
          The Trust PAN Card hard copy (Physical Card) will be delivered to the Trust's Office Address mentioned in
          the PAN Form while applying for the PAN Card for Trust.
        </div>
      )
    },
    {
      question: "How can I track Trust PAN Card Status after application?",
      answer: (
        <div>
          After applying for a Trust PAN card, you can track the PAN card status on our portal at the following link:
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
          <h1 className="pan-form-heading">New <span className="text-primary">TRUST</span> PAN Card Application</h1>
        </div>
        <div className="column col-12">
          <form className="main-pan-form trust" id="new-pan-form" method="POST" action="./" onSubmit={handleSubmit}>
            <div className="form-group hide">
              <label className="form-label" htmlFor="pan-form-application-category">Application Category</label>
              <select
                className="form-select"
                id="pan-form-application-category"
                defaultValue="trust"
                onChange={handleChange}
              >
                <option value="individual" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php">Individual</option>
                {/* Add other options as needed */}
                <option value="trust" data-url="https://www.pancardapp.com/apply-online-new-pan-card-application-form/trust.php">Trust</option>
              </select>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="pan-form-applicant-full-name">Trust Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="trustName"
                    placeholder="Enter your Name here"
                    value={formData.trustName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group form-group-select-poi-proof">
                  <label className="form-label" htmlFor="pan-form-select-poi-proof">Trust Identity Proof</label>
                  <select
                    className="form-select"
                    id="trustIdentityProof"
                    value={formData.trustIdentityProof}
                    onChange={handleChange}
                  >
                    <option value="">Select Trust Identity Proof</option>
                    <option value="trust-deed">Copy of Trust Deed</option>
                    <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="hero bg-gray">
              <div className="hero-body">
                <div className="form-group form-group-date-of-birth">
                  <label className="form-label" htmlFor="pan-form-select-dob">Date Of Trust Deed/Registration</label>
                  <div className="columns">
                    <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                      <select
                        className="form-select"
                        id="deedDay"
                        value={formData.deedDay}
                        onChange={handleChange}
                      >
                        <option value="">Day</option>
                        {/* Add day options here */}
                      </select>
                      <p className="form-input-hint">Day</p>
                    </div>
                    <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                      <select
                        className="form-select"
                        id="deedMonth"
                        value={formData.deedMonth}
                        onChange={handleChange}
                      >
                        <option value="">Month</option>
                        {/* Add month options here */}
                      </select>
                      <p className="form-input-hint">Month</p>
                    </div>
                    <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                      <select
                        className="form-select"
                        id="deedYear"
                        value={formData.deedYear}
                        onChange={handleChange}
                      >
                        <option value="">Year</option>
                        {/* Add year options here */}
                      </select>
                      <p className="form-input-hint">Year</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="addressProof">Trust Address Proof<sup>*</sup></label>
                  <select
                    className="form-select"
                    id="addressProof"
                    value={formData.addressProof}
                    onChange={handleChange}
                  >
                    <option value="">Select Trust Address Proof</option>
                    <option value="trust-deed">Copy of Trust Deed</option>
                    <option value="registration-number-by-charity-commissioner">Registration Certificate issued by Charity Commissioner</option>
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
                  <label className="form-label" htmlFor="trusteeName">Trustee Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="trusteeName"
                    placeholder="Enter Trustee Name here"
                    value={formData.trusteeName}
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
                      placeholder="Enter your Mobile number here"
                      maxLength="10"
                      value={formData.mobileNumber}
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
                    placeholder="Enter your Email ID here"
                    value={formData.emailId}
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

<div className="container">
<h2 className="text-center">FAQs: Trust PAN Card Application</h2>
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

export default TrustPanCardApplication;
