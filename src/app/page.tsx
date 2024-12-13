
import { IoIosArrowForward } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";


// image component
import Image from "next/image";

//
import Personimg from "./images/shop-hero.png";
import SecPersonimg from "./images/asian-woman-man.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header/>
      <div className="home-hero ">
        <div className="hometext">
          <span>SUMMER 2020</span>
          <h1>NEW COLLECTION</h1>
          <p>
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="second-section">
        <span>EDITORS PICK</span>
        <p>Problems trying to resolve the conflict between </p>
<div>
        <div className="product-grid">
          <div className="pro-col-1">
            <button>MEN</button>
          </div>


          <div className="pro-col-2">
            <button>WOMEN</button>
          </div>

          <div className="pro-col-3">
            <div className="pro-row-1">
              <button>ACCESSORIES</button>
            </div>
            <div className="pro-row-2">
              <button>KIDS</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="third-section">
        <span>Featured Products</span>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>

        <div className="cards-cont">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-2"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-3"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-4"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-5"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-6"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-7"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img-8"></div>
            <div className="card-text">
              <h4>Graphic Design</h4>
              <h6>English Department</h6>
              <p>
                $16.48 <span className="card-green">$6.48</span>
              </p>

              <div className="card-colors">
                <span className="color-1"></span>
                <span className="color-2"></span>
                <span className="color-3"></span>
                <span className="color-4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-section">
        <div className="fourth-text">
          <span>SUMMER 2020</span>
          <h1>Vita Classic Product</h1>
          <p>
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="fourth-btns">
            <button className="four-price-btn">$16.48</button>
            <button className="four-cart-btn">
              ADD TO CART <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="fourth-image">
          <Image
            className="personimg"
            src={Personimg}
            alt="person-image"
          ></Image>
        </div>
      </div>

      <div className="fifth-section">
        <div className="fifth-image">
          <Image
            className="secperson"
            src={SecPersonimg}
            alt="person-image"
          ></Image>
        </div>

        <div className="fifth-text">
          <span>SUMMER 2020</span>
          <h1>Part of the Neural Universe</h1>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="fifth-btns">
            <button className="fifth-price-btn">BUY NOW</button>
            <button className="fifth-cart-btn">READ MORE </button>
          </div>
        </div>
      </div>

      <div className="sixth-section">
        <span>Practice Advice</span>
        <h3>Featured Posts</h3>
        <p className="six-para">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <div className="features-cards-container">
          <div className="card-1">
            <div className="card-image"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                <TfiAlarmClock className="
                fea-date" />
                22 April 2021
                </div>
                <div className="comments">
                <VscGraphLine className="
                fea-comment" />
                10 comments
                </div>
              </div>

              <div className="feature-btn">
              Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>

          <div className="card-1">
            <div className="card-image-2"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                <TfiAlarmClock className="
                fea-date" />
                22 April 2021
                </div>
                <div className="comments">
                <VscGraphLine className="
                fea-comment" />
                10 comments
                </div>
              </div>

              <div className="feature-btn">
              Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>


          <div className="card-1">
            <div className="card-image-3"></div>
            <div className="card-text">
              <ul>
                <li><span className="feature-blue">Google</span></li>
                <li>Trending</li>
                <li>New</li>
              </ul>

              <h3>Loudest à la Madison #1 (Lintegral)</h3>

              <p>
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </p>

              <div className="details">
                <div className="date">
                <TfiAlarmClock className="
                fea-date" />
                22 April 2021
                </div>
                <div className="comments">
                <VscGraphLine className="
                fea-comment" />
                10 comments
                </div>
              </div>

              <div className="feature-btn">
              Learn More <IoIosArrowForward className="feat-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
