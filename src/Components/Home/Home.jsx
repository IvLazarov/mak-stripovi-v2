import NavBar from "../NavBar/NavBar"
import Carousel from "../Carousel/Carousel"
import LatestContent from "../LatestContent/LatestContent"
import Comics from "../Comics/Comics";
import Footer from "../Footer/Footer";
import '../../App.css';

const Home = () => {
    return <div className="container">
        <NavBar />
        <Carousel />
        <LatestContent  />
        <Comics />
        <Footer />
    </div>
}

export default Home;