
import React from 'react'
import './App.css'
function Card(props) {
  return (

    // <div className="card">
    //     <img className="imgSize"
    //         src={props.imgsrc}
    //         alt="Card demos"
    //         width="10%"
    //         height="250"
    //     />
    //     <div className="card-body">
    //         <h4 className="card-title">{props.title}</h4>
    //         <p className="card-text">{props.sname}</p>
    //         <a href={props.link} className="btn btn-primary stretched-link">
    //             <button>Watch Now</button>
    //         </a>
    //     </div>
    //     <hr /><br />
    // </div>
    
    <div className="col-md-4">
      <div className="card">
      <img src={props.imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.age}</li>
        <li className="list-group-item">{props.addres}</li>
        <li className="list-group-item">{props.city}</li>
        <li className="list-group-item">{props.pin}</li>
        <li className="list-group-item">{props.mobile}</li>
        <li className="list-group-item">{props.school}</li>
        <li className="list-group-item">{props.edu}</li>
        <li className="list-group-item">{props.livesin}</li>
      </ul>
      <div className="card-body">
        <a href="/" className="card-link">{props.contactus}</a>
        <a href="/" className="card-link">{props.email}</a>
      </div>
      </div>
    </div>
    
  );
}

export default Card;