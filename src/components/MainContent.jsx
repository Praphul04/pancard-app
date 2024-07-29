import React, { useState } from 'react';
import './MainContent.css';

function MainContent() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="content-wrapper">
      <div className="language-toggle">
        <button onClick={() => setLanguage('en')} className={language === 'en' ? 'btn-active' : 'btn-inactive'}>
          English
        </button>
        <button onClick={() => setLanguage('hi')} className={language === 'hi' ? 'btn-active' : 'btn-inactive'}>
          हिन्दी
        </button>
      </div>
      <div className="sections-container">
      <section id="home" className="intro-section">
        <h2>{language === 'en' ? 'Welcome to PAN Card Services' : 'PAN कार्ड सेवाओं में आपका स्वागत है'}</h2>
        <p>
          {language === 'en' ?
            'Get your Permanent Account Number (PAN) card quickly and efficiently with our online application process. Our easy-to-follow instructions and dedicated support team ensure that your application is processed smoothly.' :
            'हमारी ऑनलाइन आवेदन प्रक्रिया के साथ अपने पर्मानेंट अकाउंट नंबर (PAN) कार्ड को जल्दी और प्रभावी तरीके से प्राप्त करें। हमारी आसान निर्देश और समर्पित सहायता टीम सुनिश्चित करती है कि आपका आवेदन सुचारू रूप से प्रोसेस हो।'
          }
        </p>
        <h3>{language === 'en' ? 'Features:' : 'विशेषताएँ:'}</h3>
        <ul>
          <li><strong>{language === 'en' ? 'Fast Processing:' : 'तेज़ प्रोसेसिंग:'}</strong> {language === 'en' ? 'Get your PAN card delivered to your address quickly.' : 'अपने पते पर जल्दी से PAN कार्ड प्राप्त करें.'}</li>
          <li><strong>{language === 'en' ? 'User-Friendly Application:' : 'उपयोगकर्ता-अनुकूल आवेदन:'}</strong> {language === 'en' ? 'Fill out the form online with clear instructions.' : 'ऑनलाइन फॉर्म को स्पष्ट निर्देशों के साथ भरें.'}</li>
          <li><strong>{language === 'en' ? 'Support Team:' : 'सहायता टीम:'}</strong> {language === 'en' ? 'Reach out to our support for any assistance needed.' : 'किसी भी सहायता के लिए हमारी सहायता टीम से संपर्क करें.'}</li>
        </ul>
        <p>{language === 'en' ? 'Apply now and experience hassle-free PAN card services!' : 'अब आवेदन करें और परेशानी-मुक्त PAN कार्ड सेवाओं का अनुभव करें!'}</p>
      </section>

      <section id="instructions" className="application-guide">
        <h2>{language === 'en' ? 'How to Fill Out the PAN Card Application Form' : 'PAN कार्ड आवेदन फॉर्म भरने का तरीका'}</h2>
        <ol>
          <li><strong>{language === 'en' ? 'Personal Details:' : 'व्यक्तिगत विवरण:'}</strong> {language === 'en' ? 'Enter your full name, date of birth, and other required personal information.' : 'अपना पूरा नाम, जन्म तिथि और अन्य आवश्यक व्यक्तिगत जानकारी दर्ज करें।'}</li>
          <li><strong>{language === 'en' ? 'Address Details:' : 'पता विवरण:'}</strong> {language === 'en' ? 'Provide your residential address and communication address.' : 'अपना निवासीय पता और संचार पता प्रदान करें।'}</li>
          <li><strong>{language === 'en' ? 'Proof of Identity:' : 'पहचान प्रमाण:'}</strong> {language === 'en' ? 'Upload documents that verify your identity, such as a passport or driver\'s license.' : 'अपने पहचान को सत्यापित करने वाले दस्तावेज़ अपलोड करें, जैसे पासपोर्ट या ड्राइविंग लाइसेंस।'}</li>
          <li><strong>{language === 'en' ? 'Proof of Address:' : 'पते का प्रमाण:'}</strong> {language === 'en' ? 'Upload documents that confirm your address, such as a utility bill or bank statement.' : 'अपने पते की पुष्टि करने वाले दस्तावेज़ अपलोड करें, जैसे उपयोगिता बिल या बैंक स्टेटमेंट।'}</li>
          <li><strong>{language === 'en' ? 'Submit the Form:' : 'फॉर्म जमा करें:'}</strong> {language === 'en' ? 'Review your information and submit the application. You will receive a confirmation email once your application is received.' : 'अपनी जानकारी की समीक्षा करें और आवेदन सबमिट करें। आपके आवेदन प्राप्त होने पर आपको एक पुष्टि ईमेल प्राप्त होगा।'}</li>
        </ol>
        <p>{language === 'en' ? 'For any help during the application process, feel free to contact our support team.' : 'आवेदन प्रक्रिया के दौरान किसी भी सहायता के लिए हमारी सहायता टीम से संपर्क करें।'}</p>
      </section>
    </div>
    </div>
  );
}

export default MainContent;
