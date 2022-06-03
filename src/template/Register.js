import { Link } from "react-router-dom";

function Register() {

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <hr/>
            <h2>Register</h2>
            <form name="form">
                <div className='form-group'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName"  />
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" />

                </div>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" />

                </div>
                <div className='form-group' >
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>

                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
}

export default Register;