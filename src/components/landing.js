import React from 'react'
import Cards from './card';

function Landing() {

  const myStyle={
    backgroundColor: "#ececec",

};

const myForm={
  backgroundColor: "white",
  width: "auto",
  padding: "12px",
  border: "1px solid #ccc",
  resize: "vertical",
};

const titolo={
    color: "rgb(97, 218, 251)",
    margin: "0px",
    fontsize: "45px",
}

  return (
    <div className='container'>
      <br />
        <div className="container-xl"style={myStyle}>
        <div className='title'>
        <h1 className="text-xl-center" style={titolo} ><strong>React</strong></h1>
        <p className="text-xl-center">Una libreria JavaScript per creare interfacce utente</p>
        </div>
        <div className="row">
          <div className="col-sm-9">
          <img className="responsive"src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png" style={{width: "100%",margin:"10px",marginLeft:"-2px"}} alt="..."/>
          </div>
          <div className="col">
          <form className="shadow p-3 mb-5 rounded form-label"style={myForm} >
          <span className="h3">Newsletter</span>
          <hr />

            <div className="mb-3">
              <label example="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label example="exampleInputPassword1" className="form-label"><strong>Password</strong></label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
            <label className="form-label"><strong>Mansione:</strong></label>
            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option value="DEFAULT" >Choose...</option>
              <option >Front End</option>
              <option >Back End</option>
              <option >Full Stack</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary flex"><strong>Submit</strong></button>
          </form>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='row'>
          <div className='col'>
            <Cards />
          </div>
          <div className='col'>
            <Cards />
          </div>
          <div className='col'>
            <Cards />
          </div>
        </div>
        </div>
        <br />

    </div>
  )
}

export default Landing
