import style from './Footer.module.css';
export default function Footer() {
  return (
  <div>
      <div className={`row ${style.row}`}>
        <div className="col-md-4 col-12 mb-3">
          <div className="box">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <h5>Clark, MO 65243</h5>
          </div>
          </div>
          <div className="col-md-4 col-12  mb-3">
            <div className="box">
              <h3>AROUND THE WEB</h3>
              <div className="icons d-flex justify-content-center gap-3 mt-2 fs-5 align-items-center">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12  mb-3">
            <div className="box ">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <footer className={`text-center py-3 ${style.footer} text-white`}>
          <p>Copyright © Your Website 2021</p>
        </footer>
      </div>
      )
}
