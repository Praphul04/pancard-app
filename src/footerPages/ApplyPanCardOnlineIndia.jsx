import React from 'react';

const ApplyPanCard = () => {
  // Inline styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'inline-block',       // Makes the link an inline-block element
  padding: '10px 15px',           // Adds padding inside the link
  marginBottom: '10px',           // Adds space below the link
  backgroundColor: '#6c757d',     // Background color for the link
  color: '#fff',                  // Text color
  textDecoration: 'none',         // Removes underline from the link
  borderRadius: '4px',            // Rounds the corners of the link
  fontSize: '14px',               // Font size
  fontWeight: 'bold',             // Makes the font bold
  transition: 'background-color 0.3s',  // Smooth transition for background color on hover
  height: '40px',                 // Fixed height for all buttons
  width: '180px',                 // Fixed width for all buttons
  lineHeight: '40px',             // Centers text vertically
  textAlign: 'center',            // Centers text horizontally
  display: 'flex',                // Flexbox to center content
  alignItems: 'center',           // Aligns text vertically
  justifyContent: 'center',       // Centers text horizontally
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const faqItemWrapStyle = {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const faqQuestionHeadingStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '15px',
  };

  const faqAnswerTextStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };


  const hoverStyle = {
    backgroundColor: '#5a6268',     // Darker background on hover
  };
  
  const linkStyleDefault = {
    backgroundColor: '#6c757d',     // Default background color
  };
  
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
  };
  
  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = linkStyleDefault.backgroundColor;
  };



  const textBoldStyle = {
    fontWeight: '700',
    marginTop: '15px',
    display: 'block',
  };

  const listStyle = {
    marginLeft: '20px',
  };

  return (
    <>
    <div style={containerStyle}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={headerStyle}>
          <a
            href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php"
            data-urlparams="?location=INDIA"

            onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Apply PAN Card Online INDIA
          </a>
        </h1>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div style={faqItemWrapStyle}>
          <h4 style={faqQuestionHeadingStyle}>
            How to Apply for PAN Card Online in INDIA?
          </h4>
          <p style={faqAnswerTextStyle}>
            Applying online for PAN Card from INDIA has now become quick and easy. Just click on the
            below Apply button to fill up a simple online PAN Card Form and then complete all necessary steps.
            <br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a
                href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php"
                data-urlparams="?location=INDIA"
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                Apply for PAN Card
              </a>
            </div>
          </p>
        </div>
        <div style={faqItemWrapStyle}>
        <h4 style={faqQuestionHeadingStyle}>
          What Documents are required to Apply for PAN Card online in INDIA?
        </h4>
        <p style={faqAnswerTextStyle}>
          For Online PAN Card Application in INDIA, the following documents are required:
          <div style={textBoldStyle}>
            Identity Proof (Any one of the following):
          </div>
          <ol style={listStyle}>
            <li>Arm’s license.</li>
            <li>Central Government Health Scheme Card.</li>
            <li>Driving License.</li>
            <li>Bank certificate in Original on letterhead from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant.</li>
            <li>Election Card / Voter ID.</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
            <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Passport.</li>
            <li>Ration card having photograph of the applicant.</li>
            <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
            <li>Certificate of identity in Original signed by a Member of Parliament.</li>
            <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
            <li>Pensioner card having photograph of the applicant.</li>
            <li>Aadhaar Card.</li>
          </ol>
          <div style={textBoldStyle}>
            Date Of Birth Proof (Any one of the following):
          </div>
          <ol style={listStyle}>
            <li>Matriculation certificate or Mark sheet of recognized board.</li>
            <li>Central Government Health Scheme Card.</li>
            <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
            <li>Pension payment order.</li>
            <li>Domicile certificate issued by the Government.</li>
            <li>Driving License.</li>
            <li>Marriage Certificate.</li>
            <li>Election Card / Voter ID.</li>
            <li>Passport.</li>
            <li>Birth certificate issued by the Municipal Authority or any office authorized to issue birth certificates.</li>
            <li>Affidavit sworn before a magistrate stating the date of birth.</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
            <li>Aadhaar Card.</li>
          </ol>
          <div style={textBoldStyle}>
            Address Proof (Any one of the following):
          </div>
          <ol style={listStyle}>
            <li>Aadhaar Card.</li>
            <li>Water Bill less than 3 months old.</li>
            <li>Certificate of identity in Original signed by a Gazetted officer.</li>
            <li>Consumer gas connection card or book or piped gas bill.</li>
            <li>Depository account statement less than 3 months old.</li>
            <li>Domicile certificate issued by the Government.</li>
            <li>Certificate of identity in Original signed by a Member of Parliament.</li>
            <li>Passport.</li>
            <li>Latest property tax assessment order.</li>
            <li>Bank account statement less than 3 months old.</li>
            <li>Passport of Spouse (Husband/Wife).</li>
            <li>Driving License.</li>
            <li>Post office passbook having address of the applicant.</li>
            <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
            <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
            <li>Landline/Broadband connection bill less than 3 months old.</li>
            <li>Election Card / Voter ID.</li>
            <li>Property Registration Document.</li>
            <li>Credit card statement less than 3 months old.</li>
            <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
            <li>Employer certificate in original.</li>
            <li>Electricity Bill less than 3 months old.</li>
          </ol>
        </p>
      </div>
      <div style={faqItemWrapStyle}>
        <h4 style={faqQuestionHeadingStyle}>
          How PAN Card will be delivered to my Address in INDIA?
        </h4>
        <p style={faqAnswerTextStyle}>
          PAN Card will be delivered to PAN Holder's Address in INDIA by Courier or Speed Post. Address proof mentioning complete address in INDIA needs to be submitted along with the application for easy and quick hand-to-hand delivery.
        </p>
      </div>
      <div style={faqItemWrapStyle}>
        <h4 style={faqQuestionHeadingStyle}>
          Do I or PAN Applicant needs to be present at INDIA's Address while taking delivery of PAN Card?
        </h4>
        <p style={faqAnswerTextStyle}>
          It is recommended that the PAN Applicant remains present at INDIA's Address while taking PAN Card delivery, as the courier delivery person or Post Man generally asks for PAN Applicant's ID proof while delivering PAN Card. However, if you are not present at your INDIA's address, you can ask your relative to take delivery of PAN Card by showing their ID proof.
        </p>
      </div>
      <div style={faqItemWrapStyle}>
        <h4 style={faqQuestionHeadingStyle}>
          Can a Student with no source of income Apply for PAN card online in INDIA?
        </h4>
        <p style={faqAnswerTextStyle}>
          Yes, definitely. A Student with no source of income can apply for a PAN card online in INDIA.
        </p>
      </div>
      <div style={faqItemWrapStyle}>
        <h4 style={faqQuestionHeadingStyle}>
          Does PAN holder's location in INDIA affect PAN Card Application?
        </h4>
        <p style={faqAnswerTextStyle}>
          Yes. Every PAN card is associated with a 10-digit Assessing Officer Code in the PAN database. This code indicates the PAN holder's jurisdiction in INDIA, which includes the Commissioner's Charge, Chief Commissioner Region, Joint Commissioner Range, and the Assessing Officer's location and designation in INDIA.
          <br/><br/>
          Depending on his or her source of income and geographic location in INDIA, each PAN Card holder is allotted a unique range. Each of these ranges will be subdivided into several units in INDIA, which will be referred to as circles or wards.
          <br/><br/>
          Your ward in INDIA will be decided by the amount of income you declare, which has a limit. You will be assigned a sub-jurisdiction in INDIA if you declare less than the appropriate limit. If you declare more than a specified amount, you will be placed in a specific circle in INDIA.
          <br/><br/>
          Please keep in mind that if you change address in or out of INDIA, your Assessing Officer code may change as well.
        </p>
      </div>
      <div className="faq-item-wrap">
        <h4 className="faq-question-heading">
          What are PAN Card Jurisdiction of INDIA Do I need to select it myself?
        </h4>
        <p className="faq-answer-text">
          No. When you apply for PAN Card online on this portal, your Assessing Officer Code is automatically selected by the system based on your address in INDIA.
          <br /><br />
          However, for the knowledge, table given below shows some Ward, Circle, Range, Commissioner, Area Code, Range Code in INDIA
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Ward/Circle<br />/Commissioner</th>
              <th>Area</th>
              <th>Type</th>
              <th>Range</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>CIRCLE 4(2)(1), BANGALORE</div>
              </td>
              <td>
                <div>KAR</div>
              </td>
              <td>
                <div>C</div>
              </td>
              <td>
                <div>223</div>
              </td>
              <td>
                <div>1</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>ITO WARD, SURATGARH</div>
              </td>
              <td>
                <div>RJN</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>590</div>
              </td>
              <td>
                <div>5</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>CIRCLE 6(1), CHANDIGARH</div>
              </td>
              <td>
                <div>NWR</div>
              </td>
              <td>
                <div>C</div>
              </td>
              <td>
                <div>46</div>
              </td>
              <td>
                <div>1</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>ITO WARD 3(4), BOKARO</div>
              </td>
              <td>
                <div>PTN</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>59</div>
              </td>
              <td>
                <div>4</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>WARD 1(3) JALPAIGURI</div>
              </td>
              <td>
                <div>WBG</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>212</div>
              </td>
              <td>
                <div>3</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>ANAND CIRCLE, ANAND</div>
              </td>
              <td>
                <div>GUJ</div>
              </td>
              <td>
                <div>C</div>
              </td>
              <td>
                <div>306</div>
              </td>
              <td>
                <div>1</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>WARD 4(3), DELHI</div>
              </td>
              <td>
                <div>DEL</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>32</div>
              </td>
              <td>
                <div>1</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>WARD 3(3), PUNE</div>
              </td>
              <td>
                <div>PNE</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>54</div>
              </td>
              <td>
                <div>3</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>WARD-3(2), CHANDIGARH</div>
              </td>
              <td>
                <div>NWR</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>43</div>
              </td>
              <td>
                <div>2</div>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'top' }}>
              <td>
                <div>ITO-2(2),BAREILLY-NEW</div>
              </td>
              <td>
                <div>LKN</div>
              </td>
              <td>
                <div>W</div>
              </td>
              <td>
                <div>42</div>
              </td>
              <td>
                <div>2</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
      <a 
        className="btn btn-primary btn-xl btn-flexiHeight" 
        data-urlparams="?location=INDIA" 
        href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php"
      >
        PAN Card Online Apply in <br /> INDIA
      </a>
    </div>
      </div>
    </div>
    <div 
  className="wrapper" 
  style={{
    maxWidth: '1200px',  // Maximum width of the container
    margin: '0 auto',    // Center the container horizontally
    padding: '15px'      // Padding around the content
  }}
>
     <div className="columns" style={{ paddingTop: '75px' }}>
     <div className="column col-xs-12 col-md-12 col-lg-12 col-12">
       <h3>Apply PAN Card By STATES</h3>
     </div>
     <div className="column col-xs-12 col-md-12 col-lg-12 col-12">
       <div className="columns">
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3" >
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/DELHI"
             style={linkStyle}
           >
             DELHI
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/TAMIL-NADU"
             style={linkStyle}
           >
             TAMIL NADU
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/MAHARASHTRA"
             style={linkStyle}
           >
             MAHARASHTRA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/GUJARAT"
             style={linkStyle}
           >
             GUJARAT
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/TELANGANA"
             style={linkStyle}
           >
             TELANGANA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/KERALA"
             style={linkStyle}
           >
             KERALA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/KARNATAKA"
             style={linkStyle}
           >
             KARNATAKA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/UTTAR-PRADESH"
             style={linkStyle}
           >
             UTTAR PRADESH
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/ANDHRA-PRADESH"
              style={linkStyle}
           >
             ANDHRA PRADESH (AP)
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/WEST-BENGAL"
             style={linkStyle}
             
           >
             WEST BENGAL
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/MADHYA-PRADESH"
             style={linkStyle}
           >
             MADHYA PRADESH (MP)
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/RAJASTHAN"
             style={linkStyle}
           >
             RAJASTHAN
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/ODISHA"
             style={linkStyle}
           >
             ODISHA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/HARYANA"
             style={linkStyle}
           >
             HARYANA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/ASSAM"
             style={linkStyle}
           >
             ASSAM
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/PUNJAB"
             style={linkStyle}
           >
             PUNJAB
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/BIHAR"
             style={linkStyle}
           >
             BIHAR
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/GOA"
             style={linkStyle}
           >
             GOA
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/JHARKHAND"
             style={linkStyle}
           >
             JHARKHAND
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/UTTARAKHAND"
             style={linkStyle}
           >
             UTTARAKHAND
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/CHHATTISGARH"
             style={linkStyle}
           >
             CHHATTISGARH
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/JAMMU-AND-KASHMIR"
             style={linkStyle}
           >
             JAMMU AND KASHMIR
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/HIMACHAL-PRADESH"
             style={linkStyle}
           >
             HIMACHAL PRADESH
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/PONDICHERRY"
             style={linkStyle}
           >
             PONDICHERRY
           </a>
         </div>
         <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
           <a 
             className="label label-secondary mb-2" 
             href="https://www.pancardapp.com/pages/apply-pan-card-online/MEGHALAYA"
             style={linkStyle}
           >
             MEGHALAYA
           </a>
         </div>
       </div>
     </div>
   </div>
   <div className="columns" style={{ paddingTop: '75px' }}>
      <div className="column col-xs-12 col-md-12 col-lg-12 col-12">
        <h3>Apply PAN Card By CITIES</h3>
      </div>
      <div className="column col-xs-12 col-md-12 col-lg-12 col-12">
        <div className="columns">
          <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
            <a 
              className="label mr-2 mb-2" 
              href="https://www.pancardapp.com/pages/apply-pan-card-online/PUNE"
              style={linkStyle}
            >
              PUNE
            </a>
          </div>
          <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
            <a 
              className="label mr-2 mb-2" 
              href="https://www.pancardapp.com/pages/apply-pan-card-online/AHMEDABAD"
              style={linkStyle}
            >
              AHMEDABAD
            </a>
          </div>
          <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
            <a 
              className="label mr-2 mb-2" 
              href="https://www.pancardapp.com/pages/apply-pan-card-online/CHENNAI"
              style={linkStyle}
            >
              CHENNAI
            </a>
          </div>
          <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
            <a 
              className="label mr-2 mb-2" 
              href="https://www.pancardapp.com/pages/apply-pan-card-online/BANGALORE"
              style={linkStyle}
            >
              BANGALORE
            </a>
          </div>
          <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
            <a 
              className="label mr-2 mb-2" 
              href="https://www.pancardapp.com/pages/apply-pan-card-online/JAIPUR"
              style={linkStyle}
            >
              JAIPUR
            </a>
          </div>
          <div className="column col-xs-6 col-md-4 col-lg-3 col-3">
            <a 
              className="label mr-2 mb-2" 
              href="https://www.pancardapp.com/pages/apply-pan-card-online/GHAZIABAD"
              style={linkStyle}
            >
              GHAZIABAD
            </a>
          </div>
        </div>
      </div>
      <a 
  data-urlparams="?location=INDIA" 
  href="https://www.pancardapp.com/apply-online-new-pan-card-application-form/individual.php" 
  className="btn btn-success btn-submit-pay stick-to-bottom-btn btn-confused-ao"
  style={{ display: 'none' }} // This hides the link
>
  Apply PAN Card Online
</a>

    </div>
    </div>
   </>
  );
};

export default ApplyPanCard;
