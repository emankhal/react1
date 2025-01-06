
import style from './About.module.css';;
export default function About() {
  return (
    <div>
      <div className={`about text-white ${style.about} flex-column d-flex justify-content-center align-items-center`}>
        <div className="content text-center my-4">
        <h2 className='fs-1'>About Component</h2>
        <div className={`icone  ${style.icone} `}>
          <i className="fa-solid fa-star "></i>
        </div>
        </div>
        <div className="row w-100 p-4">
          <div className="col-md-6 px-5 mb-3">
            <div className="box">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          <div className="col-md-6 px-5">
            <div className="box">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
