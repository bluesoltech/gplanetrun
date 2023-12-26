import Navbar from "../components/Navbar";
import Eventf from "../components/Eventf";
import EventS from "../components/EventS";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex-col">
      <Navbar />
      <div className="w-full">
        <img className="w-full" src="../../assets/images/Event.png" />
      </div>
      <Eventf />
      <EventS />
      <Footer />
    </div>
  );
}

export default Home;
