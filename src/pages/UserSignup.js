import { Link } from 'react-router-dom';

const UserSignup = () => {
    return ( 
        <div className="userSignup">
            <section className="py-5">
                <div className="container-small">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">Create Job Seeker Account</h2>
                        </div>
                        <div className="card-body">
                            <div id="errorMessage" className="alert alert-error hidden"></div>
                            <div id="successMessage" className="alert alert-success hidden"></div>

                            <form id="signupForm">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="form-input"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        className="form-input"
                                        placeholder="+1 234 567 8900"
                                        required
                                    />
                                    <span className="form-help">Used for interview notifications</span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-input"
                                        placeholder="At least 8 characters"
                                        minLength="8"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-input"
                                        placeholder="Re-enter password"
                                        minLength="8"
                                        required
                                    />
                                    <span id="passwordError" className="form-error hidden">Passwords do not match</span>
                                </div>

                                <div className="form-group">
                                    <div className="form-checkbox-group">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            name="terms"
                                            className="form-checkbox"
                                            required
                                        />
                                        <label htmlFor="terms" className="form-label" style={{marginBottom: 0}}>
                                            I agree to the <Link to="/privacy" target="_blank">Terms and Privacy Policy</Link>
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block btn-large">
                                    Create Account
                                </button>
                            </form>

                            <div className="divider"></div>

                            <p className="text-center text-muted">
                                Already have an account?
                                <Link to="/user/login">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default UserSignup;
