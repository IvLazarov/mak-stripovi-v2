import { Link } from 'react-router';
import './DummyArticle.css';

const DummyArticle = () => {
    return <div className='article-container'>
        <h1>Тим Еко 1 - Се збогуваме со јагленот!</h1>
        <div>
        <p>
        Што се случува кога земјата, ветрот и сонцето се борат против јагленот?<br /><br/>
        Виора и Солар, под водство на Геомен, се судруваат со повалкан играч од јагленот - Суперјагленот!<br/><br/>
        Дали нашите херои ќе успеат да го совладаат непријателот и да ја спасат нашата драга мајка природа
        или компанијата Смог ќе продолжи да ги труе Битолчани?<br/><br/>
        Кликнете на сликата оддесно и дознајте сами!
        </p>
        <Link to='https://ekosvest.com.mk/wp-content/uploads/2021/03/Tim_EKO_strip_web.pdf' 
        target='blank'
        >
        <img src="../tim-eko-1-girov-dramikjanin.jpg" alt="cover" />
        </Link>
        </div>
        <div className="nav-div">
            <Link to='/вести'>
            Читни нешто друго
            </Link>
            <Link to='/'>
            Прибери се дома
            </Link>
        </div>
    </div>
}

export default DummyArticle;