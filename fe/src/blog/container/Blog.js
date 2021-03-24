import React from "react";
import {Link} from "react-router-dom"
import "../component/Blog.css";

function Blog(props) {
  return (
    <div id="blog">
      <div id="blog_title_box">
        <img
          src={require("../../images/title_04.jpg").default}
          alt=""
        />
        <p className="font25 bold">Blog</p>
      </div>
      <div id="blog_cm">
        <div className="blog_cm">
          <nav className="blog_nav_filter">
            <div className="nav_filter_center">
              <p className="font20 bold">Classification</p>
              <ul>
                <li>
                  <Link to="/blog" className="active">All</Link>
                </li>
                <li>
                  <Link to="/blog" >Curriculum</Link>
                </li>
                <li>
                  <Link to="/blog">Center News</Link>
                </li>
                <li>
                  <Link to="/blog">Government expense support</Link>
                </li>
                <li>
                  <Link to="/blog">IT News</Link>
                </li>
                <li>
                  <Link to="/blog">Video</Link>
                </li>
                <li>
                  <Link to="/blog">Employment</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="font20 bold">Curriculum</h1>
          <div className="result-filter">
            <ul className="content_result">
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to="/blog">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/blog/thumb-2038919246_iCclLjnK_972202b3e4ab9316f81dab9ebf38574a38b2aa6c_380x200.png"
                        alt=""
                        title
                      />
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font16 bold">
                      <Link to="/blog" title="[Notice] Basic Lecture (Java Lecture/Python Lecture/Data Structure Algorithm Lecture)">
                        [Notice] Basic Lecture (Java Lecture/Python Lecture/Data
                        Structure Algorithm Lecture)
                      </Link>
                    </p>
                    <div className="info_disc font13">
                      <p className="mr_bt_10">
                        Regular special lectures for beginners Hello. Beginning
                        in 2021, a proposal for regular special lectures for
                        beginners..
                      </p>
                      <p>
                        <span>Master</span>
                        <span>
                          <i className="far fa-clock" />
                          12-15
                        </span>
                        <span>
                          <i className="far fa-eye" />
                          832
                        </span>
                      </p>
                    </div>
                    <Link to="/blog" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to="/blog">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/blog/thumb-2038919246_iCclLjnK_972202b3e4ab9316f81dab9ebf38574a38b2aa6c_380x200.png"
                        alt=""
                        title
                      />
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font16 bold">
                      <Link to="/blog" title="[Notice] Basic Lecture (Java Lecture/Python Lecture/Data Structure Algorithm Lecture)">
                        [Notice] Basic Lecture (Java Lecture/Python Lecture/Data
                        Structure Algorithm Lecture)
                      </Link>
                    </p>
                    <div className="info_disc font13">
                      <p className="mr_bt_10">
                        Regular special lectures for beginners Hello. Beginning
                        in 2021, a proposal for regular special lectures for
                        beginners..
                      </p>
                      <p>
                        <span>Master</span>
                        <span>
                          <i className="far fa-clock" />
                          12-15
                        </span>
                        <span>
                          <i className="far fa-eye" />
                          832
                        </span>
                      </p>
                    </div>
                    <Link to="/blog" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to="/blog">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/blog/thumb-2038919246_iCclLjnK_972202b3e4ab9316f81dab9ebf38574a38b2aa6c_380x200.png"
                        alt=""
                        title
                      />
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font16 bold">
                      <Link to="/blog" title="[Notice] Basic Lecture (Java Lecture/Python Lecture/Data Structure Algorithm Lecture)">
                        [Notice] Basic Lecture (Java Lecture/Python Lecture/Data
                        Structure Algorithm Lecture)
                      </Link>
                    </p>
                    <div className="info_disc font13">
                      <p className="mr_bt_10">
                        Regular special lectures for beginners Hello. Beginning
                        in 2021, a proposal for regular special lectures for
                        beginners..
                      </p>
                      <p>
                        <span>Master</span>
                        <span>
                          <i className="far fa-clock" />
                          12-15
                        </span>
                        <span>
                          <i className="far fa-eye" />
                          832
                        </span>
                      </p>
                    </div>
                    <Link to="/blog" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to="/blog">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/blog/thumb-2038919246_iCclLjnK_972202b3e4ab9316f81dab9ebf38574a38b2aa6c_380x200.png"
                        alt=""
                        title
                      />
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font16 bold">
                      <Link to="/blog" title="[Notice] Basic Lecture (Java Lecture/Python Lecture/Data Structure Algorithm Lecture)">
                        [Notice] Basic Lecture (Java Lecture/Python Lecture/Data
                        Structure Algorithm Lecture)
                      </Link>
                    </p>
                    <div className="info_disc font13">
                      <p className="mr_bt_10">
                        Regular special lectures for beginners Hello. Beginning
                        in 2021, a proposal for regular special lectures for
                        beginners..
                      </p>
                      <p>
                        <span>Master</span>
                        <span>
                          <i className="far fa-clock" />
                          12-15
                        </span>
                        <span>
                          <i className="far fa-eye" />
                          832
                        </span>
                      </p>
                    </div>
                    <Link to="/blog" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="blog_pagination">
            <Link to="/blog">«</Link>
            <Link to="/blog" className="active">
              1
            </Link>
            <Link to="/blog">2</Link>
            <Link to="/blog">3</Link>
            <Link to="/blog">»</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
