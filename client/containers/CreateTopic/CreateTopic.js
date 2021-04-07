import React from 'react';

export default ()=>{
    return(
        <main id="tt-pageContent">
            <div className="container">
                <div className="tt-wrapper-inner">
                    <h1 className="tt-title-border">
                        Create New Topic
                    </h1>
                    <form className="form-default form-create-topic">
                        <div className="form-group">
                            <label for="inputTopicTitle">Topic Title</label>
                            <div className="tt-value-wrapper">
                                <input type="text" name="name" className="form-control" id="inputTopicTitle" placeholder="Subject of your topic"/>
                                <span className="tt-value-input">99</span>
                            </div>
                            <div className="tt-note">Describe your topic well, while keeping the subject as short as possible.</div>
                        </div>
                        <div className="form-group">
                            <label>Topic Type</label>
                            <div className="tt-js-active-btn tt-wrapper-btnicon">
                                <div className="row tt-w410-col-02">
                                    <div className="col-4 col-lg-3 col-xl-2">
                                        <a href="page-create-topic.html#" className="tt-button-icon">
                                            <span className="tt-icon">
                                                <svg>
                                                    <use xlinkHref="#icon-discussion"></use>
                                                </svg>
                                            </span>
                                            <span className="tt-text">Discussion</span>
                                        </a>
                                    </div>
                                    <div className="col-4 col-lg-3 col-xl-2">
                                        <a href="page-create-topic.html#" className="tt-button-icon">
                                            <span className="tt-icon">
                                                <svg>
                                                    <use xlinkHref="#Question"></use>
                                                </svg>
                                            </span>
                                            <span className="tt-text">Question</span>
                                        </a>
                                    </div>
                                    <div className="col-4 col-lg-3 col-xl-2">
                                        <a href="page-create-topic.html#" className="tt-button-icon">
                                            <span className="tt-icon">
                                                <svg>
                                                    <use xlinkHref="#Poll"></use>
                                                </svg>
                                            </span>
                                            <span className="tt-text">Poll</span>
                                        </a>
                                    </div>
                                    <div className="col-4 col-lg-3 col-xl-2">
                                        <a href="page-create-topic.html#" className="tt-button-icon">
                                            <span className="tt-icon">
                                                <svg>
                                                    <use xlinkHref="#icon-gallery"></use>
                                                </svg>
                                            </span>
                                            <span className="tt-text">Gallery</span>
                                        </a>
                                    </div>
                                    <div className="col-4 col-lg-3 col-xl-2">
                                        <a href="page-create-topic.html#" className="tt-button-icon">
                                            <span className="tt-icon">
                                                <svg>
                                                    <use xlinkHref="#Video"></use>
                                                </svg>
                                            </span>
                                            <span className="tt-text">Video</span>
                                        </a>
                                    </div>
                                    <div className="col-4 col-lg-3 col-xl-2">
                                        <a href="page-create-topic.html#" className="tt-button-icon">
                                            <span className="tt-icon">
                                                <svg>
                                                    <use xlinkHref="#Others"></use>
                                                </svg>
                                            </span>
                                            <span className="tt-text">Other</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-editor">
                            <h6 className="pt-title">Topic Body</h6>
                            <div className="pt-row">
                                <div className="col-left">
                                    <ul className="pt-edit-btn">
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-quote"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-bold"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-italic"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-share_topic"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-blockquote"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-performatted"></use>
                                            </svg>
                                        </button></li>
                                        <li className="hr"></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-upload_files"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-bullet_list"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-heading"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-horizontal_line"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-emoticon"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-settings"></use>
                                            </svg>
                                        </button></li>
                                        <li><button type="button" className="btn-icon">
                                            <svg className="tt-icon">
                                            <use xlinkHref="#icon-color_picker"></use>
                                            </svg>
                                        </button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control" rows="5" placeholder="Lets get started"></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="inputTopicTitle">Category</label>
                                        <select className="form-control">
                                            <option value="Select">Select</option>
                                            <option value="Value 01">Value 01</option>
                                            <option value="Value 02">Value 02</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label for="inputTopicTags">Tags</label>
                                        <input type="text" name="name" className="form-control" id="inputTopicTags" placeholder="Use comma to separate tags" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto ml-md-auto">
                                    <a href="page-create-topic.html#" className="btn btn-secondary btn-width-lg">Create Post</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tt-topic-list tt-offset-top-30">
                    <div className="tt-list-search">
                        <div className="tt-title">Suggested Topics</div>
                        <div className="tt-search">
                            <form className="search-wrapper">
                                <div className="search-form">
                                    <input type="text" className="tt-search__input" placeholder="Search for topics"/>
                                    <button className="tt-search__btn" type="submit">
                                    <svg className="tt-icon">
                                        <use xlinkHref="#icon-search"></use>
                                        </svg>
                                    </button>
                                    <button className="tt-search__close">
                                    <svg className="tt-icon">
                                        <use xlinkHref="#icon-cancel"></use>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tt-list-header tt-border-bottom">
                        <div className="tt-col-topic">Topic</div>
                        <div className="tt-col-category">Category</div>
                        <div className="tt-col-value hide-mobile">Likes</div>
                        <div className="tt-col-value hide-mobile">Replies</div>
                        <div className="tt-col-value hide-mobile">Views</div>
                        <div className="tt-col-value">Activity</div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-col-avatar">
                            <svg className="tt-icon">
                            <use xlinkHref="#icon-ava-n"></use>
                            </svg>
                        </div>
                        <div className="tt-col-description">
                            <h6 className="tt-title"><a href="page-create-topic.html#">
                                Does Envato act against the authors of Envato markets?
                            </a></h6>
                            <div className="row align-items-center no-gutters hide-desktope">
                                <div className="col-auto">
                                    <ul className="tt-list-badge">
                                        <li className="show-mobile"><a href="page-create-topic.html#"><span className="tt-color05 tt-badge">music</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-auto ml-auto show-mobile">
                                <div className="tt-value">1d</div>
                                </div>
                            </div>
                        </div>
                        <div className="tt-col-category"><span className="tt-color05 tt-badge">music</span></div>
                        <div className="tt-col-value hide-mobile">358</div>
                        <div className="tt-col-value tt-color-select hide-mobile">68</div>
                        <div className="tt-col-value hide-mobile">8.3k</div>
                        <div className="tt-col-value hide-mobile">1d</div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-col-avatar">
                        <svg className="tt-icon">
                            <use xlinkHref="#icon-ava-h"></use>
                            </svg>
                        </div>
                        <div className="tt-col-description">
                            <h6 className="tt-title"><a href="page-create-topic.html#">
                                <svg className="tt-icon">
                                <use xlinkHref="#icon-locked"></use>
                                </svg>
                                We Want to Hear From You! What Would You Like?
                            </a></h6>
                            <div className="row align-items-center no-gutters hide-desktope">
                                <div className="col-auto">
                                    <ul className="tt-list-badge">
                                        <li className="show-mobile"><a href="page-create-topic.html#"><span className="tt-color06 tt-badge">movies</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-auto ml-auto show-mobile">
                                <div className="tt-value">2d</div>
                                </div>
                            </div>
                        </div>
                        <div className="tt-col-category"><span className="tt-color06 tt-badge">movies</span></div>
                        <div className="tt-col-value hide-mobile">674</div>
                        <div className="tt-col-value tt-color-select  hide-mobile">29</div>
                        <div className="tt-col-value hide-mobile">1.3k</div>
                        <div className="tt-col-value hide-mobile">2d</div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-col-avatar">
                        <svg className="tt-icon">
                            <use xlinkHref="#icon-ava-j"></use>
                            </svg>
                        </div>
                        <div className="tt-col-description">
                            <h6 className="tt-title"><a href="page-create-topic.html#">
                            Seeking partner backend developer
                            </a></h6>
                            <div className="row align-items-center no-gutters">
                                <div className="col-auto">
                                    <ul className="tt-list-badge">
                                        <li className="show-mobile"><a href="page-create-topic.html#"><span className="tt-color03 tt-badge">exchange</span></a></li>
                                        <li><a href="page-create-topic.html#"><span className="tt-badge">themeforest</span></a></li>
                                        <li><a href="page-create-topic.html#"><span className="tt-badge">elements</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-auto ml-auto show-mobile">
                                <div className="tt-value">2d</div>
                                </div>
                            </div>
                        </div>
                        <div className="tt-col-category"><span className="tt-color13 tt-badge">movies</span></div>
                        <div className="tt-col-value hide-mobile">278</div>
                        <div className="tt-col-value tt-color-select  hide-mobile">27</div>
                        <div className="tt-col-value hide-mobile">1.4k</div>
                        <div className="tt-col-value hide-mobile">2d</div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-col-avatar">
                        <svg className="tt-icon">
                            <use xlinkHref="#icon-ava-t"></use>
                            </svg>
                        </div>
                        <div className="tt-col-description">
                            <h6 className="tt-title"><a href="page-create-topic.html#">
                                Cannot customize my intro
                            </a></h6>
                            <div className="row align-items-center no-gutters">
                                <div className="col-auto">
                                    <ul className="tt-list-badge">
                                        <li className="show-mobile"><a href="page-create-topic.html#"><span className="tt-color07 tt-badge">video games</span></a></li>
                                        <li><a href="page-create-topic.html#"><span className="tt-badge">videohive</span></a></li>
                                        <li><a href="page-create-topic.html#"><span className="tt-badge">photodune</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-auto ml-auto show-mobile">
                                <div className="tt-value">2d</div>
                                </div>
                            </div>
                        </div>
                        <div className="tt-col-category"><span className="tt-color07 tt-badge">video games</span></div>
                        <div className="tt-col-value hide-mobile">364</div>
                        <div className="tt-col-value tt-color-select  hide-mobile">36</div>
                        <div className="tt-col-value  hide-mobile">982</div>
                        <div className="tt-col-value hide-mobile">2d</div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-col-avatar">
                        <svg className="tt-icon">
                            <use xlinkHref="#icon-ava-k"></use>
                            </svg>
                        </div>
                        <div className="tt-col-description">
                            <h6 className="tt-title"><a href="page-create-topic.html#">
                                <svg className="tt-icon">
                                <use xlinkHref="#icon-verified"></use>
                                </svg>
                                Microsoft Word and Power Point
                            </a></h6>
                            <div className="row align-items-center no-gutters hide-desktope">
                                <div className="col-auto">
                                    <ul className="tt-list-badge">
                                        <li className="show-mobile"><a href="page-create-topic.html#"><span className="tt-color08 tt-badge">youtube</span></a></li>
                                    </ul>
                                </div>
                                <div className="col-auto ml-auto show-mobile">
                                <div className="tt-value">3d</div>
                                </div>
                            </div>
                        </div>
                        <div className="tt-col-category"><span className="tt-color08 tt-badge">youtube</span></div>
                        <div className="tt-col-value  hide-mobile">698</div>
                        <div className="tt-col-value tt-color-select  hide-mobile">78</div>
                        <div className="tt-col-value  hide-mobile">2.1k</div>
                        <div className="tt-col-value hide-mobile">3d</div>
                    </div>
                    <div className="tt-row-btn">
                        <button type="button" className="btn-icon js-topiclist-showmore">
                            <svg className="tt-icon">
                            <use xlinkHref="#icon-load_lore_icon"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}