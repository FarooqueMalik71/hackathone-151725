// icons
import { IoIosArrowForward } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiList } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


// stylesheet
import "./product.css";

// images
import Image from "next/image";
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function page() {
  return (
    <>
    <Header/>
    <div className="product-page">
      <div className="category">
        <h4>Shop</h4>

        <span className="cat-list">
          Home <IoIosArrowForward className="cate-gray" /> Shop{" "}
        </span>
      </div>

      <div className="cate-cards">
        <div className="cat-card1">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card2">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card3">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card4">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
        <div className="cat-card5">
          <h4>CLOTHS</h4>
          <p>5 Items</p>
        </div>
      </div>

      <div className="filters">
        <div className="ft-first">Showing all 12 results
        </div>

        <div className="ft-middle">
        Views:
        <div className="ft-btn-1"><PiSquaresFourFill />
        </div>
        <div className="ft-btn-2"><FiList />
        </div>
        </div>

        <div className="ft-third">
          <button className="ft-pop-btn">Popularity <IoIosArrowDown />
          </button>
          <button className="ft-blue-btn">Filter</button>
        </div>
      </div>

      <div className="companies">
        <Image src={logo1} alt="logo-1" className="logoimg" ></Image>
        <Image src={logo2} alt="logo-2" className="logoimg" ></Image>
        <Image src={logo3} alt="logo-3" className="logoimg" ></Image>
        <Image src={logo4} alt="logo-4" className="logoimg" ></Image>
        <Image src={logo5} alt="logo-5" className="logoimg" ></Image>
        <Image src={logo6} alt="logo-6" className="logoimg" ></Image>
      </div>



      <div className="pr-cards-cont">
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

          <div className="card">
            <div className="card-img-9"></div>
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
            <div className="card-img-10"></div>
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
            <div className="card-img-11"></div>
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
            <div className="card-img-12"></div>
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


      <div className="pagination">
        <div className="pag-1" >First</div>
        <div className="pag-2" >1</div>
        <div className="pag-3" >2</div>
        <div className="pag-4" >3</div>
        <div className="pag-5" >Next</div>
      </div>


    </div>
    <Footer/>
    </>
  );
}
