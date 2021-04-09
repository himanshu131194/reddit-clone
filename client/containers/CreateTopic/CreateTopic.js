import React from 'react';
import SuggestedTopics from './SuggestedTopics'

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
            {/* <SuggestedTopics/> */}
            </div>
        </main>
    )
}