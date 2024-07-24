import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
 
  const [searchTerm, setSearchTerm] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSearchChangeset = (event) => setSearchTerm(event.target.value);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { to: '/', text: 'Home' },
    { to: '/apply-new-pan', text: 'Apply for New PAN Card' },
    { to: '/apply-changes-pan', text: 'Apply for Changes in PAN Card' },
    { to: '/reprint-lost-pan', text: 'Re-print for Lost PAN Card' },
    { to: '/reprint-damaged-pan', text: 'Re-print for Damaged PAN Card' },
    { to: '/apply-minor-pan', text: 'Apply for Minor PAN Card (below 18)' },
    { to: '/apply-marriage-pan', text: 'Apply for changes in PAN Card after Marriage' },
    { to: '/track-pan', text: 'Track PAN Card' },
    { to: '/customer-care', text: 'Customer Care' },
    { to: '/about-us', text: 'About Us' },
  ];

  const filteredItems = menuItems.filter(item =>
    item.text.toLowerCase().includes(searchQuery)
  );

  const toggleLanguageModal = () => {
    setShowLanguageModal(!showLanguageModal);
  };


  const toggleLanguageDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    // Implement logic to change language based on selectedLanguage
    console.log('Selected Language:', selectedLanguage);
    toggleLanguageModal(); // Close modal after language selection
  };



  return (
    <header
      className="navbar main-header-navbar"
      style={{ border: "2px solid #ccc", height: "fixed" }}
    >
     <section className="navbar-section-sidebar">
      <div className="off-canvas">
        <div className="off-canvas-toggle btn btn-action" id="sidebar-id" onClick={toggleMenu}>
          <i className={`bi bi-list ${menuActive ? "active" : ""}`}></i>
        </div>

        <div id="off-canvas-sidebar" className={`off-canvas-sidebar ${menuActive ? "active" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}>
            <i className="bi bi-x"></i>
          </button>
          <div className="sidebar-search-bar" style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div className="docs-nav">
            <ul className="menu menu-nav">
              {filteredItems.map((item, index) => (
                <li className="menu-item" key={item.to}>
                  {item.text.includes('Services') ? (
                    <>
                      <button className="submenu-toggle" onClick={() => toggleSubmenu(index)}>
                        {item.text}
                        <i className="bi bi-chevron-down"></i>
                      </button>
                      <ul className={`submenu ${openSubmenu === index ? 'active' : ''}`}>
                        <li><Link to="/apply-new-pan" onClick={closeMenu}>Apply for New PAN Card</Link></li>
                        <li><Link to="/apply-changes-pan" onClick={closeMenu}>Apply for Changes in PAN Card</Link></li>
                        <li><Link to="/reprint-lost-pan" onClick={closeMenu}>Re-print for Lost PAN Card</Link></li>
                        <li><Link to="/reprint-damaged-pan" onClick={closeMenu}>Re-print for Damaged PAN Card</Link></li>
                        <li><Link to="/apply-minor-pan" onClick={closeMenu}>Apply for Minor PAN Card (below 18)</Link></li>
                        <li><Link to="/apply-marriage-pan" onClick={closeMenu}>Apply for changes in PAN Card after Marriage</Link></li>
                      </ul>
                    </>
                  ) : (
                    <Link to={item.to} onClick={closeMenu} className="menu-link">
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`off-canvas-overlay ${menuActive ? "active" : ""}`} id="off-canvas-overlay" onClick={toggleMenu}></div>
      </div>
    </section>

<section className="navbar-center-logo" >
  <Link to="/" className="nav-logo-item">
 
    <img
      src="https://www.pancardapp.com/assets/img/logo.png?v=20240716v1"
      alt="Apply for PAN Card Online"
      className="main-header-logo-img"
    />
  </Link>
</section>


      <section className="navbar-section " style={{ display: "flex", alignItems: "center" }}>
  <div className="navbar-context">
    <ul className="navbar-list-items">
      <li className="navbar-btn">
        <Link to="/" className="nav-btn">
  
          <span>Home</span>
        </Link>
      </li>
      <li className="navbar-btn">
        <Link to="/track-pan" className="nav-btn">
   
          <span>Track PAN Card</span>
        </Link>
      </li>
      <li className="navbar-btn">
        <Link to="/customer-care" className="nav-btn">
       
          <span>Contact Us</span>
        </Link>
      </li>
    </ul>
  </div>

  <div className="navbar-context">
  <div className="nav-btn" id="language-selection-link" onClick={toggleLanguageModal}>
  <span id="current-language-text">
    {selectedLanguage === "english" ? "English" : selectedLanguage}
  </span>
  <i className="icon-angle-down"></i>
</div>

{showLanguageModal && (
  <div className="modal modal-sm notranslate" id="modal-language-selection">
    <div className="modal-overlay" onClick={toggleLanguageModal}></div>
    <div className="modal-container">
      <div className="modal-header" style={{ paddingBottom: "0px" }}>
        <button
          className="btn btn-clear float-right"
          aria-label="Close"
          onClick={toggleLanguageModal}
        ></button>
        <div className="modal-title h6">Select Language</div>
      </div>
      <div className="modal-body">
        <div className="content">
          <div className="form-group">
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={toggleLanguageDropdown}
              >
                {selectedLanguage === 'english' ? 'English' : selectedLanguage}
                <i className="icon-angle-down"></i>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => handleLanguageChange('english')}>English</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/hi')}>Hindi - हिंदी</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/ta')}>Tamil - தமிழ்</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/te')}>Telugu - తెలుగు</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/kn')}>Kannada - ಕನ್ನಡ</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/ml')}>Malayalam - മലയാളം</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/gu')}>Gujarati - ગુજરાતી</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/mr')}>Marathi - मराठी</div>
                  <div className="dropdown-item" onClick={() => handleLanguageChange('/en/bn')}>Bengali - বাংলা</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
      </section>
      <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearchChangeset}
          className="search-bar"
        />
    </header>
  );
};

export default Header;
