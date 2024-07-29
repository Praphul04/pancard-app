import React from "react";
import { Helmet } from "react-helmet";
// import "./PanCardApplicationForm.css"; // Import the CSS fil 

const AgeSixteenPanApply = ({ showTitle }) => {

    const faqs = [
        {
          question: "What is 16 year old PAN Card?",
          answer: (
            <div>
              <p>PAN Card for 16 years old does not have the applicant's photo on it. It has the parent's/guardian's signature. It features the PAN number printed on top and contains the PAN holder's name, date of birth, and father's name. Most importantly, it includes a hologram which validates it as genuine ID proof. This is why the PAN Card for a 16-year-old is requested by banks or other financial institutions as proof of identity for individuals below 18 years old.</p>
            </div>
          )
        },
        {
          question: "How to apply PAN Card for 16 year old?",
          answer: (
            <div>
              <p>You can apply for a PAN Card for a 16-year-old online by filling out the PAN Card for 16-year-old Application Form and completing all steps with the required documents.</p>
            </div>
          )
        },
        {
          question: "Can a person under 16 years apply for PAN card?",
          answer: (
            <div>
              <p>Yes, definitely. The applicant's parent or guardian can apply for a PAN card for a 16-year-old.</p>
            </div>
          )
        },
        {
          question: "Is PAN card for 16 year old valid?",
          answer: (
            <div>
              <p>Yes, the PAN card for a 16-year-old is valid.</p>
            </div>
          )
        },
        {
          question: "What Documents are required for PAN Card Age 16 Application?",
          answer: (
            <div>
              <div>
                <strong>Identity Proof of Applicant of Age 16:</strong>
                <ol>
                  <li>Aadhaar card</li>
                </ol>
              </div>
              <div>
                <strong>Date Of Birth Proof of Applicant of Age 16 (Any one):</strong>
                <ol>
                  <li>Aadhaar Card</li>
                  <li>Birth certificate issued by the Municipal Authority or any office authorized to issue birth certificates</li>
                  <li>Passport</li>
                  <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking</li>
                </ol>
              </div>
              <div>
                <strong>Identity Proof of Parent or Guardian (Any one):</strong>
                <ol>
                  <li>Certificate of identity in Original signed by a Member of Parliament</li>
                  <li>Passport</li>
                  <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking</li>
                  <li>Pensioner card having photograph of the applicant</li>
                  <li>Central Government Health Scheme Card</li>
                  <li>Ex-Servicemen Contributory Health Scheme photo card</li>
                  <li>Election Card / Voter ID</li>
                  <li>Arm’s license</li>
                  <li>Certificate of identity in Original signed by a Member of Legislative Assembly</li>
                  <li>Certificate of identity in Original signed by a Municipal Councilor</li>
                  <li>Bank certificate in Original on letterhead from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant</li>
                  <li>Ration card having photograph of the applicant</li>
                  <li>Certificate of identity in Original signed by a Gazetted officer</li>
                  <li>Aadhaar Card</li>
                  <li>Driving License</li>
                </ol>
              </div>
              <div>
                <strong>Address Proof of Parent or Guardian (Any one):</strong>
                <ol>
                  <li>Driving License</li>
                  <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old</li>
                  <li>Certificate of identity in Original signed by a Gazetted officer</li>
                  <li>Certificate of identity in Original signed by a Member of Legislative Assembly</li>
                  <li>Depository account statement less than 3 months old</li>
                  <li>Property Registration Document</li>
                  <li>Certificate of identity in Original signed by a Municipal Councilor</li>
                  <li>Electricity Bill less than 3 months old</li>
                  <li>Credit card statement less than 3 months old</li>
                  <li>Passport</li>
                  <li>Post office passbook having address of the applicant</li>
                  <li>Certificate of identity in Original signed by a Member of Parliament</li>
                  <li>Bank account statement less than 3 months old</li>
                  <li>Employer certificate in original</li>
                  <li>Consumer gas connection card or book or piped gas bill</li>
                  <li>Election Card / Voter ID</li>
                  <li>Landline/Broadband connection bill less than 3 months old</li>
                  <li>Latest property tax assessment order</li>
                  <li>Passport of Spouse (Husband/Wife)</li>
                  <li>Water Bill less than 3 months old</li>
                  <li>Aadhaar Card</li>
                  <li>Domicile certificate issued by the Government</li>
                </ol>
              </div>
            </div>
          )
        },
        {
          question: "Who has to sign the PAN Card application for Applicant of Age 16?",
          answer: (
            <div>
              <p>Any one of the parent or guardian needs to sign the PAN Card Form. If they are unable to sign, then a left thumb impression is required on the form.</p>
            </div>
          )
        },
        {
          question: "How PAN Card for 16 year old will be delivered?",
          answer: (
            <div>
              <p>The PAN Card will be delivered to the parent or guardian's address by courier, as mentioned in the PAN Form while applying for the PAN card online. Address proof having the same address needs to be submitted along with the application.</p>
            </div>
          )
        },
        {
          question: "How can I track 16 year old PAN Card Status after application?",
          answer: (
            <div>
              <p>After applying for the PAN Card, you can track the PAN card status on our portal at the following link: <br />
              <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a></p>
            </div>
          )
        }
      ];
      
      


  return (
    <>

 
<div className="column col-12">
         
              <h1 className="pan-form-heading">
              PAN Card Apply Age 16 Years
              </h1>
       
          </div>



          <div className="column col-12">
            <form
              className="main-pan-form individual"
              id="new-pan-form"
              method="POST"
              action="./"
            >
              <div className="form-group hide">
                <label
                  className="form-label"
                  htmlFor="pan-form-application-category"
                >
                  Application Category
                </label>
                <select
                  className="form-select"
                  id="pan-form-application-category"
                >
                  <option value="individual" selected>
                    Individual
                  </option>
                  <option value="individual-minor">
                    Individual Minor (below 18 years)
                  </option>
                  <option value="huf">Hindu Undivided Family (HUF)</option>
                  <option value="partnership-firm">Partnership Firm</option>
                  <option value="llp">
                    Limited Liability Partnership (LLP)
                  </option>
                  <option value="trust">Trust</option>
                  <option value="aop">Association of Persons</option>
                  <option value="aop" data-subcategory="association">
                    Association
                  </option>
                  <option value="aop" data-subcategory="co-operative-society">
                    Co-Operative Society
                  </option>
                  <option value="aop" data-subcategory="housing-society">
                    Housing Society
                  </option>
                  <option value="aop" data-subcategory="memorial-society">
                    Memorial Society
                  </option>
                  <option value="aop" data-subcategory="welfare-society">
                    Welfare Society
                  </option>
                  <option value="aop" data-subcategory="welfare-association">
                    Welfare Association
                  </option>
                  <option value="aop" data-subcategory="owners-association">
                    Owners Association
                  </option>
                  <option value="aop" data-subcategory="apartment-association">
                    Apartment Association
                  </option>
                  <option value="aop" data-subcategory="educational-society">
                    Educational Society
                  </option>
                  <option value="aop" data-subcategory="mandali">
                    Mandali
                  </option>
                  <option value="aop" data-subcategory="seva-sanstha">
                    Sanstha
                  </option>
                  <option value="aop" data-subcategory="samiti">
                    Samiti
                  </option>
                  <option value="aop" data-subcategory="seva-sangam">
                    Sangam
                  </option>
                  <option value="aop" data-subcategory="school">
                    School
                  </option>
                  <option value="aop" data-subcategory="shg">
                    SHG - Self Help Group
                  </option>
                  <option value="aop" data-subcategory="joint-venture">
                    Joint Venture
                  </option>
                  <option value="aop" data-subcategory="ngo">
                    NGO
                  </option>
                </select>
                <select
                  className="form-select"
                  id="pan-form-application-sub-category"
                >
                  <option value selected>
                    Individual
                  </option>
                </select>
              </div>

              <div className="hero bg-gray">
                <div className="hero-body">
                  <div className="form-group">
                    <label className="form-label text-dark">
                      APPLICANT NAME DETAIL
                    </label>
                    <label
                      className="form-label"
                      htmlFor="pan-form-applicant-full-name"
                    >
                Applicant's Full Name
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="pan-form-applicant-full-name"
                      placeholder="Enter your Full Name here"
                    />
                  </div>
                  <div className="form-group">
                    <div className="columns">
                      <div className="column col-4 col-md-4 col-sm-12 col-xs-12">
                        <label
                          className="form-label"
                          htmlFor="application_name_birfurcation_last_name"
                        >
                          Surname / Last Name
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          id="application_name_birfurcation_last_name"
                          placeholder="Enter your Surname here"
                        />
                      </div>
                      <div className="column col-4 col-md-4 col-sm-12 col-xs-12">
                        <label
                          className="form-label"
                          htmlFor="application_name_birfurcation_first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          id="application_name_birfurcation_first_name"
                          placeholder="Enter your First Name here"
                        />
                      </div>
                      <div className="column col-4 col-md-4 col-sm-12 col-xs-12">
                        <label
                          className="form-label"
                          htmlFor="application_name_birfurcation_middle_name"
                        >
                          Middle Name <small>[Father or Husband name]</small>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          id="application_name_birfurcation_middle_name"
                          placeholder="Enter your Middle Name here"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-group-select-poi-proof">
                    <label
                      className="form-label"
                      htmlFor="pan-form-select-poi-proof"
                    >
        Applicant's Identity Proof
                    </label>
                    <select
                      className="form-select"
                      id="pan-form-select-poi-proof"
                    >
                      <option value>Select Name Identity Proof</option>
                      <option value="aadhaar-card">Aadhaar Card</option>
                    </select>
                    <p
                      className="input-hint-aadhaar-enrollment-receipt"
                      style={{ fontSize: "10px" }}
                    >
                      As you do not have Aadhaar Card, provide{" "}
                      <mark>Aadhaar Enrollment Receipt</mark> along with above
                      selected Name ID proof.
                    </p>
                  </div>
                </div>
              </div>

             

              <div className="hero bg-gray">
                <div className="hero-body">
                  <div className="form-group form-group-date-of-birth">
                    <label className="form-label" htmlFor="pan-form-select-dob">
                    Applicant's Birth Date
                    </label>
                    <div className="columns">
                      <div className="column col-xs-3 col-md-2 col-lg-2 col-1">
                        <select
                          className="form-select"
                          id="pan-form-select-dob-day"
                        >
                          <option value="">Day</option>
                          {[...Array(31).keys()].map((day) => (
                            <option key={day + 1} value={day + 1}>
                              {day + 1}
                            </option>
                          ))}
                        </select>
                        <p className="form-input-hint">Day</p>
                      </div>
                      <div className="column col-xs-5 col-md-3 col-lg-2 col-2">
                        <select
                          className="form-select"
                          id="pan-form-select-dob-month"
                        >
                          <option value="">Month</option>
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month, index) => (
                            <option key={index + 1} value={index + 1}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <p className="form-input-hint">Month</p>
                      </div>
                      <div className="column col-xs-4 col-md-3 col-lg-2 col-2">
                        <select
                          className="form-select"
                          id="pan-form-select-dob-year"
                        >
                          <option value="">Year</option>
                          {[...Array(100).keys()].map((year) => (
                            <option key={year + 1920} value={year + 1920}>
                              {year + 1920}
                            </option>
                          ))}
                        </select>
                        <p className="form-input-hint">Year</p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="pan-form-select-podob-proof"
                    >
                 Applicant's Birth Date Proof
                    </label>
                    <select
                      className="form-select"
                      id="pan-form-select-podob-proof"
                    >
                      <option value>Select Date Of Birth Proof</option>
                      <option value="aadhar-card">Aadhaar Card</option>
                      <option value="passport">Passport</option>
                      <option value="birth-certificate">
                        Birth Certificate
                      </option>
                      <option value="matriculation-certificate">
                        Matriculation Certificate
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="hero bg-gray">
                <div className="hero-body">
                  <div className="form-group">
                    <label className="form-label text-dark">
                      FATHER'S NAME DETAIL
                    </label>
                    <div className="columns">
                      <div className="column col-4 col-md-4 col-sm-12 col-xs-12">
                        <label
                          className="form-label"
                          htmlFor="father_mother_name_birfurcation_last_name"
                        >
                          Surname / Last Name
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          id="father_mother_name_birfurcation_last_name"
                          placeholder="Enter your Name here"
                        />
                      </div>
                      <div className="column col-4 col-md-4 col-sm-12 col-xs-12">
                        <label
                          className="form-label"
                          htmlFor="father_mother_name_birfurcation_first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          id="father_mother_name_birfurcation_first_name"
                          placeholder="Enter your Name here"
                        />
                      </div>
                      <div className="column col-4 col-md-4 col-sm-12 col-xs-12">
                        <label
                          className="form-label"
                          htmlFor="father_mother_name_birfurcation_middle_name"
                        >
                          Middle Name
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          id="father_mother_name_birfurcation_middle_name"
                          placeholder="Enter your Name here"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-group-select-poi-proof">
                    <label
                      className="form-label"
                      htmlFor="pan-form-select-poi-proof"
                    >
                     Father's Identity Proof
                    </label>
                    <select
                      className="form-select"
                      id="pan-form-select-poi-proof"
                    >
                      <option value>Select Name Identity Proof</option>
                      <option value="aadhaar-card">Aadhaar Card</option>
                    </select>
                    <p
                      className="input-hint-aadhaar-enrollment-receipt"
                      style={{ fontSize: "10px" }}
                    >
                      As you do not have Aadhaar Card, provide{" "}
                      <mark>Aadhaar Enrollment Receipt</mark> along with above
                      selected Name ID proof.
                    </p>
                  </div>
                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="pan-form-address-proof"
                    >
                      Address Proof
                    </label>
                    <select className="form-select" id="pan-form-address-proof">
                      <option value="">Select Address Proof</option>
                      <option value="aadhaar-card">Aadhaar Card</option>
                      <option value="election-card">
                        Election Card / Voter ID
                      </option>
                      <option value="driving-license">Driving License</option>
                      <option value="passport">Passport</option>
                      <option value="passport-spouse">
                        Passport of Spouse (Husband/Wife)
                      </option>
                      <option value="electricity-bill">
                        Electricity Bill less than 3 months old
                      </option>
                      <option value="landline-bill">
                        Landline/Broadband connection bill less than 3 months
                        old
                      </option>
                      <option value="bank-account-statement">
                        Bank account statement less than 3 months old
                      </option>
                      <option value="post-office-passbook">
                        Post office passbook having address of the applicant
                      </option>
                      <option value="water-bill">
                        Water Bill less than 3 months old
                      </option>
                      <option value="gas-connection-bill">
                        Consumer gas connection card or book or piped gas bill
                      </option>
                      <option value="property-tax-assessment-order">
                        Latest property tax assessment order
                      </option>
                      <option value="property-registration">
                        Property Registration Document
                      </option>
                      <option value="certificate-gazetted-officer">
                        Certificate of identity in Original signed by a Gazetted
                        officer
                      </option>
                      <option value="certificate-member-parliament">
                        Certificate of identity in Original signed by a Member
                        of Parliament
                      </option>
                      <option value="certificate-member-legislative-assembly">
                        Certificate of identity in Original signed by a Member
                        of Legislative Assembly
                      </option>
                      <option value="certificate-municipal-councilor">
                        Certificate of identity in Original signed by a
                        Municipal Councilor
                      </option>
                      <option value="credit-card-statement">
                        Credit card statement less than 3 months old
                      </option>
                      <option value="employer-certificate">
                        Employer certificate in original
                      </option>
                      <option value="depository-account-statement">
                        Depository account statement less than 3 months old
                      </option>
                      <option value="accommodation-letter-by-central-state-gov">
                        Allotment letter of accommodation issued by the
                        Central/State Government less than 3 years old
                      </option>
                      <option value="domicile-certificate">
                        Domicile certificate issued by the Government
                      </option>
                    </select>
                  </div>
                  <div className="mt-2 address-proof-courier-note">
                    <strong>
                      * PAN Card will be sent in courier as per Address Proof.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="hero bg-gray">
                <div className="hero-body">
                  <div className="form-group">
                    <label className="form-label text-dark">
                      Contact Details
                    </label>
                    <label
                      className="form-label"
                      htmlFor="pan-form-mobile-number"
                    >
                      Mobile Number
                    </label>
                    <input
                      className="form-input"
                      type="tel"
                      id="pan-form-mobile-number"
                      placeholder="Enter your Mobile Number here"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="pan-form-email-id">
                      Email ID
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      id="pan-form-email-id"
                      placeholder="Enter your Email ID here"
                    />
                  </div>
                </div>
              </div>


              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
         
      </div>

      <div className="container">
      <h2 className="text-center">FAQs: PAN Card for 16 Year Old Apply Online</h2>
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

export default AgeSixteenPanApply;
