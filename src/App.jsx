import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import VideoCarousel from "./components/VideoCarousel";
import FeatureSection from "./components/FeatureSection";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <VideoCarousel/>
      <FeatureSection/>
      <Aboutus />
      <Contactus />
      <Testimonials />
      <Footer />

      <FloatingWhatsapp />
    </div>
  )
}

export default App
