// QuickApplyButtons.jsx

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './DeshBoard.css'; // Import your custom CSS file

const DeshBoard = () => {
  const containerStyle = {
    backgroundColor: '#00008B', 
    padding: '30px', 
    borderRadius: '8px', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    backgroundImage: 'linear-gradient(135deg, #ffffff, #ebedee)', 
    backgroundSize: '200% 200%', 
    animation: 'gradientAnimation 10s ease infinite', 
    minHeight: 'auto',
    margin: '20px auto',
    maxWidth: '1200px',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyles = {
    backgroundColor: '#e9f7ef',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '50px',
    border: '1px solid #ccc',
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId === activeSection ? null : sectionId);
  };
  
  const sectionRef = useRef(null);

  // Function to handle scroll
  const handleSectionClickSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (<>
    <div className='top-navbar' >

    <div className="quick-main-apply-pan-btns-div column-nav mt-15">
      {[
        { path: '/apply-new-pan', label: 'Apply for New PAN Card' },
        { path: '/pan-correction', label: 'Apply for Changes in PAN Card' },
        { path: '/reprint-duplicate-pan', label: 'Apply for Duplicate PAN Card' },
        { path: '/minor-to-major-pan', label: 'Minor to Major PAN Card' },
        { path: '/reprint-lost-pan', label: 'Reprint Lost PAN Card' },
        { path: '/reprint-damaged-pan', label: 'Reprint Damaged PAN Card' },
        { path: '/pan-changes-marriage', label: 'PAN Changes after Marriage' },
        { path: '/epan-to-physical-pan', label: 'ePAN to Physical PAN Card' },
        { path: '/instant-pan', label: 'Instant PAN to Physical Card' },
        { path: '/cancel-duplicate-pan', label: 'Cancel/Surrender Duplicate PAN' },
        { path: '/apply-minor-pan', label: 'Minor PAN Card Apply Online' },
        { path: '/track-pan', label: 'Track PAN Card Status' },
      ].map(({ path, label }) => (
        <div key={path} className="column col-sm-12 col-md-6 col-lg-4 col-4">
          <Link to={path} className="btn btn-block btn-hover" style={{ textDecoration: 'none' }}>
            {label}
          </Link>
        </div>
      ))}
    </div>
  </div>

  
  <div className='main-container'>
      <div className="container-row">
        <div className="content-box-1" onClick={handleSectionClickSection}>
          <div className="accordion-container" onClick={() => handleSectionClick('section1')}>
            <img src="Pan-card-apply.jpg" alt="PAN Card Application" className="content-image" />
            <h2>Apply for Reissue</h2>
          </div>
        </div>
        <div className="content-box-2" onClick={handleSectionClickSection}>
          <div className="accordion-container-1" onClick={() => handleSectionClick('section2')}>
            <img src="applyreissue.webp" alt="PAN Card Application" className="content-image" />
            <h2>Apply for Changes</h2>
          </div>
        </div>
        <div className="content-box-3" onClick={handleSectionClickSection}>
          <div className="accordion-container-2" onClick={() => handleSectionClick('section3')}>
            <img src="applynew.jpg" alt="PAN Card Application" className="content-image" />
            <h2>Apply for New PAN</h2>
          </div>
        </div>
        <div className="content-box-4" onClick={handleSectionClickSection}>
          <div className="accordion-container-3" onClick={() => handleSectionClick('section4')}>
            <img src="duplicate.webp" alt="PAN Card Application" className="content-image" />
            <h2>Cancel Duplicate PAN</h2>
          </div>
        </div>
      </div>
    

</div>
  <div ref={sectionRef}>
{activeSection === 'section1' && (
            <div className="accordion-content" >
            <section id="applyChangesPanSection" className="mt-50" >
      <div className="columns-bar">
        <div className="column col">
            <h2 className="text-center h4">Apply for Reprint / Reissue / Duplicate PAN Card</h2>
          </div>
          <div className="column col">
            <div className="columns-bar">
              <div className="column col-sm-6 col-md-6 col-lg-4 col-4">
                <Link to="/apply-online-pan-card-correction-application-form/individual-duplicate-pan-card" className="apply-now-card gray">
                  <img src="https://www.pancardapp.com/assets/img/icon-duplicate.png?v=20240716v1" className="card-img" alt="Duplicate, Reprint Reissue PAN Card" />
                  <div className="text-dark card-title">
                    <div>Duplicate, Reprint</div>
                    <div>Reissue PAN Card</div>
                  </div>
                  <div>
                  <button className="apply-now-btn-sec-3">Apply Now</button>
                  </div>
                </Link>
              </div>
              <div className="column col-sm-6 col-md-6 col-lg-4 col-4">
                <Link to="/apply-online-pan-card-correction-application-form/individual-lost-pan-card" className="apply-now-card gray">
                  <img src="https://www.pancardapp.com/assets/img/icon-lost.png?v=20240716v1" className="card-img" alt="Reprint Lost PAN Card" />
                  <div className="text-dark card-title">
                    <div>Reprint Lost</div>
                    <div>PAN Card</div>
                  </div>
                  <div>
                  <button className="apply-now-btn-sec-3">Apply Now</button>
                  </div>
                </Link>
              </div>
              <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
                <Link to="/apply-online-pan-card-correction-application-form/individual-damaged-pan-card" className="apply-now-card gray">
                  <img src="https://www.pancardapp.com/assets/img/icon-damaged-card.png?v=20240716v1" className="card-img" alt="Reprint Damaged PAN Card" />
                  <div className="text-dark card-title">
                    <div>Reprint Damaged</div>
                    <div>PAN Card</div>
                  </div>
                  <div>
                  <button className="apply-now-btn-sec-3">Apply Now</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
        )}

      {/* Container 2 */}
  
{activeSection === 'section2' && (
          <div className="accordion-content" >
            <section id="applyChangesPanSection" className="mt-50" >
      <div className="columns-bar">
        <div className="column col">
          <h2 className="text-center h4">Apply for Changes / Correction in PAN Card</h2>
        </div>
        <div className="column col">
        <div className="columns-bar">
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4">
              <Link to="/apply-online-pan-card-correction-application-form/individual" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-individual.png?v=20240716v1" className="card-img" alt="Individual/Indian Citizen PAN Correction" />
                <div className="text-dark card-title">
                  <div>Individual/Indian Citizen</div>
                  <div>PAN Correction</div>
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4">
              <Link to="/apply-online-pan-card-correction-application-form/individual-minor-to-major" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-individual-minor.png?v=20240716v1" className="card-img" alt="Minor to Major PAN Card" />
                <div className="text-dark card-title">
                  <div>Minor to Major PAN</div>
                  <div>On becoming 18 years old</div>
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-pan-card-correction-application-form/individual-name-change-after-marriage" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-woman.png?v=20240716v1" className="card-img" alt="Change in Name after Marriage PAN Card" />
                <div className="text-dark card-title">
                  <div>Change in Name after Marriage</div>
                  <div>For ladies</div>
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

          </div>
        )}
      {/* Container 3 */}
 
{activeSection === 'section3' && (
          <div className="accordion-content">
           <section id="applyNewPanCardSection" className="mt-50" >
           <div className="columns-bar">
        <div className="column col">
          <h2 className="text-center h4">Apply for New PAN Card</h2>
        </div>
        <div className="column col">
        <div className="columns-bar">
          <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/individual" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-individual.png?v=20240716v1" className="card-img" alt="Individual/Indian Citizen New PAN Card" />
                <div className="text-dark card-title">
                  <div>Individual/Indian Citizen</div>
                  <div>New PAN Card</div>
                 
                </div>
              
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>

                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/individual-minor" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-individual-minor.png?v=20240716v1" className="card-img" alt="New Minor PAN Card" />
                <div className="text-dark card-title">
                  <div>Below 18 Years Old</div>
                  <div>Minor PAN Card Apply Online</div>
                  
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/hindu-undivided-family-HUF" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-family.png?v=20240716v1" className="card-img" alt="New HUF PAN Card" />
                <div className="text-dark card-title">
                  <div>Hindu Undivided Family</div>
                  <div>New HUF PAN Card</div>
                  
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/partnership-firm" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-partnership.png?v=20240716v1" className="card-img" alt="New Firm PAN Card" />
                <div className="text-dark card-title">
                  <div>Partnership Firm</div>
                  <div>New Firm PAN Card</div>
                  
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/limited-liability-partnership-LLP" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-company.png?v=20240716v1" className="card-img" alt="New LLP PAN Card" />
                <div className="text-dark card-title">
                  <div>Limited Liability Partnership Firm</div>
                  <div>New LLP PAN Card</div>
                  
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/trust" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-trust.png?v=20240716v1" className="card-img" alt="New Trust PAN Card" />
                <div className="text-dark card-title">
                  <div>Trust</div>
                  <div>New Trust PAN Card</div>
         
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/aop/co-operative-society" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-co-operative-society.png?v=20240716v1" className="card-img" alt="Co-Operative Society New PAN Card" />
                <div className="text-dark card-title">
                  <div>Co-Operative Society</div>
                  <div>New PAN Card</div>
               
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
            <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-new-pan-card-application-form/aop/association" className="apply-now-card green">
                <img src="https://www.pancardapp.com/assets/img/icon-co-operative-society.png?v=20240716v1" className="card-img" alt="Association PAN Card" />
                <div className="text-dark card-title">
                  <div>Association</div>
                  <div>New PAN Card</div>
             
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
          </div>
        )}
      {/* Container 4 */}
    
    {activeSection === 'section4' && (
          <div className="accordion-content"  >
           <section id="applyChangesPanSection" className="mt-50" >
           <div className="columns-bar">
           <div className="column col">
          <h2 className="text-center h4">Cancel or Surrender Duplicate PAN Card</h2>
        </div>
        
        <div className="column col">
        <div className="columns-bar">
            <div className="column col-sm-8 col-md-7 col-lg-4 col-4 col-mx-auto">
              <Link to="/apply-online-pan-card-correction-application-form/surrender/individual-cancel-duplicate-pan-card" className="apply-now-card gray">
                <img src="https://www.pancardapp.com/assets/img/icon-cancel-duplicate-pan-card.png?v=20240716v1" className="card-img" alt="Cancel/Surrender Duplicate PAN Card" />
                <div className="text-dark card-title">
                  <div>Cancel / Surrender</div>
                  <div>Duplicate PAN Card</div>
                </div>
                <div>
                <button className="apply-now-btn-sec-3">Apply Now</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
 

          </div>
        )}
</div>
    <div className="body-content container grid-lg" >

    {/* Section 6 */ }

    <section id="whyApplyThroughUsSection" className="mt-50">
  <div className="columns-bar">
    <div className="column col-19">
      <h2 className="text-center">Why Apply Through Us?</h2>
    </div>
    <div className="column col">
      <div className="columns-bar">
        {[
          {
            src: "https://www.pancardapp.com/assets/img/icon-fast-pancard.png?v=20240716v1",
            alt: "Fastest PAN Processing Facility",
            text: "Fastest PAN Processing Facility. That's our Guarantee.",
          },
          {
            src: "https://www.pancardapp.com/assets/img/icon-duplicate.png?v=20240716v1",
            alt: "PAN Card Copy in Email",
            text: "Receive PAN Card Copy in Email & Physical Card delivered to your address.",
          },
          {
            src: "https://www.pancardapp.com/assets/img/icon-support.png?v=20240716v1",
            alt: "Dedicated Manager assigned to each Applicant",
            text: "Dedicated Manager assigned to each Applicant.",
          },
          {
            src: "https://www.pancardapp.com/assets/img/icon-laptop-mobile-cloud.png?v=20240716v1",
            alt: "Fill Form From Mobile & Desktop Quick & Easy",
            text: "Fill Form From Mobile & Desktop Quick & Easy",
          },
          {
            src: "https://www.pancardapp.com/assets/img/icon-money-back.png?v=20240716v1",
            alt: "Backed with 100% Money Back Guarantee",
            text: "Backed with 100% Money Back Guarantee.",
          },
          {
            src: "https://www.pancardapp.com/assets/img/clients-15000.png?v=20240716v1",
            alt: "Over 15,000+ Applications processed with 100% success rate",
            text: "Over 15,000+ Applications processed with 100% success rate.",
          },
        ].map(({ src, alt, text }) => (
          <div key={alt} className="column col-sm-12 col-md-6 col-lg-4 col-4">
            <div className="apply-now-card">
              <img src={src} className="card-img" alt={alt} />
              <div className="text-dark card-title">
                <div>{text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
</div>
  {/* Combined Sections 7 and 8 */}
<section id="contactAndTrackSection" className='main-container' > 
  <div className="columns-bar">
    <div className="column col-12 col-md-6" >
      <div className="contact-section">
        <h2 className="text-center h4">Any doubts? Contact us before Applying.</h2>
        <div className="columns-bar">
          <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
            <a href="https://www.pancardapp.com/blog/customer-care/" className="apply-now-card">
              <img src="https://www.pancardapp.com/assets/img/icon-gmail.png?v=20240716v1" className="card-img" alt="Send us your query." />
              <div className="text-dark card-title">
                <div><strong>Send us your query.</strong></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="column col-12 col-md-6" >
      <div className="track-section">
        <h2 className="text-center h4">Already applied? Track your Application here.</h2>
        <div className="columns-bar">
          <div className="column col-sm-6 col-md-6 col-lg-4 col-4 col-mx-auto">
            <a href="https://www.pancardapp.com/track-pan-card.php" className="apply-now-card">
              <img src="https://www.pancardapp.com/assets/img/icon-fast-pancard.png?v=20240716v1" className="card-img" alt="Track PAN Status" />
              <div className="text-dark card-title">
                <div>Track PAN Status</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Section 8 Parts */}
    <div className="columns" >
      <div className="column col-12">
        <div className="columns">
          <div className="column col-sm-12 col-md-12 col-lg-12 col-12 col-mx-auto">
            <div className="accordion text-center">
              <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden />
              <label className="accordion-header" htmlFor="accordion-1">
                PANCardApp.com
              </label>
              <div className="accordion-body">
                <span className="label mr-2 mb-2">www.pancard</span>
                <span className="label mr-2 mb-2">pan card.com</span>
                <span className="label mr-2 mb-2">pancard.com</span>
                <span className="label mr-2 mb-2">pan card .com</span>
                <span className="label mr-2 mb-2">www.pancard.com</span>
                <span className="label mr-2 mb-2">pan card app.com</span>
                <span className="label mr-2 mb-2">pancard app.com</span>
                <span className="label mr-2 mb-2">pancard .com</span>
                <span className="label mr-2 mb-2">www.pan card</span>
                <span className="label mr-2 mb-2">www pancard.com</span>
                <span className="label mr-2 mb-2">www.pan</span>
                <span className="label mr-2 mb-2">www.pen card online.com</span>
                <span className="label mr-2 mb-2">pan card.com.in</span>
                <span className="label mr-2 mb-2">www.pan card.com</span>
                <span className="label mr-2 mb-2">www. pan card.com</span>
                <span className="label mr-2 mb-2">pen card.com</span>
                <span className="label mr-2 mb-2">www.pan-card.com</span>
                <span className="label mr-2 mb-2">pancard. com</span>
                <span className="label mr-2 mb-2">www.pen card</span>
                <span className="label mr-2 mb-2">www.pancard .com</span>
                <span className="label mr-2 mb-2">pan card. com</span>
                <span className="label mr-2 mb-2">pen card .com</span>
                <span className="label mr-2 mb-2">www pen card .com</span>
                <span className="label mr-2 mb-2">pan card app .com</span>
                <span className="label mr-2 mb-2">www.pancard apply.com</span>
                <span className="label mr-2 mb-2">www.pan card .com</span>
                <span className="label mr-2 mb-2">make pan card.com</span>
                <span className="label mr-2 mb-2">pan card www.com</span>
                <span className="label mr-2 mb-2">www.pencard.com</span>
                <span className="label mr-2 mb-2">pan card . com</span>
                <span className="label mr-2 mb-2">the pan.com</span>
                <span className="label mr-2 mb-2">www. pancard</span>
                <span className="label mr-2 mb-2">make pancard.com</span>
                <span className="label mr-2 mb-2">www.pan card online</span>
                <span className="label mr-2 mb-2">www.pan.com</span>
                <span className="label mr-2 mb-2">ww pan card.com</span>
                <span className="label mr-2 mb-2">www.online pan card</span>
                <span className="label mr-2 mb-2">pin card.com</span>
                <span className="label mr-2 mb-2">www pan card.com</span>
                <span className="label mr-2 mb-2">www.pan card.in</span>
                <span className="label mr-2 mb-2">www.pan card.com.in</span>
                <span className="label mr-2 mb-2">make pan card .com</span>
                <span className="label mr-2 mb-2">ww.pan card</span>
                <span className="label mr-2 mb-2">www pan.com</span>
                <span className="label mr-2 mb-2">www.pan.</span>
                <span className="label mr-2 mb-2">my pan.com</span>
                <span className="label mr-2 mb-2">pan cardapp.com</span>
                <span className="label mr-2 mb-2">www. pan</span>
                <span className="label mr-2 mb-2">www.pencard</span>
                <span className="label mr-2 mb-2">www.pan .com</span>
                <span className="label mr-2 mb-2">www.pan card apply.com</span>
                <span className="label mr-2 mb-2">www. pen card</span>
                <span className="label mr-2 mb-2">www.pan.card</span>
                <span className="label mr-2 mb-2">www.pan card india.com</span>
                <span className="label mr-2 mb-2">online pan card.com</span>
                <span className="label mr-2 mb-2">pan card.</span>
                <span className="label mr-2 mb-2">pencard.com</span>
                <span className="label mr-2 mb-2">www.pin card.in</span>
                <span className="label mr-2 mb-2">pan card.com online</span>
                <span className="label mr-2 mb-2">www.pan card application</span>
                <span className="label mr-2 mb-2">pan.card</span>
                <span className="label mr-2 mb-2">pan card online.com</span>
                <span className="label mr-2 mb-2">www.pamcard</span>
                <span className="label mr-2 mb-2">is pancard.com genuine</span>
                <span className="label mr-2 mb-2">pan card online.</span>
                <span className="label mr-2 mb-2">pan card apply.com</span>
                <span className="label mr-2 mb-2">pancard.com review</span>
                <span className="label mr-2 mb-2">pan card .com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    
    </>
  );
};

export default DeshBoard;
