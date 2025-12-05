import { Link } from "react-router";
import './Comics.css';

const Comics = () => {
    return <div className="comics-homepage">
        <h1>Ѕирни си стрип</h1>
        <Link to='https://ekosvest.com.mk/wp-content/uploads/2021/03/Tim_EKO_strip_web.pdf' target="blank">
        <img src="./carousel-images/Eko_01_korica.jpg" alt="tim-eko-1" />
        <h3>Тим Еко 1</h3>
        <h4>Сценарио: Давор Драмиќанин</h4>
        <h4>Цртеж: Здравко Гиров</h4>
        </Link >
        <Link to='https://ekosvest.com.mk/wp-content/uploads/2021/03/Tim_EKO_strip_web.pdf' target="blank">
        <img src="./carousel-images/Eko_01_korica.jpg" alt="tim-eko-1" />
        <h3>Тим Еко 1</h3>
        <h4>Сценарио: Давор Драмиќанин</h4>
        <h4>Цртеж: Здравко Гиров</h4>
        </Link>
        <Link to='https://ekosvest.com.mk/wp-content/uploads/2021/03/Tim_EKO_strip_web.pdf' target="blank">
        <img src="./carousel-images/Eko_01_korica.jpg" alt="tim-eko-1" />
        <h3>Тим Еко 1</h3>
        <h4>Сценарио: Давор Драмиќанин</h4>
        <h4>Цртеж: Здравко Гиров</h4>
        </Link>
    </div>
}

export default Comics;