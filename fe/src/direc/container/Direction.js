import React from "react";

import "../component/Direction.css";

function Direction(props) {
  return (
    <div id="wapper">
      <div id="container_title_box">
        <img
          src="https://www.bitcamp.co.kr/theme/basic/img/title_01.jpg"
          alt
          className="full"
        />
        <p className="font25 bold">Directions</p>
      </div>
      <div className="tabs_location">
        <div className="tabs pc-layout">
          <div className="tablist" role="tablist" aria-label="Sample Tabs">
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex={0}
            >
              Seocho Main Garden
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex={-1}
            >
              Gangnam Center
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              tabIndex={-1}
            >
              Jongno Center
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              tabIndex={-1}
            >
              Sinchon Center
            </button>
          </div>
          <div
            className="container_location"
            id="panel-1"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="tab-1"
          >
            <h1 className="font20">Seocho Main Garden</h1>
            <div className="wap_map">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.204140741738!2d127.02225031532987!3d37.50310313551609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca158a8d5dd53%3A0xaf6376543bcb7b3!2z67Cx7JWU67mM65Sp!5e0!3m2!1sen!2s!4v1614067162151!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="content_location">
              <ul className="address_location">
                <li className="font13">
                  <div className="div_label bold">Address</div>
                  <div className="div_desc">
                    1F, Baekam Building, 459 Gangnam-daero, Seocho-gu, Seoul
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Representative number</div>
                  <div className="div_desc">023486-9600</div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Subway</div>
                  <div className="div_desc">
                    Sinnonhyeon Station Line 9, Exit 6-3 minutes walk toward
                    <br />
                    Gangnam Station Gangnam Station Line 2, Exit 10-7 minutes on
                    foot toward Sinnonhyeon Station
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Bus</div>
                  <div className="div_desc">
                    Get off Sinnonhyeon Station, (formerly) Kyobo Tower
                    Intersection / Sinnonhyeon Station, Citibank
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container_location pc-layout"
            id="panel-2"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="tab-2"
            hidden
          >
            <h1 className="font20">Gangnam Center</h1>
            <div className="wap_map">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.204140741738!2d127.02225031532987!3d37.50310313551609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca158a8d5dd53%3A0xaf6376543bcb7b3!2z67Cx7JWU67mM65Sp!5e0!3m2!1sen!2s!4v1614067162151!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="content_location">
              <ul className="address_location">
                <li className="font13">
                  <div className="div_label bold">Address</div>
                  <div className="div_desc">
                    5th floor, Baekam Building, 459 Gangnam-daero, Seocho-gu,
                    Seoul
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Representative number</div>
                  <div className="div_desc">02 3453-5404</div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Subway</div>
                  <div className="div_desc">
                    Sinnonhyeon Station Line 9, Exit 6-3 minutes walk toward
                    Gangnam Station
                    <br />
                    Gangnam Station Line 2, Exit 10-7 minutes on foot toward
                    Sinnonhyeon Station
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Bus</div>
                  <div className="div_desc">
                    Get off at Sinnonhyeon Station, (formerly) Kyobo Tower
                    Intersection / Sinnonhyeon Station, Citibank
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container_location pc-layout"
            id="panel-3"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="tab-3"
            hidden
          >
            <h1 className="font20">Jongno Center</h1>
            <div className="wap_map">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.340099505577!2d126.98310321533158!3d37.57060843165265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e88a3acb0f%3A0x906e9abe1d3cf700!2s69%20Jong-ro%2C%20Jongno%202(i)-ga%2C%20Jongno-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1614071892890!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="content_location">
              <ul className="address_location">
                <li className="font13">
                  <div className="div_label bold">Address</div>
                  <div className="div_desc">
                    7th floor of YMCA, 69, Jong-ro, Jongno-gu, Seoul
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Representative number</div>
                  <div className="div_desc">02 722-1481</div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Subway</div>
                  <div className="div_desc">
                    Jonggak Station Line 1, Exits 8 and 11-3 min walk
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Bus</div>
                  <div className="div_desc">Get off) Jongno 2-ga</div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container_location pc-layout"
            id="panel-4"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="tab-4"
            hidden
          >
            <h1 className="font20">Sinchon Center</h1>
            <div className="wap_map">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1103800595256!2d126.93563751533104!3d37.55246313269159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98be0a2cf6e3%3A0x4d8963de2196f6dc!2s23%20Baekbeom-ro%2C%20Daeheung-dong%2C%20Mapo-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1614072050755!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="content_location">
              <ul className="address_location">
                <li className="font13">
                  <div className="div_label bold">Address</div>
                  <div className="div_desc">
                    3F, Gu Plaza, 23 Baekbeom-ro, Mapo-gu, Seoul
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Representative number</div>
                  <div className="div_desc">02 707-1480</div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Subway</div>
                  <div className="div_desc">
                    Sinchon Station Line 2, Exit 6-8 min walk
                  </div>
                </li>
                <li className="font13">
                  <div className="div_label bold">Bus</div>
                  <div className="div_desc">
                    Get off Shinchon Rotary, Sogang University
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Direction;
