import style from './contact.module.css';

export default function Contact() {
  return (
    <div className={`contact ${style.contact}`} >
      <div className="header text-center py-4">
        <h2 className='fs-1'>conatct section</h2>
        <div className={`icone  ${style.icone}`}>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <form action="" className="position-relative w-50 m-auto">
        <div className="container">
          <div className="row my-5">
            <div className="col-12 ">
              <input className={`w-100 p-2 rounded-2 border-end-0 border-top-0 border-start-0 border-text-black-50 mb-5 ${style.input}`} type="text" name="userName" placeholder="userName" id="" />
            </div>
            <div className="col-12">
              <input className={`w-100 p-2 rounded-2 border-end-0 border-top-0 border-start-0 border-text-black-50 mb-5 ${style.input}`} type="text" name="userAge" placeholder="userAge" id="" />
            </div>
            <div className="col-12">
              <input className={`w-100 p-2 rounded-2 border-end-0 border-top-0 border-start-0 border-text-black-50 mb-5 ${style.input}`} type="text" name="userEmail" placeholder="userEmail" id="" />
            </div>
            <div className="col-12">
              <input className={`w-100 p-2 rounded-2 border-end-0 border-top-0 border-start-0 border-text-black-50 mb-5 ${style.input}`} type="text" name="userPassword" placeholder="userPassword" id="" />
            </div>
            <div className="col-12">
              <button className={`btn ${style.btn}`} type="submit">send message</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
