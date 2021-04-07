import React from 'react';

export default ()=>{
    return(
        <main id="tt-pageContent" className="tt-offset-none">
            <div className="container">
                <div className="tt-loginpages-wrapper">
                    <div className="tt-loginpages">
                        {/* <a href="index.html" className="tt-block-title">
                            <img src="images/logo.png" alt=""/>
                            <div className="tt-title">
                                Welcome to Forum19
                            </div>
                            <div className="tt-description">
                                Join the forum to unlock true power of community.
                            </div>
                        </a> */}
                        <form className="form-default">
                            <div className="form-group">
                                <label for="loginUserName">Username</label>
                                <input type="text" name="name" className="form-control" id="loginUserName" placeholder="azyrusmax"/>
                            </div>
                            <div className="form-group">
                                <label for="loginUserEmail">Email</label>
                                <input type="text" name="name" className="form-control" id="loginUserEmail" placeholder="Sample@sample.com"/>
                            </div>
                            <div className="form-group">
                                <label for="loginUserPassword">Password</label>
                                <input type="password" name="name" className="form-control" id="loginUserPassword" placeholder="************"/>
                            </div>
                            <div className="form-group">
                                <a href="page-signup.html#" className="btn btn-secondary btn-block">Create my account</a>
                            </div>
                            <p>Or signup with social network</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <a href="page-signup.html#" className="btn btn-color01 btn-secondary btn-block">
                                            <i>
                                                <svg className="icon">
                                                <use xlinkHref="#facebook-f-brands"></use>
                                                </svg>
                                            </i>
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <a href="page-signup.html#" className="btn btn-color02 btn-block">
                                            <i>
                                                <svg className="icon">
                                                <use xlinkHref="#twitter-brands"></use>
                                                </svg>
                                            </i>
                                            Twitter
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p>Already have an account? <a href="page-signup.html#" className="tt-underline">Login here</a></p>
                            <div className="tt-notes">
                                By signing up, signing in or continuing, I agree to
                                Forum19’s <a href="page-signup.html#" className="tt-underline">Terms of Use</a> and <a href="page-signup.html#" className="tt-underline">Privacy Policy.</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}