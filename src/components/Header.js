import '../App.css';
import logo from '../assets/QuikieAppsLogoNew.png';
export default function Header(){
    return(
    <header className="stock-app-header">
        <img src={logo} className="logo" alt="logo" />
    </header>)
}