import { Link } from 'react-router-dom';

const UserLogin = () => {
    return (
        <div className="userLogin">
            <section className="py-5">
                <div className="container-small">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">Job Seeker Login</h2>
                        </div>
                        <div className="card-body">
                            <div id="errorMessage" className="alert alert-error hidden"></div>

                            <form id="loginForm">
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
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-input"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block btn-large">
                                    Login
                                </button>
                            </form>

                            <div className="divider"></div>

                            <p className="text-center text-muted">
                                Don't have an account?
                                <Link to="/user/signup"> Sign up here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserLogin;
