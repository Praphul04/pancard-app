import React from "react";

// import "./PanCardApplicationForm.css"; // Import the CSS file

const ApplyPanWithoutAadhaar = () => {

    const faqs = [
        {
          question: "Can I apply for PAN card online without Aadhaar OTP?",
          answer: (
            <div>
              Yes, you can definitely apply for PAN Card online without Aadhaar OTP.
            </div>
          )
        },
        {
          question: "How to make PAN card without Aadhaar OTP?",
          answer: (
            <div>
              Fill up the above online PAN Without Aadhaar OTP Form and complete all steps with required documents.
            </div>
          )
        },
        {
          question: "What documents are required for PAN Card Without Aadhaar Card OTP?",
          answer: (
            <div>
              <div><strong>Identity Proof (Any one of the following):</strong></div>
              <ol>
                <li>Pensioner card having photograph of the applicant.</li>
                <li>Election Card / Voter ID.</li>
                <li>Bank certificate in Original on letterhead from the branch (along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant.</li>
                <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
                <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
                <li>Certificate of identity in Original signed by a Gazetted officer.</li>
                <li>Certificate of identity in Original signed by a Member of Parliament.</li>
                <li>Aadhaar Card.</li>
                <li>Central Government Health Scheme Card.</li>
                <li>Passport.</li>
                <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
                <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
                <li>Ration card having photograph of the applicant.</li>
                <li>Driving License.</li>
                <li>Arm’s license.</li>
              </ol>
              <div><strong>Address Proof (Any one of the following):</strong></div>
              <ol>
                <li>Credit card statement less than 3 months old.</li>
                <li>Election Card / Voter ID.</li>
                <li>Electricity Bill less than 3 months old.</li>
                <li>Property Registration Document.</li>
                <li>Aadhaar Card.</li>
                <li>Water Bill less than 3 months old.</li>
                <li>Consumer gas connection card or book or piped gas bill.</li>
                <li>Certificate of identity in Original signed by a Member of Parliament.</li>
                <li>Certificate of identity in Original signed by a Gazetted officer.</li>
                <li>Driving License.</li>
                <li>Latest property tax assessment order.</li>
                <li>Allotment letter of accommodation issued by the Central/State Government less than 3 years old.</li>
                <li>Bank account statement less than 3 months old.</li>
                <li>Passport of Spouse (Husband/Wife).</li>
                <li>Landline/Broadband connection bill less than 3 months old.</li>
                <li>Certificate of identity in Original signed by a Municipal Councilor.</li>
                <li>Passport.</li>
                <li>Domicile certificate issued by the Government.</li>
                <li>Employer certificate in original.</li>
                <li>Post office passbook having address of the applicant.</li>
                <li>Depository account statement less than 3 months old.</li>
                <li>Certificate of identity in Original signed by a Member of Legislative Assembly.</li>
              </ol>
              <div><strong>Date Of Birth Proof (Any one of the following):</strong></div>
              <ol>
                <li>Driving License.</li>
                <li>Central Government Health Scheme Card.</li>
                <li>Matriculation certificate or Mark sheet of recognized board.</li>
                <li>Birth certificate issued by the Municipal Authority or any office authorized to issue birth.</li>
                <li>Ex-Servicemen Contributory Health Scheme photo card.</li>
                <li>Marriage Certificate.</li>
                <li>Passport.</li>
                <li>Election Card / Voter ID.</li>
                <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking.</li>
                <li>Domicile certificate issued by the Government.</li>
                <li>Aadhaar Card.</li>
                <li>Pension payment order.</li>
                <li>Affidavit sworn before a magistrate stating the date of birth.</li>
              </ol>
            </div>
          )
        },
        {
          question: "Will PAN Card without OTP process have applicant's photo, sign and father name on it?",
          answer: (
            <div>
              Yes, PAN Card without OTP process will also have applicant's photo, sign and father's name.
            </div>
          )
        },
        {
          question: "Who has to sign the PAN Without Aadhaar OTP Application?",
          answer: (
            <div>
              PAN Applicant needs to sign the PAN Card Form. If he/she is unable to sign then their left thumb impression is required on form.
            </div>
          )
        },
        {
          question: "How PAN Card without Aadhaar OTP will be delivered?",
          answer: (
            <div>
              PAN Card will be delivered to PAN Holder's Home Address by Courier mentioned in PAN Form. Address proof having the same address needs to be submitted along with the application.
            </div>
          )
        },
        {
          question: "How can I track PAN Card after doing application?",
          answer: (
            <div>
              After applying for PAN Card, you can track PAN card status on our portal at below link: <br />
              <a href="https://www.pancardapp.com/track-pan-card.php">Track PAN Card Status</a>
            </div>
          )
        }
      ];
      
  return (
    <>

 
          <div className="column col-12">
           
              <h1 className="pan-form-heading">
              Apply PAN Card Without Aadhaar OTP
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
                      Name as given in Aadhaar Card
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
                      Name Identity Proof
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
                </div>
              </div>

              <div className="hero bg-gray">
                <div className="hero-body">
                  <div className="form-group form-group-date-of-birth">
                    <label className="form-label" htmlFor="pan-form-select-dob">
                      Applicant's Date Of Birth
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
                      Date Of Birth Proof
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

              <div className="hero bg-gray">
                <div className="hero-body">
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

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
         
      </div>

      <div className="container">
      <h2 className="text-center">FAQs: PAN Card without Aadhaar OTP</h2>
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

export default ApplyPanWithoutAadhaar;
