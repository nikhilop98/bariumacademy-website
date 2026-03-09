import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyBarium from "./components/WhyBarium";
import Courses from "./components/Courses";
import StatsCounter from "./components/StatsCounter";
import Testimonials from "./components/Testimonials";
import RegistrationForm from "./components/RegistrationForm";
import CTABanner from "./components/CTABanner";
import TrustBanner from "./components/TrustBanner";
import Footer from "./components/Footer";
import TutorRegistration from "./components/TutorRegistration";
import SEO from "./components/SEO";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import WhatsNew from "./components/WhatsNew";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <SEO
                title="Expert Online Tutoring for Every Subject"
                description="Barium Academy connects students with expert tutors for personalised one-on-one online lessons. Flexible scheduling, proven results. Book a free demo today!"
                keywords="online tutoring, find a tutor, barium academy, personalised learning, one-on-one tutor, online classes India, maths tutor, science tutor"
                canonical="/"
              />
              <Header />
              <Hero />
              <TrustBanner />
              <HowItWorks />
              <WhyBarium />
              <Courses />
              <StatsCounter />
              <Testimonials />
              <RegistrationForm />
              <CTABanner />
              <Footer />
            </>
          }
        />

        {/* Registration page */}
        <Route
          path="/registration"
          element={
            <>
              <SEO
                title="Book a Free Demo Session"
                description="Book a free one-on-one demo tutoring session with Barium Academy. Choose your subject, pick a date and time, and start learning today. No commitment required."
                keywords="book a tutor, free demo session, online tutor booking, barium academy registration, trial class"
                canonical="/registration"
              />
              <Header />
              <RegistrationForm />
              <Footer />
            </>
          }
        />

        {/* Tutor registration page */}
        <Route
          path="/tutor-registration"
          element={
            <>
              <SEO
                title="Become a Tutor — Join Our Teaching Community"
                description="Are you an expert educator? Join Barium Academy as a tutor. Set your own schedule, teach students across India, and earn doing what you love. Apply now!"
                keywords="become a tutor, teach online, tutor jobs India, barium academy tutor, online teaching, apply as tutor"
                canonical="/tutor-registration"
              />
              <Header />
              <TutorRegistration />
              <Footer />
            </>
          }
        />
        {/* Blog listing page */}
        <Route path="/blog" element={<BlogList />} />

        {/* Individual blog post page */}
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* What's New page */}
        <Route path="/whats-new" element={<WhatsNew />} />
      </Routes>
    </Router>
  );
}

export default App;
