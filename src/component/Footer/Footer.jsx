import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <ul className="quick-nav">
            <li>
            <Link className="nav-link active" to="/">
                  Do more with Data Call
                </Link>
            </li>
            <li>
            <Link className="nav-link" to="/whydata">
                  Why Data Call
                </Link>
            </li>
            <li>
            <Link className="nav-link " to="/about">
                  About
                </Link>
            </li>
            <li>
            <Link className="nav-link" to="/services">
                  Services
                </Link>
            </li>
          </ul>

          <ul className="social-list">
            <li>
              <Link href="#" target="_blank" className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 52 51"
                >
                  <g transform="translate(0 -0.417)">
                    <g
                      transform="translate(0 0.418)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1"
                      className="stroke"
                    >
                      <ellipse
                        cx="26"
                        cy="25.5"
                        rx="26"
                        ry="25.5"
                        stroke="none"
                      ></ellipse>
                      <ellipse
                        cx="26"
                        cy="25.5"
                        rx="25.5"
                        ry="25"
                        fill="none"
                      ></ellipse>
                    </g>
                    <path
                      fill="#fff"
                      d="M16.666,4.257h2.34V.181A30.222,30.222,0,0,0,15.6,0C12.222,0,9.911,2.123,9.911,6.024v3.59H6.187v4.557H9.911V25.637h4.566V14.172h3.573l.567-4.557H14.475V6.475c0-1.317.356-2.219,2.191-2.219Z"
                      transform="translate(13.193 13.482)"
                    ></path>
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 52 51"
                >
                  <g transform="translate(-0.494 -0.417)">
                    <g
                      transform="translate(0.494 0.418)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1"
                      className="stroke"
                    >
                      <ellipse
                        cx="26"
                        cy="25.5"
                        rx="26"
                        ry="25.5"
                        stroke="none"
                      ></ellipse>
                      <ellipse
                        cx="26"
                        cy="25.5"
                        rx="25.5"
                        ry="25"
                        fill="none"
                      ></ellipse>
                    </g>
                    <g transform="translate(13.856 16.01)">
                      <g transform="translate(0 0)">
                        <path
                          fill="#fff"
                          d="M24.518,50.358a10.48,10.48,0,0,1-2.9.794,5,5,0,0,0,2.211-2.778,10.045,10.045,0,0,1-3.187,1.217,5.026,5.026,0,0,0-8.695,3.437,5.176,5.176,0,0,0,.116,1.146,14.227,14.227,0,0,1-10.36-5.258,5.028,5.028,0,0,0,1.545,6.718,4.964,4.964,0,0,1-2.271-.619v.055a5.05,5.05,0,0,0,4.027,4.939,5.017,5.017,0,0,1-1.318.166,4.444,4.444,0,0,1-.952-.086,5.074,5.074,0,0,0,4.7,3.5A10.1,10.1,0,0,1,1.2,65.734,9.415,9.415,0,0,1,0,65.665a14.151,14.151,0,0,0,7.711,2.256,14.208,14.208,0,0,0,14.306-14.3c0-.222-.008-.437-.018-.65A10.027,10.027,0,0,0,24.518,50.358Z"
                          transform="translate(0 -48)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 52 51"
                >
                  <g transform="translate(0.165 -0.417)">
                    <g
                      transform="translate(-0.165 0.418)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1"
                      className="stroke"
                    >
                      <ellipse
                        cx="26"
                        cy="25.5"
                        rx="26"
                        ry="25.5"
                        stroke="none"
                      ></ellipse>
                      <ellipse
                        cx="26"
                        cy="25.5"
                        rx="25.5"
                        ry="25"
                        fill="none"
                      ></ellipse>
                    </g>
                    <g transform="translate(13.078 13.482)">
                      <path
                        fill="#fff"
                        d="M26.444,7.664A9.525,9.525,0,0,0,25.838,4.5,6.677,6.677,0,0,0,22.024.687,9.549,9.549,0,0,0,18.862.082C17.467.015,17.024,0,13.485,0S9.5.015,8.112.076A9.528,9.528,0,0,0,4.95.682,6.36,6.36,0,0,0,2.638,2.19,6.418,6.418,0,0,0,1.136,4.5,9.55,9.55,0,0,0,.53,7.659C.464,9.054.449,9.5.449,13.036s.015,3.982.076,5.372a9.524,9.524,0,0,0,.606,3.162,6.676,6.676,0,0,0,3.814,3.814,9.551,9.551,0,0,0,3.162.606c1.39.061,1.833.076,5.372.076s3.982-.015,5.372-.076a9.523,9.523,0,0,0,3.162-.606,6.667,6.667,0,0,0,3.814-3.814,9.557,9.557,0,0,0,.606-3.162c.061-1.39.076-1.833.076-5.372s-.005-3.982-.066-5.372ZM24.1,18.306a7.145,7.145,0,0,1-.448,2.419A4.324,4.324,0,0,1,21.174,23.2a7.17,7.17,0,0,1-2.419.448c-1.375.061-1.787.076-5.265.076s-3.9-.015-5.265-.076A7.141,7.141,0,0,1,5.806,23.2a4.011,4.011,0,0,1-1.5-.973,4.053,4.053,0,0,1-.973-1.5,7.171,7.171,0,0,1-.448-2.419c-.061-1.375-.076-1.787-.076-5.265s.015-3.9.076-5.265a7.141,7.141,0,0,1,.448-2.419,3.962,3.962,0,0,1,.978-1.5,4.046,4.046,0,0,1,1.5-.972,7.175,7.175,0,0,1,2.419-.448c1.375-.061,1.787-.076,5.265-.076s3.9.015,5.265.076a7.145,7.145,0,0,1,2.419.448,4.008,4.008,0,0,1,1.5.972,4.052,4.052,0,0,1,.973,1.5A7.174,7.174,0,0,1,24.1,7.781c.061,1.375.076,1.787.076,5.265s-.015,3.885-.076,5.26Zm0,0"
                        transform="translate(-0.449 0)"
                      ></path>
                      <path
                        fill="#fff"
                        d="M131.85,124.5a6.9,6.9,0,1,0,6.9,6.9A6.9,6.9,0,0,0,131.85,124.5Zm0,11.378a4.477,4.477,0,1,1,4.477-4.477A4.477,4.477,0,0,1,131.85,135.878Zm0,0"
                        transform="translate(-118.814 -118.365)"
                      ></path>
                      <path
                        fill="#fff"
                        d="M365.475,90.114a1.513,1.513,0,1,1-1.513-1.513A1.513,1.513,0,0,1,365.475,90.114Zm0,0"
                        transform="translate(-343.935 -84.07)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
          <p className="copy-text">
            {" "}
            &copy;2021 Data Call Solutions. All right received
          </p>
        </div>
      </footer>
    </div>
  );
};
