import { features } from "../constants/index";
import ContactButton from "../components/ContactButton";


const FeatureSection = () => {
  return (
    <section 
      id="featuresection" 
      className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-10 lg:px-20">
        <div className="text-center">
          <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-2xl font-medium px-2 py-1 uppercase">
            Servicios para
          </span>
          <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Personas Naturales{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
              y PYMES
            </span>
          </h2>
          
                <ContactButton />

        </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 px-2 justify-content-space-around">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex md:px-3">

              <div>
                <div className="flex h-10 w-full  text-blue-500 justify-center items-center">
                  {feature.icon}
                </div>
                <h5 className="mt-1 mb-6 text-lg lg:text-xl text-center">{feature.text}</h5>
                <p className="text-sm lg:text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;