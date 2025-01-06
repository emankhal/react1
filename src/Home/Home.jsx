import style from './home.module.css';
import logo from '../assets/avataaars.svg';
export default function Home() {
  return (
    <div>
      <div className={`home  flex-column vh-100 d-flex justify-content-center align-items-center text-white ${style.home}`}>
        <div className={`img  ${style.img}`}>
          <img src={logo} alt="Logo" />
        </div>
        <h2>start Framework</h2>
        <div className={`icone  ${style.icone}`}>
          <i className="fa-solid fa-star "></i>
        </div>
        <p className='pb-5'>Graphic Artist - Web Designer - Illustrator</p>



      </div>
    </div >
  )
}
