import React from 'react'
import Cards from './card';

function Landing() {

  const myStyle={
    backgroundColor: "#ececec",
    height: "auto"
};

const myForm={
  backgroundColor: "white",
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  borderradius: "4px",
  boxsizing: "border-box",
  resize: "vertical",
};

  return (
    <div style={myStyle}>
      <br />
        <div className="container-xl">
        <p className="text-xl-center">100% wide until large</p>
        <div className="row">
          <div className="col-sm-9">
          <img class="responsive"src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png" style={{height: "auto",width: "100%"}} alt="..."/>
          </div>
          <div className="col">
          <form className="shadow p-3 mb-5 rounded form-label"style={myForm} >
          <span className="h3">Newsletter</span>
          <hr />

            <div className="mb-3">
              <label example="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label example="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary flex">Submit</button>
          </form>
            </div>
          </div>
        </div>
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
        <br />

    </div>
  )
}

export default Landing
