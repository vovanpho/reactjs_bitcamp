import React from "react";
import {Link} from "react-router-dom"
import "../component/Curriculum.css";

function Curriculum(props) {
  return (
    <div id="curriculum">
      <div id="curriculum_title_box">
        <img
          src="https://www.bitcamp.co.kr/theme/basic/img/title_02.jpg"
          alt=""
        />
        <p className="font25 bold">Curriculum</p>
      </div>
      <div id="div_cm">
        <div className="curriculum_cm">
          <nav className="curriculum_nav_filter">
            <div className="nav_filter_center">
              <p className="font20 bold">Center name</p>
              <ul>
                <li>
                  <Link to ="/curriculum" className="active">All</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Seocho Main Garden</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Gangnam Center</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Sinchon Center</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Jongno Center</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Cheonan</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Busan</Link>
                </li>
              </ul>
            </div>
            <div className="nav_filter_course">
              <p className="font20 bold">Course name</p>
              <ul>
                <li>
                  <Link to ="/curriculum" className="active">All</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Government funding process</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Incumbent Course</Link>
                </li>
                <li>
                  <Link to ="/curriculum">Basic lecture</Link>
                </li>
                <li>
                  <Link to ="/curriculum">General Course</Link>
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
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="item_box">
                  <div className="div_img">
                    <Link to ="/curriculum">
                      <img
                        src="https://www.bitcamp.co.kr/data/file/class/thumb-1794243636_9OMaLNCw_a773a28809fb7c6facaf2acc756b3c191307fb50_380x200.png"
                        alt=""
                        title
                      />
                      <p className="tag_title_center font13">
                        Seocho Main Garden
                      </p>
                    </Link>
                  </div>
                  <div className="div_info">
                    <p className="info_title font20 bold">
                      <Link to ="/curriculum" title="Software web developer training course C using digital convergence-based convergence technology">
                        Software web developer training course C using digital
                        convergence-based convergence technology
                      </Link>
                    </p>
                    <div>
                      <p>
                        <span>Start date</span> | <span>2021-01-01</span>
                      </p>
                      <p>
                        <span>Training period </span> |
                        <span>2021-02-16 ~ 2021-07-12</span>
                      </p>
                    </div>
                    <Link to ="/curriculum" className="Rm font13">Read more +</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="curriculum_pagination">
            <Link to ="/curriculum" >«</Link>
            <Link to ="/curriculum" className="active">1</Link>
            <Link to ="/curriculum" >2</Link>
            <Link to ="/curriculum" >3</Link>
            <Link to ="/curriculum" >»</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
