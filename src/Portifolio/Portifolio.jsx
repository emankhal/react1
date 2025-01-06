import style from './portifolo.module.css'
import '../App.css'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'
export default function Portifolio() {
  const displayImg = (e) => {
    let fullImg = document.querySelector('.fullImg');
    let curruntImg = e.currentTarget.querySelector('img').src;
    fullImg.querySelector('img').src = curruntImg
    fullImg.classList.add('d-flex');
    fullImg.classList.remove('d-none');

  };
  const closeImg = (e) => {
    let fullImg = document.querySelector('.fullImg');
    if (e.currentTarget == e.target) {
      fullImg.classList.add('d-none');
      fullImg.classList.remove('d-flex');

  }
  }


  return (
    <div className={`${style.portfolio} position-relative`}>
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-4 col-md-6 col-12 mb-5" onClick={displayImg}>
            <div className="img position-relative ">
              <div className={`overlay ${style.overlay} `}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img1} className='rounded-3' alt="Portfolio 1" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img2} className='rounded-3' alt="Portfolio 2" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img3} className='rounded-3' alt="Portfolio 3" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img1} className='rounded-3' alt="Portfolio 1" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img2} className='rounded-3' alt="Portfolio 2" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img3} className='rounded-3' alt="Portfolio 3" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img1} className='rounded-3' alt="Portfolio 1" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img2} className='rounded-3' alt="Portfolio 2" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5 " onClick={displayImg}>
            <div className="img position-relative">
              <div className={`overlay ${style.overlay}`}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img3} className='rounded-3' alt="Portfolio 3" />
            </div>
          </div>
        </div>
      </div>
      <div className={`fullImg d-none position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center ${style.fullImg}`} onClick={closeImg} >
        <div className={`img ${style.img}`}>
          <img src={img1} alt="" className='w-75' />
        </div>
      </div>
    </div>
  )
}
