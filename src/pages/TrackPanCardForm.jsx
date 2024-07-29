import React from 'react';
// import './TrackPanCardStatus.css'; // Import your custom CSS file if needed

const TrackPanCardStatus = () => {
    const faqs = [
        {
          question: "How to Track PAN Card Status OR PAN Application Status online?",
          answer: "You can track PAN Card Status online by entering Application No. or Acknowledgement Number or Coupon Number in Track Pan Card Form given on this page."
        },
        {
          question: "What information do I need to provide to track my PAN Card status online?",
          answer: "You will need to provide your Application number or Acknowledgment number or Coupon number to track your PAN card status online."
        },
        {
          question: "What information is displayed when I track my PAN card status online?",
          answer: "When you track your PAN card status online, you may see details such as application status, dispatch status, and any pending actions required from your end."
        },
        {
          question: "How long does it take for PAN card status to be updated online?",
          answer: "PAN card status is usually updated online after approx. 3 days of submission of the application."
        },
        {
          question: "What does it mean if my PAN card status shows 'under process'?",
          answer: "It means that your PAN card application is currently being processed by the PAN department."
        },
        {
          question: "How can I check if my PAN card has been dispatched online?",
          answer: "Status will show as 'dispatched' once PAN Card is on its way in India Post/Speed Post."
        },
        {
          question: "Can I track the delivery status of my PAN card online?",
          answer: "Yes, you can track the delivery status of your PAN card online once it has been dispatched in India Post/Speed Post."
        },
        {
          question: "How can I track my PAN card status if I've lost my application number?",
          answer: "You may need to contact our customer support to track your PAN card status."
        },
        {
          question: "How often should I check my PAN card status online?",
          answer: "You can check your PAN card status online periodically, especially if you're awaiting an update."
        },
        {
          question: "What should I do if my PAN card status shows 'returned undelivered'?",
          answer: "If your PAN card status shows 'returned undelivered' then it means applicant was not available for taking delivery OR applicant address is not traceable. In that case, you may need to update your address and request for re-dispatch."
        },
        {
          question: "What should I do if there's a discrepancy in my PAN card status online?",
          answer: "If you notice any discrepancy in your PAN card status online, you should contact our customer support for assistance."
        },
        {
          question: "Can I track the status of multiple PAN card applications?",
          answer: "Yes, you can track the status of multiple PAN card applications by entering their respective application numbers."
        },
        {
          question: "Is it possible to track the PAN card delivery status INDIA Post / Speed Post?",
          answer: "Yes, you can track your PAN Card Status in INDIA POST / Speed Post from our portal itself."
        },
      ];


  return (
    <>
       <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginTop: '20px' }}>
        <div className="pan-form-heading">
          <h1 style={{ textAlign: 'center' }}>Track PAN Card Status</h1>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div style={{ margin: '0 auto', maxWidth: '800px' }}>
          <form
            className="main-pan-form individual"
            method="GET"
            action="https://www.pancardapp.com/track-pan-card.php"
          >
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <div>
                <label
                  className="form-label"
                  htmlFor="pan-form-applicant-pan-number"
                  style={{ display: 'block', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}
                >
                  Enter Application Number <br /> OR Acknowledgement / Coupon Number
                </label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    className="form-input input-lg"
                    type="text"
                    placeholder="Application No."
                    name="appno"
                    required
                    id="inputApplicationTrackingNo"
                    style={{ flex: 1, padding: '10px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
                  />
                  <button
                    className="btn btn-primary input-group-btn btn-lg"
                    style={{ padding: '10px 20px', fontSize: '16px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  <div className="container">
  <h2 className="text-center">FAQs: PAN Card Status</h2>
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

export default TrackPanCardStatus;
