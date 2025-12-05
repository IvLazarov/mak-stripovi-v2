import { Link } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import './Footer.css';

const Footer = () => {
    return <div className='footer'>
        <h2>Следете нѐ на</h2>
        <Link to='https://www.facebook.com/p/%D0%9C%D0%B0%D0%BA%D1%81%D1%82%D1%80%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8-100071968633537/' 
        target='blank'>
        <CiFacebook className='icon' />
        </Link>
        <Link to='https://www.instagram.com/makstripovi/'
         target='blank'>
        <CiInstagram className='icon' />
        </Link>
    </div>
}

export default Footer;