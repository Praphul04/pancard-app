import React, { useState } from 'react';

const HUFForm = () => {
  // State for form inputs
  const [appCategory, setAppCategory] = useState('huf'); // Default value set to 'huf'
  const [kartaName, setKartaName] = useState('');
  const [kartaProof, setKartaProof] = useState('');
  const [communicationAddress, setCommunicationAddress] = useState('');
  const [contactMobileNumber, setContactMobileNumber] = useState('');
  const [contactEmailId, setContactEmailId] = useState('');
  const [hufName, setHufName] = useState('');
  const [hufProof, setHufProof] = useState('');
  const [hufDate, setHufDate] = useState({ day: '', month: '', year: '' });

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const faqs = [
    {
      question: "What is HUF PAN Card?",
      answer: (
        <>
          PAN stands for Permanent Account Number. It is a ten-digit unique alphanumeric number. The fourth character of PAN reflects the PAN holder's status. The letter 'H' represents HUF (E.g. AYZHG2108L).
        </>
      )
    },
    {
      question: "How to apply for HUF PAN card?",
      answer: (
        <>
          You can apply for HUF PAN Card online by filling up the above HUF PAN Card Application Form and complete all steps with required documents.
        </>
      )
    },
    {
      question: "What Documents are required for HUF PAN Card Application?",
      answer: (
        <>
          <p>For HUF PAN Card following documents are required:</p>
          <div className="text-bold">HUF Identity Proof (Any One):</div>
          <ol>
            <li>HUF Deed</li>
            <li>HUF Affidavit</li>
            <li>HUF Gift Deed</li>
          </ol>
          <div className="text-bold">HUF Karta's Identity Proof (Any one):</div>
          <ol>
            <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
            <li>Ration card having photograph of the applicant.</li>
            <li>Pensioner card having photograph of the applicant.</li>
            <li>HUF Deed / Gift Deed / Affidavit.</li>
            <li>Certificate of identity in Original signed by a Member of Parliament.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Central Government Health Scheme Card.</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
            <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
            <li>Bank certificate in Original on letterhead from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant.</li>
            <li>Aadhaar Card.</li>
            <li>Driving License.</li>
            <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
            <li>Passport.</li>
            <li>Election Card / Voter ID.</li>
            <li>Arm’s license.</li>
          </ol>
          <div className="text-bold">HUF Karta's Address Proof (Any one):</div>
          <ol>
            <li>Election Card / Voter ID.</li>
            <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
            <li>Domicile certificate issued by the Government.</li>
            <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Electricity Bill less than 3 months old.</li>
            <li>Property Registration Document.</li>
            <li>Passport.</li>
            <li>Depository account statement less than 3 months old.</li>
            <li>Driving License.</li>
            <li>Post office passbook having address of the applicant.</li>
            <li>Landline/Broadband connection bill less than 3 months old.</li>
            <li>Certificate of identity in Original signed by a Member of Parliament.</li>
            <li>HUF Deed / Gift Deed / Affidavit.</li>
            <li>Water Bill less than 3 months old.</li>
            <li>Credit card statement less than 3 months old.</li>
            <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
            <li>Aadhaar Card.</li>
            <li>Bank account statement less than 3 months old.</li>
            <li>Employer certificate in original.</li>
            <li>Passport of Spouse (Husband/Wife).</li>
            <li>Consumer gas connection card or book or piped gas bill.</li>
            <li>Latest property tax assessment order.</li>
          </ol>
        </>
      )
    },
    {
      question: "Who has to sign the PAN application for HUF?",
      answer: (
        <>
          HUF's Karta needs to sign the PAN Card Form. If he/she is unable to do so, then a left thumb impression is required on the form.
        </>
      )
    },
    {
      question: "How HUF PAN Card will be delivered?",
      answer: (
        <>
          HUF PAN Card will be delivered to HUF Karta's Address by Courier mentioned in the PAN Form. Address proof having the same address needs to be submitted along with the application.
        </>
      )
    },
    {
      question: "How can I track HUF PAN Card Status after application?",
      answer: (
        <>
          After applying for an HUF PAN Card, you can track the PAN card status on our portal at the following link: <br />
          <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a>
        </>
      )
    }
  ];
  

  return (
<>

    <div
    className="body-content container grid-lg"


  >
      <div className="column col-12">
        <h1
          className="pan-form-heading"
        >
          New HUF PAN Card Application
        </h1>
      </div>
    <div className="columns mt-15" style={{ marginTop: '15px' }}>
    
      <div className="column col-12">
        <form
          className="main-pan-form huf"
          id="new-pan-form"
          method="POST"
          action="./"
          onSubmit={handleSubmit}
          style={{ maxWidth: '1240px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="form-group">
            <label
              className="form-label"
              htmlFor="pan-form-application-category"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
            >
              Application Category
            </label>
            <select
              className="form-select"
              id="pan-form-application-category"
              value={appCategory}
              onChange={(e) => setAppCategory(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
            >
              <option value="individual">Individual</option>
              <option value="individual-minor">Individual Minor (below 18 age)</option>
              <option value="huf" selected>Hindu Undivided Family (HUF)</option>
              <option value="company">Company</option>
              <option value="firm">Firm</option>
              <option value="association">Association of Persons</option>
              <option value="body-of-individuals">Body of Individuals</option>
            </select>
          </div>
          <div className="hero bg-gray" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '4px' }}>
            <div className="hero-body">
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="pan-form-applicant-full-name"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  HUF Full Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pan-form-applicant-full-name"
                  placeholder="Enter HUF Name here"
                  value={hufName}
                  onChange={(e) => setHufName(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                />
              </div>
              <div className="form-group form-group-select-poi-proof">
                <label
                  className="form-label"
                  htmlFor="pan-form-select-poi-proof"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  HUF Identity Proof
                </label>
                <select
                  className="form-select"
                  id="pan-form-select-poi-proof"
                  value={hufProof}
                  onChange={(e) => setHufProof(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                >
                  <option value="">Select HUF Identity Proof</option>
                  <option value="huf-deed">HUF Deed / Gift Deed / Affidavit</option>
                  <option value="aadhaar-card">Aadhaar Card</option>
                  <option value="passport">Passport</option>
                  <option value="voter-id">Voter ID</option>
                </select>
              </div>
              <div className="form-group form-group-date-of-birth">
                <label
                  className="form-label"
                  htmlFor="pan-form-select-dob"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  Date Of HUF Deed/Formation
                </label>
                <div className="columns" style={{ display: 'flex', gap: '10px' }}>
                  <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                    <select
                      className="form-select"
                      id="pan-form-select-dob-day"
                      value={hufDate.day}
                      onChange={(e) => setHufDate({ ...hufDate, day: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                    >
                      <option value="">Day</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <p className="form-input-hint" style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Day</p>
                  </div>
                  <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                    <select
                      className="form-select"
                      id="pan-form-select-dob-month"
                      value={hufDate.month}
                      onChange={(e) => setHufDate({ ...hufDate, month: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                    >
                      <option value="">Month</option>
                      {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, i) => (
                        <option key={i + 1} value={i + 1}>{month}</option>
                      ))}
                    </select>
                    <p className="form-input-hint" style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Month</p>
                  </div>
                  <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                    <select
                      className="form-select"
                      id="pan-form-select-dob-year"
                      value={hufDate.year}
                      onChange={(e) => setHufDate({ ...hufDate, year: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 100 }, (_, i) => 2024 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <p className="form-input-hint" style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero bg-gray" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '4px' }}>
            <div className="hero-body">
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="pan-form-managing-person-full-name"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  HUF Karta Full Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pan-form-managing-person-full-name"
                  placeholder="Enter HUF Karta Name here"
                  value={kartaName}
                  onChange={(e) => setKartaName(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                />
              </div>
              <div className="form-group form-group-select-poi-proof">
                <label
                  className="form-label"
                  htmlFor="pan-form-select-poi-proof-managing-person"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  HUF Karta Identity Proof
                </label>
                <select
                  className="form-select"
                  id="pan-form-select-poi-proof-managing-person"
                  value={kartaProof}
                  onChange={(e) => setKartaProof(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                >
                  <option value="">Select HUF Karta Identity Proof</option>
                  <option value="aadhaar-card">Aadhaar Card</option>
                  <option value="passport">Passport</option>
                  <option value="voter-id">Voter ID</option>
                  <option value="driving-license">Driving License</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="pan-form-communication-address"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  Address for Communication
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pan-form-communication-address"
                  placeholder="Enter Address here"
                  value={communicationAddress}
                  onChange={(e) => setCommunicationAddress(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                />
              </div>
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="pan-form-contact-mobile-number"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  Contact Mobile Number
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pan-form-contact-mobile-number"
                  placeholder="Enter Mobile Number here"
                  value={contactMobileNumber}
                  onChange={(e) => setContactMobileNumber(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                />
              </div>
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="pan-form-contact-email-id"
                  style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
                >
                  Contact Email ID
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="pan-form-contact-email-id"
                  placeholder="Enter Email ID here"
                  value={contactEmailId}
                  onChange={(e) => setContactEmailId(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

<div className="container">
<h2 className="text-center">FAQs: Apply PAN Card for HUF</h2>
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

export default HUFForm;
