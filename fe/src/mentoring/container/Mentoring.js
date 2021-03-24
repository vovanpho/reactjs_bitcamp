import React from "react";

import "../component/Mentoring.css";

function Mentoring(props) {
  return (
    <div id="wapper">
      <div id="container_title_box">
        <img
          src="https://www.bitcamp.co.kr/theme/basic/img/title_05.jpg"
          alt
          className="full"
        />
        <p className="font25 bold">Mentoring</p>
      </div>
      <div id="div_cm">
        <div className="container_cm">
          <h1 className="font20 bold">Mentoring</h1>
          <div className="result_filter">
            <div className="bar_search">
              <button id="open_modal_search">
                <i className="fas fa-search" />
              </button>
            </div>
            <ul className="content_result">
              <li className="preparing">preparing</li>
            </ul>
          </div>
          <div className="modal_search_wrap">
            <fieldset>
              <div className="title_search">
                <h4>Search</h4>
                <button id="close_modal">
                  <i className="fas fa-times" />
                </button>
              </div>
              <form className="form_search">
                <select name id>
                  <option value>Mentor name</option>
                </select>
                <div className="_input">
                  <input
                    type="search"
                    placeholder="Please enter a search item"
                  />
                  <button>
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentoring;
