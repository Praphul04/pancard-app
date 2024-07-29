import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop"; 
import Footer from "./components/Footer";
import Header from "./components/Header";
import DeshBoard from "./components/DeshBoard";
import PanCardApplicationForm from "./pages/PanCardApplicationForm";
import PanCorrectionForm from "./pages/PanCorrectionForm";
import DuplicatePanCardForm from "./pages/DuplicatePanCardForm";
import MinorToMajorPanCardForm from "./pages/MinorToMajorPanCardForm";
import ReprintLostPanCardForm from "./pages/ReprintLostPanCardForm";
import ReprintDamagedPanCard from "./pages/ReprintDamagedPanCard";
import PanChangesAfterMarrigeForm from "./pages/PanChangesAfterMarrigeForm";
import EpanToPhysicalPanCArdForm from "./pages/EpanToPhysicalPanCArdForm";
import InstantPanCardForm from "./pages/InstantPanCardForm";
import CancelDuplicatePanCard from "./pages/CancelDuplicatePanCard";
import MinorPanCardApplyForm from "./pages/MinorPanCardApplyForm";
import TrackPanCardStatus from "./pages/TrackPanCardForm";
import HUFForm from "./pages/HUFForm";
import PartnershipFirmForm from "./pages/PartnershipFirmForm";
import LLPPanCardForm from "./pages/LLPPanCardForm";
import TrustPanCardApplication from "./pages/TrustPanCardApplication.jsx";
import CoOperativeSocietyForm from "./pages/CoOperativeSocietyForm.jsx";
import AssociationNewPanForm from "./pages/AssociationNewPanForm.jsx";
import ContectUsPage from "./contectpages/ContectUsPage.jsx";
import ChildPanCardForm from "./footerPages/ChildPanCardForm.jsx";
import ApplyPanWithoutAadhaar from "./footerPages/ApplyPanWithoutAadhaar.jsx";
import PanCardForStudent from "./footerPages/PanCardForStudent.jsx";
import ChangeSignaturePanForm from "./footerPages/ChangeSignaturePanForm.jsx";
import ChangeDOBPanCard from "./footerPages/ChangeDOBPanCard.jsx";
import OnlinePANCardAmendment from "./footerPages/OnlinePANCardAmendment.jsx";
import ReprintPanCardApplication from "./footerPages/ReprintPanCardApplication.jsx";
import SurrenderDuplicatePanCard from "./footerPages/SurrenderDuplicatePanCard.jsx";
import PanAadhaarLinkStatus from "./footerPages/PanAadhaarLinkStatus.jsx";
import PhysicalPanCardApplication from "./footerPages/PhysicalPanCardApplication.jsx";
import EPanToNormalPan from "./footerPages/EPanToNormalPan.jsx";
import UpgradeSmartPanWithQRCode from "./footerPages/UpgradeSmartPanWithQRCode.jsx";
import PVCPanCardApplication from "./footerPages/PVCPanCardApplication.jsx";
import PlasticPanCardApplication from "./footerPages/PlasticPanCardApplication.jsx";
import PanCardHardCopyApplication from "./footerPages/PanCardHardCopyApplication.jsx";
import AgeSixteenPanApply from "./footerPages/AgeSixteenPanApply.jsx";
import TrustPanCardCorrection from "./footerPages/TrustPanCardCorrection.jsx";
import DuplicateTRUSTPANCardApplication from "./footerPages/DuplicateTRUSTPANCardApplication.jsx";
import ReprintTRUSTPANCardApplication from "./footerPages/ReprintTRUSTPANCardApplication.jsx";
import ApplyforBusinessPANCard from "./footerPages/ApplyforBusinessPANCard.jsx";
import PartnershipFirmPanCorrection from "./footerPages/PartnershipFirmPanCorrection.jsx";
import DuplicatePartnersipFirmPANCardApplication from "./footerPages/DuplicatePartnersipFirmPANCardApplication.jsx";
import ReprintDamagedPartnershipFirmPAN from "./footerPages/ReprintDamagedPartnershipFirmPAN.jsx";
import LLPPANCardCorrectionApplication from "./footerPages/LLPPANCardCorrectionApplication.jsx";
import DuplicateLLPPANCardApplication from "./footerPages/DuplicateLLPPANCardApplication.jsx";
import ReprintLLPPANCardApplication from "./footerPages/ReprintLLPPANCardApplication.jsx";
import CoOperativePANCardCorrectionApplication from "./footerPages/CoOperativePANCardCorrectionApplication.jsx";
import DuplicateCoOperativeSocietyPAN from "./footerPages/DuplicateCoOperativeSocietyPAN.jsx";
import ReprintCoOperativeSocietyPAN from "./footerPages/ReprintCoOperativeSocietyPAN.jsx";
import ReprintLostCoOperativeSocietyPAN from "./footerPages/ReprintLostCoOperativeSocietyPAN.jsx";
import PANApplicationHousingSociety from "./footerPages/PANApplicationHousingSociety.jsx";
import HousingSocietyPANCardCorrection from "./footerPages/HousingSocietyPANCardCorrection.jsx";
import PANApplicationWelfareAssociation from "./footerPages/PANApplicationWelfareAssociation.jsx";
import WelfareAssociationPANCardCorrection from "./footerPages/WelfareAssociationPANCardCorrection.jsx";
import PANApplicationWelfareSociety from "./footerPages/PANApplicationWelfareSociety.jsx";
import WelfareSocietyPANCorrection from "./footerPages/WelfareSocietyPANCorrection.jsx";
import ReprintLostWelfareSocietyPAN from "./footerPages/ReprintLostWelfareSocietyPAN.jsx";
import PANApplicationForSanstha from "./footerPages/PANApplicationForSanstha.jsx";
import PANApplicationForSamiti from "./footerPages/PANApplicationForSamiti.jsx";
import PanApplicationApartmentAssociation from "./footerPages/PanApplicationApartmentAssociation.jsx";
import AssociationPANCardCorrection from "./footerPages/AssociationPANCardCorrection.jsx";
import ReprintAssociationPANCard from "./footerPages/ReprintAssociationPANCard.jsx";
import ReprintLostAssociationPAN from "./footerPages/ReprintLostAssociationPAN.jsx";
import HUFPANCardCorrection from "./footerPages/HUFPANCardCorrection.jsx";
import DuplicateHUFPANCard from "./footerPages/DuplicateHUFPANCard.jsx";
import ReprintLostHUFPANCard from "./footerPages/ReprintLostHUFPANCard.jsx";
import NewSchoolPANCard from "./footerPages/NewSchoolPANCard.jsx";
import PANApplicationforSangam from "./footerPages/PANApplicationforSangam.jsx";
import PANApplicationforEducationalSociety from "./footerPages/PANApplicationforEducationalSociety.jsx";
import PANApplicationforMemorialSociety from "./footerPages/PANApplicationforMemorialSociety.jsx";
import PANApplicationforMandali from "./footerPages/PANApplicationforMandali.jsx";
import PANApplicationSHGSelfHelpGroup from "./footerPages/PANApplicationSHGSelfHelpGroup.jsx";
import PANApplicationJointVenture from "./footerPages/PANApplicationJointVenture.jsx";
import PANApplicationNGO from "./footerPages/PANApplicationNGO.jsx";
import ApplyPanCard from "./footerPages/ApplyPanCardOnlineIndia.jsx";
import SpeedPostTracking from "./footerPages/SpeedPostTracking.jsx";






// Import other components as needed

const App = () => {
  const isMainComponent = true; // Example condition
  return (
    <>
      <Router>
        <div>
          <Header />
     
          <ScrollToTop /> {/* Add ScrollToTop here */}
          <Routes>
            
            <Route path="/" element={<DeshBoard />} />
            <Route path="apply-new-pan" element={<PanCardApplicationForm showTitle={isMainComponent}/>} />
            <Route path="/pan-correction" element={<PanCorrectionForm showTitle={isMainComponent}/>} />
            <Route path="/reprint-duplicate-pan" element={<DuplicatePanCardForm showTitle={isMainComponent}/>} />
            <Route path="/minor-to-major-pan" element={<MinorToMajorPanCardForm showTitle={isMainComponent}/>} />
            <Route path="/reprint-lost-pan" element={<ReprintLostPanCardForm showTitle={isMainComponent}/>} />
            <Route path="/reprint-damaged-pan" element={<ReprintDamagedPanCard showTitle={isMainComponent}/>} />
            <Route path="/pan-changes-marriage" element={<PanChangesAfterMarrigeForm showTitle={isMainComponent}/>} />
            <Route path="/epan-to-physical-pan" element={<EpanToPhysicalPanCArdForm showTitle={isMainComponent}/>} />
            <Route path="/instant-pan" element={<InstantPanCardForm showTitle={isMainComponent}/>} />
            <Route path="/cancel-duplicate-pan" element={<CancelDuplicatePanCard showTitle={isMainComponent}/>} />
            <Route path="/apply-minor-pan" element={<MinorPanCardApplyForm showTitle={isMainComponent}/>} />
            <Route path="/track-pan" element={<TrackPanCardStatus showTitle={isMainComponent}/>} />
            <Route path="/apply-online-new-pan-card-application-form/hindu-undivided-family-HUF" element={<HUFForm showTitle={isMainComponent}/>} />
            <Route path="/apply-online-new-pan-card-application-form/partnership-firm" element={<PartnershipFirmForm showTitle={isMainComponent}/>} />
            <Route path="/apply-online-new-pan-card-application-form/limited-liability-partnership-LLP" element={<LLPPanCardForm showTitle={isMainComponent}/>} />
            <Route path="/apply-online-new-pan-card-application-form/trust" element={<TrustPanCardApplication showTitle={isMainComponent}/>} />
            <Route path="/apply-online-new-pan-card-application-form/aop/co-operative-society" element={<CoOperativeSocietyForm showTitle={isMainComponent}/>} />
            <Route path="/apply-online-new-pan-card-application-form/aop/association" element={<AssociationNewPanForm showTitle={isMainComponent}/>} />
            <Route path="/contect-us-page" element={<ContectUsPage showTitle={isMainComponent}/>} />
            <Route path="/child-pan-card-application" element={<ChildPanCardForm showTitle={isMainComponent}/>} />
            <Route path="/pan-card-without-aadhaar-application" element={<ApplyPanWithoutAadhaar showTitle={isMainComponent}/>} />
            <Route path="/pan-card-for-student" element={<PanCardForStudent showTitle={isMainComponent}/>} />
            <Route path="/change-signature-pan" element={<ChangeSignaturePanForm showTitle={isMainComponent}/>} />
            <Route path="/change-DOB-pan-card" element={<ChangeDOBPanCard showTitle={isMainComponent}/>} />
            <Route path="/online-pan-card-amendment" element={<OnlinePANCardAmendment showTitle={isMainComponent}/>} />
            <Route path="/reprint-pan-card-application" element={<ReprintPanCardApplication showTitle={isMainComponent}/>} />
            <Route path="/surrender-duplicate-pan-application" element={<SurrenderDuplicatePanCard showTitle={isMainComponent}/>} />
            <Route path="/pan-aadhaar-link-status" element={<PanAadhaarLinkStatus showTitle={isMainComponent}/>} />
            <Route path="/physical-pan-card-application" element={<PhysicalPanCardApplication showTitle={isMainComponent}/>} />
            <Route path="/e-pan-to-normal-pancard-application" element={<EPanToNormalPan showTitle={isMainComponent}/>} />
            <Route path="/upgrade-smart-pan-with-qr-code-application" element={<UpgradeSmartPanWithQRCode showTitle={isMainComponent}/>} />
            <Route path="/pvc-pan-card-application-form" element={<PVCPanCardApplication showTitle={isMainComponent}/>} />
            <Route path="/plastic-pan-card-application" element={<PlasticPanCardApplication showTitle={isMainComponent}/>} />
            <Route path="/pan-card-hard-copy-application" element={<PanCardHardCopyApplication showTitle={isMainComponent}/>} />
            <Route path="/age-sixteen-pan-card-application" element={<AgeSixteenPanApply showTitle={isMainComponent}/>} />
            <Route path="/trust-pan-card-correction-application" element={<TrustPanCardCorrection showTitle={isMainComponent}/>} />
            <Route path="/duplicate-trust-pan-card-application" element={<DuplicateTRUSTPANCardApplication showTitle={isMainComponent}/>} />
            <Route path="/reprint-trust-pan-card-application" element={<ReprintTRUSTPANCardApplication showTitle={isMainComponent}/>} />
            <Route path="/appliy-for-business-pan-card-application" element={<ApplyforBusinessPANCard showTitle={isMainComponent}/>} />
            <Route path="/partnership-firm-pan-card-correction-application" element={<PartnershipFirmPanCorrection showTitle={isMainComponent}/>} />
            <Route path="/duplicate-partnership-firm-pan-card-application" element={<DuplicatePartnersipFirmPANCardApplication showTitle={isMainComponent}/>} />
            <Route path="/reprint-damage-partnership-firm-pan-card-application" element={<ReprintDamagedPartnershipFirmPAN showTitle={isMainComponent}/>} />
            <Route path="/llp-pan-card-correction-application" element={<LLPPANCardCorrectionApplication showTitle={isMainComponent}/>} />
            <Route path="/duplicate-llp-pan-card-application" element={<DuplicateLLPPANCardApplication showTitle={isMainComponent}/>} />
            <Route path="/reprint-llp-pan-card-application" element={<ReprintLLPPANCardApplication showTitle={isMainComponent}/>} />
            <Route path="/co-operative-pan-card-correction-application" element={<CoOperativePANCardCorrectionApplication showTitle={isMainComponent}/>} />
            <Route path="/duplicate-cooperative-pan-card-application" element={<DuplicateCoOperativeSocietyPAN showTitle={isMainComponent}/>} />
            <Route path="/reprint-Co-Operative-pan-card-application" element={<ReprintCoOperativeSocietyPAN showTitle={isMainComponent}/>} />
            <Route path="/reprint-lost-Co-Operative-pan-card-application" element={<ReprintLostCoOperativeSocietyPAN showTitle={isMainComponent}/>} />
            <Route path="/new-pan-application-housing-society" element={<PANApplicationHousingSociety showTitle={isMainComponent}/>} />
            <Route path="/new-pan-correction-housing-society" element={<HousingSocietyPANCardCorrection showTitle={isMainComponent}/>} />
            <Route path="/new-pan-application-Welfare-association" element={<PANApplicationWelfareAssociation showTitle={isMainComponent}/>} />
            <Route path="/new-pan-correction-welfare-association" element={<WelfareAssociationPANCardCorrection showTitle={isMainComponent}/>} />
            <Route path="/new-pan-application-Welfare-society" element={<PANApplicationWelfareSociety showTitle={isMainComponent}/>} />
            <Route path="/new-pan-correction-welfare-society" element={<WelfareSocietyPANCorrection showTitle={isMainComponent}/>} />
            <Route path="/reprint-lost-Welfare-Society-pan-card-application" element={<ReprintLostWelfareSocietyPAN showTitle={isMainComponent}/>} />
            <Route path="/new-pan-application-sanstha" element={<PANApplicationForSanstha showTitle={isMainComponent}/>} />
            <Route path="/new-pan-application-Samiti" element={<PANApplicationForSamiti showTitle={isMainComponent}/>} />
            <Route path="/new-pan-application-apartment-association" element={<PanApplicationApartmentAssociation showTitle={isMainComponent}/>} />
            <Route path="/new-pan-correction-association" element={<AssociationPANCardCorrection showTitle={isMainComponent}/>} />
            <Route path="/reprint-association-pan-card-application" element={<ReprintAssociationPANCard showTitle={isMainComponent}/>} />
            <Route path="/reprint-lost-association-pan-card-application" element={<ReprintLostAssociationPAN showTitle={isMainComponent}/>} />
            <Route path="/HUF-PAN-Card-Correction-Application" element={<HUFPANCardCorrection showTitle={isMainComponent}/>} />
            <Route path="/duplicate-huf-pan-card-application" element={<DuplicateHUFPANCard showTitle={isMainComponent}/>} />
            <Route path="/reprint-lost-huf-pan-card" element={<ReprintLostHUFPANCard showTitle={isMainComponent}/>} />
            <Route path="/new-school-pan-card-application" element={<NewSchoolPANCard showTitle={isMainComponent}/>} />
            <Route path="/new-sangam-pan-card-application" element={<PANApplicationforSangam showTitle={isMainComponent}/>} />
            <Route path="/new-educational-society-pan-card-application" element={<PANApplicationforEducationalSociety showTitle={isMainComponent}/>} />
            <Route path="/new-memorial-society-pan-card-application" element={<PANApplicationforMemorialSociety showTitle={isMainComponent}/>} />
            <Route path="/new-mandali-pan-card-application" element={<PANApplicationforMandali showTitle={isMainComponent}/>} />
            <Route path="/new-shg-self-help-group-pan-card-application" element={<PANApplicationSHGSelfHelpGroup showTitle={isMainComponent}/>} />
            <Route path="/new-joint-venture-pan-card-application" element={<PANApplicationJointVenture showTitle={isMainComponent}/>} />
            <Route path="/new-ngo-pan-card-application" element={<PANApplicationNGO showTitle={isMainComponent}/>} />
            <Route path="/all-india-pan-card-apply-application" element={<ApplyPanCard showTitle={isMainComponent}/>} />
            <Route path="/pan-card-speed-post-tracking" element={<SpeedPostTracking showTitle={isMainComponent}/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
