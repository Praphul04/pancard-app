import React, { useState } from 'react';
// import './TrustPanCardApplication.css'; // Import your CSS file if needed

const NewSchoolPANCard = () => {
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
      question: "What is School PAN Card?",
      answer: (
        <p className="faq-answer-text">
          PAN stands for Permanent Account Number. It is a ten-digit unique alphanumeric number. The fourth
          character of PAN reflects the PAN holder's status. The letter 'A' or 'T' represents School (E.g.
          AGZTS2108L).
        </p>
      )
    },
    {
      question: "How to apply PAN Card for School?",
      answer: (
        <p className="faq-answer-text">
          You can apply for School PAN online by filling up the above SCHOOL PAN Card Application Form and
          completing all steps with required documents.
        </p>
      )
    },
    {
      question: "What Documents are required for School PAN Card Application?",
      answer: (
        <div>
          For School PAN Card Application following documents are required:
          <div className="text-bold">
            School Identity Proof: (Any one)
          </div>
          <ul>
            <li>Copy of Agreement</li>
            <li>Registration Certificate issued by any other Competent Authority</li>
            <li>Copy of School / Trust Deed</li>
            <li>Registration Certificate issued by Charity Commissioner</li>
            <li>Registration Certificate issued by Cooperative Society Registrar</li>
            <li>Any other document originating from any Central or State Government Department establishing identity and address of school</li>
          </ul>
          <div className="text-bold">
            School Address Proof: (Any one)
          </div>
          <ul>
            <li>Copy of Agreement</li>
            <li>Copy of School / Trust Deed</li>
            <li>Registration Certificate issued by Charity Commissioner</li>
            <li>Registration Certificate issued by any other Competent Authority</li>
            <li>Registration Certificate issued by Cooperative Society Registrar</li>
            <li>Any other document originating from any Central or State Government Department establishing identity and address of school</li>
          </ul>
        </div>
      )
    },
    {
      question: "Who has to sign the PAN application for School?",
      answer: (
        <p className="faq-answer-text">
          Any one School Trustee / Principal needs to sign the PAN Card Form. If he/she is unable to sign, then
          a left thumb impression is required on the form.
        </p>
      )
    },
    {
      question: "How School PAN Card will be delivered?",
      answer: (
        <p className="faq-answer-text">
          School PAN Card soft copy i.e. e-PAN copy will be delivered to the email id mentioned in the PAN Form while
          applying PAN Card for School.
          <br />
          School PAN Card hard copy i.e. Physical Card will be delivered to the School's Office Address mentioned in
          the PAN Form while applying PAN Card for School.
        </p>
      )
    },
    {
      question: "How can I track School PAN Card Status after application?",
      answer: (
        <p className="faq-answer-text">
          After applying for a PAN card for School, you can track the PAN card status on our portal at the below link:
          <br />
          <a href="https://www.pancardapp.com/track-pan-card.php"> Track PAN Card Status</a>
        </p>
      )
    }
  ];
  
  return (
    <>
    <div className="body-content container grid-lg">
      <div className="columns">
        <div className="column col-12">
          <h1 className="pan-form-heading">New SCHOOL PAN Card Application</h1>
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
                  <label className="form-label" htmlFor="pan-form-applicant-full-name">School Full Name</label>
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
                  <label className="form-label" htmlFor="pan-form-select-poi-proof">School Identity Proof</label>
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
                  <label className="form-label" htmlFor="pan-form-select-dob">Date Of School Deed/Registration</label>
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
                  <label className="form-label" htmlFor="addressProof">School Address Proof <sup>*</sup></label>
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
                  <label className="form-label" htmlFor="trusteeName">School Trustee / Principal Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="trusteeName"
                    placeholder="Enter School Trustee / Principal Full Name here"
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
<h2 className="text-center">FAQs: School PAN Card Application</h2>
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

export default NewSchoolPANCard;
