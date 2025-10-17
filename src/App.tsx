import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import CoachingDetails from "./components/CoachingDetails";
import Values from "./components/Values";
import WhoWeAre from "./components/WhoWeAre";
import AboutAssociation from "./components/AboutAssociation";
import MemberSignup from "./components/MemberSignup";
import Volunteer from "./components/Volunteer";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Mission />
        <CoachingDetails />
        <Values />
        <WhoWeAre />
        <AboutAssociation />
        <MemberSignup />
        <Volunteer />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
