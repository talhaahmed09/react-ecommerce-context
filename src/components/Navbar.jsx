import { Avatar, Input } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="Wrapper ">
      <header>
        <div className="container d-flex py-5">
          <a href="#">
            <svg
              className="b-loaded"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 278 32"
              aria-label="Hayneedle Logo"
              width="240px"
              height="30px"
            >
              <g id="b90422e4-2e93-436a-80f6-2b99d9cb717b" data-name="Layer 2">
                <g
                  id="eab9588a-1b6a-455e-a072-455eac2ebcc7"
                  data-name="Blue dot hayneedle"
                >
                  <g
                    id="f0d0e8a2-e67c-4653-b5de-5499d9faa688"
                    data-name="HAYNEEDLE"
                    fill="#ffffff"
                  >
                    <path d="M27.29,1.21v30H22.66V17.17H5.45V31.24H.83v-30H5.45V13.42H22.66V1.21Z"></path>
                    <path d="M50.68,20.94H40.48L36,31.24H31.48l13.39-30h3.07L60,31.24H54.82ZM49.3,17.47,45.82,8.83,42,17.46Z"></path>
                    <path d="M70,19.18l-11.58-18H64L72.9,14.86,81.12,1.22h4.79L74.85,19.3V31.24H70Z"></path>
                    <path d="M117.37,1.21V31.34h-2.53L94.51,9.65V31.24h-4.2v-30h2.56l20.3,21.69V1.21Z"></path>
                    <path d="M143.87,27.46l-.6,3.77H124.7V1.16h18.19l-.62,3.77H129.33V13.7h11.44l-.55,3.52H129.33V27.46Z"></path>
                    <path d="M168.17,27.46l-.63,3.78H149V1.16h18.16l-.62,3.77H153.63V13.7h11.44l-.54,3.52h-10.9V27.46Z"></path>
                    <path d="M201.15,15.53c0,6.38-3.38,15.92-19.63,15.92-1.91,0-5.25-.15-8.22-.43V1.45a65.47,65.47,0,0,1,9.06-.72C197,.73,201.15,8.55,201.15,15.53Zm-5,.29c0-5.25-2.67-11.31-13.69-11.31-1.39,0-3.2.1-4.53.2V27.58c1.33.09,3.1.18,4.38.18,11.22,0,13.84-6.76,13.84-12Z"></path>
                    <path d="M225.45,27.46l-.62,3.77H207.21v-30h4.62V27.46Z"></path>
                    <path d="M249.06,27.46l-.61,3.77H229.89V1.16h18.18l-.62,3.77H234.52V13.7H246l-.55,3.52H234.52V27.46Z"></path>
                  </g>
                  <g
                    id="b77ae1e8-455a-423f-ad81-0b101c652315"
                    data-name="Hayneedle blue dot"
                  >
                    <circle
                      cx="255.81"
                      cy="6.37"
                      r="5.02"
                      fill="#ffffff"
                    ></circle>
                  </g>
                </g>
              </g>
            </svg>
          </a>

          <Input type="search" placeholder="Search (e.g: jeans, iphone)" />

          <div className="d-flex menu-item">
            <a>
              <UserOutlined
                style={{ color: "#fff", fontSize: "20px", padding: "10px" }}
              />
            </a>
            <a>
              <ShoppingCartOutlined
                style={{ color: "#fff", fontSize: "20px", padding: "10px" }}
              />
            </a>
            <a>
              <HeartOutlined
                style={{ color: "#fff", fontSize: "20px", padding: "10px" }}
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
