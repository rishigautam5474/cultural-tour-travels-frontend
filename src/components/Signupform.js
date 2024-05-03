import "./SignupformStyle.css";

const Signupform = (props) => {
    return(
        <main className="form-signin">
        <div className="container sign">
            <div className="cen">  
                <h1 className="mb-3 fw-bold">Sign In</h1>
            </div>
            <form className="row">
                <div className="row">
                    <div className="col-md-6">
                        <label for="inputFname" className="form-label">Name :</label>
                        <input type="text" className="form-control" placeholder="Name" aria-label="First name"/>
                      </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email :</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="name@example.com"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password :</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputRePassword4" className="form-label">Re-Password :</label>
                        <input type="Re-password" className="form-control" id="inputRePassword4" placeholder="Re-Password"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="inputAddress" className="form-label">Address :</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputAddress2" className="form-label">Address 2 :</label>
                        <input type="text" className="form-control" id="inputAddress2"
                        placeholder="Apartment, studio, or floor"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">City :</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="City"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State :</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujrat</option>
                            <option>Chan</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu & Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>New Delhi</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajsthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label for="inputZip" className="form-label">Pin Code :</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="Pin Code"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                            Remember Me
                        </label>
                    </div>
                </div>
                <div className="row col-md-12">
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                </div>
                <div className="mar2">
                    <a href="/" className="log">Forget Password</a>
                </div>
                    <p className="mt-3 mb-1 text-xl-center text-muted">© 2023–2024</p>
            </form>
        </div>
    </main>
    )
}

export default Signupform;