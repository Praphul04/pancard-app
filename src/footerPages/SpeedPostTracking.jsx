// src/components/SpeedPostTracking.js
import React from 'react';

const SpeedPostTracking = () => {
  // Define inline styles
  const containerStyle = {
    padding: '20px',
  };

  const columnsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const heroStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '600px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const inputGroupStyle = {
    display: 'flex',
    width: '100%',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const textBoldStyle = {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '14px',
    fontStyle: 'italic',
    marginTop: '10px',
  };

  const linkStyle = {
    backgroundColor: '#6c757d',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const linkHoverStyle = {
    backgroundColor: '#5a6268',
  };

  const faqs = [
    {
      question: "What is PAN Card Speed Post tracking?",
      answer: (
        <p className="faq-answer-text">
          PAN card speed post tracking is a service that allows applicants to monitor the delivery status of their Permanent Account Number (PAN) card through the India Post's speed post service. It enables you to check the current location and expected delivery date of your PAN card.
        </p>
      )
    },
    {
      question: "How can I track my PAN card through speed post?",
      answer: (
        <p className="faq-answer-text">
          To track your PAN card through speed post, you can enter Speed POST 13 characters Consignment or Tracking Number in the form and submit.
        </p>
      )
    },
    {
      question: "How long does it take to receive the PAN card through speed post?",
      answer: (
        <p className="faq-answer-text">
          The time it takes to receive your PAN card through speed post can vary depending on the processing time of the issuing authority and the location of delivery. Typically, it takes 2-3 weeks, but it may be longer during peak application periods.
        </p>
      )
    },
    {
      question: "What information can I track using the speed post tracking service?",
      answer: (
        <p className="faq-answer-text">
          You can track the current status of your PAN card delivery, including information about when it was dispatched, the location it is currently at, and the expected delivery date.
        </p>
      )
    },
    {
      question: "Is there a fee for using the PAN card speed post tracking service?",
      answer: (
        <p className="faq-answer-text">
          No, there is no additional fee for using the PAN card speed post tracking service. It is provided as part of the PAN card application process.
        </p>
      )
    }
  ];
  
  return (
    <>
    <div style={containerStyle}>
      <div style={columnsStyle}>
        <div>
          <h1 style={{ textAlign: 'center' }}>
            PAN Card Speed Post Tracking
          </h1>
        </div>
      </div>
      <div style={columnsStyle}>
        <div>
          <form
            style={formStyle}
            method="GET"
            action="https://www.pancardapp.com/track-pan-card-speed-post.php"
          >
            <div style={heroStyle}>
              <div>
                <label
                  style={labelStyle}
                  htmlFor="pan-card-speed-post-tracking-number"
                >
                  Enter Speed Post Tracking Number
                </label>
                <div style={inputGroupStyle}>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Tracking / Consignment No."
                    name="appno"
                    required
                    id="inputApplicationTrackingNo"
                  />
                  <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Submit
                  </button>
                </div>
                <div style={textBoldStyle}>
                  Eg: JN445241865IN
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <a
          href="https://www.pancardapp.com/check-pan-aadhaar-link-status.php"
          style={linkStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
        >
          CHECK PAN AADHAAR LINK STATUS
        </a>
      </div>
    </div>
    <div className="container">
    <h2 className="text-center">FAQs: Apply PAN Card for NGO</h2>
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

export default SpeedPostTracking;
