import { Link } from "react-router";
import BackToHome from "../BackToHome/BackToHome";
import './News.css';

const News= () => {
    return <div className="news-container">
        <h1>Вести од светот на стриповите</h1>
        <div>
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
        <Link id="bottom-link" to='/'>Прибери се дома</Link>
    </div>
}

export default News;