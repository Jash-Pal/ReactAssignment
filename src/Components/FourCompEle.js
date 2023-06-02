import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";

export const FourCompEle = () => {

    const [name, setname] = useState('');
    const [uname, setuname] = useState('');
    const [city, setfcity] = useState('');
    const [state, setstate] = useState('');
    const [zip, setzip] = useState('');


    // Function to store form data 
    const storeData = () => {

        let c = JSON.parse(localStorage.getItem('c') || "[]")
        
        let data = {
            name:name,
            uname:uname,
            city:city,
            state:state,
            zip:zip
        }
        c.push(data)
        localStorage.setItem("Puchase_Data",JSON.stringify(c));

        alert("Your data is stored in Localstorage");
        // <Link to='/home'></Link>
    };

    return (
        <>
            <div className='container justify-content-center mt-5'>
                    <h1> Purchase </h1>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label className="form-label"> Name</label>
                        <input type="text" className="form-control" id="validationCustom01" required value={name} onChange={(e)=> setname(e.target.value)}/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={uname} onChange={(e)=> setuname(e.target.value)}/>
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" id="validationCustom03" required value={city} onChange={(e)=> setfcity(e.target.value)}/>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" id="validationCustom03" required value={state} onChange={(e)=> setstate(e.target.value)} />
                            <div className="invalid-feedback">
                                Please select a valid State.
                            </div>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationCustom05" value={zip} onChange={(e)=> setzip(e.target.value)} />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* <Button to='' className="btn btn-primary" type="submit" onClick={storeData} required> Submit </Button> */}
                        <button class="btn btn-primary" type="submit" onClick={storeData}> Purchase </button>
                    </div>
                </form>
            </div>
        </>
    )
}
