import '../LatestContent/LatestContent.css';
import { Link } from 'react-router';

const LatestContent = () => {
    return <div className="latest-content">
        <h1>Тазе Вести</h1>
        <Link to='/вести/вест-1'>
        <img src="./carousel-images/tim-eko-1-girov-dramikjanin.jpg" alt="tim-eko" />
        <p>12 ноември 2020</p>
        <h3>Тим Еко 1 - Се збогуваме со јагленот!</h3>
        </Link>
        <Link to='/вести/вест-1'>
        <img src="./carousel-images/tim-eko-1-girov-dramikjanin.jpg" alt="tim-eko" />
        <p>12 ноември 2020</p>
        <h3>Тим Еко 1 - Се збогуваме со јагленот!</h3>
        </Link>
        <Link to='/вести/вест-1'>
        <img src="./carousel-images/tim-eko-1-girov-dramikjanin.jpg" alt="tim-eko" />
        <p>12 ноември 2020</p>
        <h3>Тим Еко 1 - Се збогуваме со јагленот!</h3>
        </Link>
    </div>
}

export default LatestContent;

//ne otvora fajlovi od phosothop (psd), prefrli gi nekako vo sliki