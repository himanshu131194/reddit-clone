import React from 'react';

export default ()=>{
    return(
        <header id="tt-header">
            <div className="container">
                <div className="row tt-row no-gutters">
                    <div className="col-auto">
                        <a className="toggle-mobile-menu" href="index.html#">
                            <svg className="tt-icon">
                                <use xlinkHref="#icon-menu_icon"></use>
                            </svg>
                        </a>
                        <div className="tt-logo">   
                            <a href="index.html"><img src="images/logo.png" alt=""/></a>
                        </div>
                        <div className="tt-desktop-menu">
                            <nav>
                                <ul>
                                    <li><a href="page-categories.html"><span>Categories</span></a></li>
                                    <li><a href="page-tabs.html"><span>Trending</span></a></li>
                                    <li><a href="page-create-topic.html"><span>New</span></a></li>
                                    <li>
                                        <a href="page-single-user.html"><span>Pages</span></a>
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="page-single-topic.html">Single Topic</a></li>
                                            <li><a href="page-create-topic.html">Create Topic</a></li>
                                            <li><a href="page-single-user.html">Single User Activity</a></li>
                                            <li><a href="page-single_threads.html">Single User Threads</a></li>
                                            <li><a href="page-single_replies.html">Single User Replies</a></li>
                                            <li><a href="page-single_followers.html">Single User Followers</a></li>
                                            <li><a href="page-single_categories.html">Single User Categories</a></li>
                                            <li><a href="page-single_settings.html">Single User Settings</a></li>
                                            <li><a href="page-signup.html">Sign up</a></li>
                                            <li><a href="page-login.html">Log in</a></li>
                                            <li><a href="page-categories.html">Categories</a></li>
                                            <li><a href="page-categories-single.html">Single Category</a></li>
                                            <li><a href="page-tabs.html">About</a></li>
                                            <li><a href="page-tabs_guidelines.html">Guidelines</a></li>
                                            <li><a href="_demo_modal-advancedSearch.html">Advanced Search</a></li>
                                            <li><a href="error404.html">Error 404</a></li>
                                            <li><a href="_demo_modal-age-confirmation.html">Age Verification</a></li>
                                            <li><a href="_demo_modal-level-up.html">Level up Notification</a></li>
                                            <li><a href="messages-page.html">Message</a></li>
                                            <li><a href="messages-compose.html">Message Compose</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="tt-search">
                            <button className="tt-search-toggle" data-toggle="modal" data-target="#modalAdvancedSearch">
                                <svg className="tt-icon">
                                    <use xlinkHref="#icon-search"></use>
                                </svg>
                            </button>
                            <form className="search-wrapper">
                                <div className="search-form">
                                    <input type="text" className="tt-search__input" placeholder="Search"/>
                                    <button className="tt-search__btn" type="submit">
                                    <svg className="tt-icon">
                                        <use xlinkHref="#icon-search"></use>
                                        </svg>
                                    </button>
                                    <button className="tt-search__close">
                                    <svg className="tt-icon">
                                        <use xlinkHref="#cancel"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="search-results">
                                    <div className="tt-search-scroll">
                                        <ul>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 className="tt-title">Rdr2 secret easter eggs</h6>
                                                    <div className="tt-description">
                                                    Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                            <a href="page-single-topic.html">
                                                    <h6 className="tt-title">Top 10 easter eggs in Red Dead Rede..</h6>
                                                    <div className="tt-description">
                                                        You can find these easter eggs in Red Dea..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                            <a href="page-single-topic.html">
                                                    <h6 className="tt-title">Red Dead Redemtion: Arthur Morgan..</h6>
                                                    <div className="tt-description">
                                                        Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="page-single-topic.html">
                                                    <h6 className="tt-title">Rdr2 secret easter eggs</h6>
                                                    <div className="tt-description">
                                                    Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                            <a href="page-single-topic.html">
                                                    <h6 className="tt-title">Top 10 easter eggs in Red Dead Rede..</h6>
                                                    <div className="tt-description">
                                                        You can find these easter eggs in Red Dea..
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                            <a href="page-single-topic.html">
                                                    <h6 className="tt-title">Red Dead Redemtion: Arthur Morgan..</h6>
                                                    <div className="tt-description">
                                                        Here’s what I’ve found in Red Dead Redem..
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="button" className="tt-view-all" data-toggle="modal" data-target="#modalAdvancedSearch">Advanced Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-auto ml-auto">
                        <div className="tt-account-btn">
                            <a href="page-login.html" className="btn btn-primary">Log in</a>
                            <a href="page-signup.html" className="btn btn-secondary">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}