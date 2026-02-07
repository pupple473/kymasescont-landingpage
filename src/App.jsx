import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Aboutus />
      <Contactus />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
