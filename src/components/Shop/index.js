import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/img/shop/product-1-1.jpg';

const SingleShop = (props) => {
  const {
    itemClass,
    productImage,
    badgeClass,
    badgeTitle,
    title,
    newPrice,
    oldPrice,
    rating,
    btnText,
  } = props;

  return (
    <div className={itemClass ? itemClass : 'it-shop-item p-relative'}>
      <div className="it-shop-thumb fix p-relative">
        <img src={productImage ? productImage : Image} alt="" />
        <div className={badgeClass ? badgeClass : 'it-shop-badge'}>
          <span>{badgeTitle ? badgeTitle : 'New'}</span>
        </div>
        <div className="it-shop-icon-box">
          <a href="#">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4075 1.54814C11.7419 0.826279 10.8287 0.428711 9.83581 0.428711C9.09364 0.428711 8.41396 0.663348 7.8156 1.12605C7.51367 1.35961 7.24009 1.64535 6.99888 1.97886C6.75777 1.64545 6.4841 1.35961 6.18207 1.12605C5.58381 0.663348 4.90412 0.428711 4.16196 0.428711C3.16907 0.428711 2.25573 0.826279 1.59018 1.54814C0.932567 2.26156 0.570312 3.23621 0.570312 4.29266C0.570312 5.38001 0.975531 6.37536 1.84551 7.42514C2.62377 8.36417 3.74232 9.31744 5.03763 10.4213C5.47993 10.7982 5.98128 11.2255 6.50185 11.6807C6.63938 11.8011 6.81584 11.8674 6.99888 11.8674C7.18183 11.8674 7.35839 11.8011 7.49572 11.6809C8.0163 11.2256 8.51794 10.7981 8.96043 10.421C10.2555 9.31734 11.3741 8.36417 12.1524 7.42504C13.0223 6.37536 13.4275 5.38001 13.4275 4.29256C13.4275 3.23621 13.0652 2.26156 12.4075 1.54814Z"
                fill="currentcolor"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9475 4.04481V8.33052C11.9475 9.43833 11.0464 10.3395 9.93862 10.3395H7.69424L8.61551 11.2607C8.77247 11.4177 8.77247 11.6719 8.61551 11.8288C8.53703 11.9073 8.43422 11.9465 8.33142 11.9465C8.22862 11.9465 8.12581 11.9073 8.04733 11.8288L6.44019 10.2217C6.28322 10.0647 6.28322 9.81049 6.44019 9.65358L8.04733 8.04643C8.2043 7.88947 8.45855 7.88947 8.61546 8.04643C8.77237 8.2034 8.77242 8.45765 8.61546 8.61456L7.69419 9.53583H9.93856C10.6032 9.53583 11.1439 8.99513 11.1439 8.33047V4.04476C11.1439 3.38009 10.6032 2.8394 9.93856 2.8394H8.6851C8.46326 2.8394 8.28331 2.65945 8.28331 2.43761C8.28331 2.21577 8.46326 2.03583 8.6851 2.03583H9.93856C11.0464 2.03583 11.9475 2.93701 11.9475 4.04481ZM4.32985 0.546434C4.17288 0.38947 3.91863 0.38947 3.76172 0.546434C3.60481 0.703398 3.60476 0.957648 3.76172 1.11456L4.68299 2.03583H2.43862C1.33081 2.03583 0.429688 2.93695 0.429688 4.04476V8.33047C0.429688 9.43827 1.33081 10.3394 2.43862 10.3394H3.69208C3.91392 10.3394 4.09387 10.1595 4.09387 9.93761C4.09387 9.71577 3.91392 9.53583 3.69208 9.53583H2.43862C1.77396 9.53583 1.23326 8.99513 1.23326 8.33047V4.04476C1.23326 3.38009 1.77396 2.8394 2.43862 2.8394H4.68299L3.76172 3.76067C3.60476 3.91763 3.60476 4.17188 3.76172 4.32879C3.84021 4.40727 3.94301 4.44649 4.04581 4.44649C4.14862 4.44649 4.25142 4.40727 4.3299 4.32879L5.93705 2.72165C6.09401 2.56468 6.09401 2.31043 5.93705 2.15352L4.32985 0.546434Z"
                fill="currentcolor"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6184 0.571289H9.20317C9.09661 0.571289 8.99442 0.61362 8.91907 0.688969C8.84372 0.764319 8.80139 0.866515 8.80139 0.973075C8.80139 1.07963 8.84372 1.18183 8.91907 1.25718C8.99442 1.33253 9.09661 1.37486 9.20317 1.37486H11.6155L7.92128 4.90113C7.8831 4.93757 7.85248 4.98116 7.83115 5.02943C7.80983 5.0777 7.79822 5.12969 7.79698 5.18245C7.79575 5.2352 7.80492 5.28769 7.82398 5.3369C7.84303 5.38611 7.87158 5.43108 7.90802 5.46926C7.94445 5.50743 7.98805 5.53806 8.03631 5.55938C8.08458 5.58071 8.13658 5.59232 8.18933 5.59355C8.24209 5.59478 8.29457 5.58561 8.34378 5.56656C8.39299 5.54751 8.43797 5.51895 8.47614 5.48252L12.2166 1.91205V4.38825C12.2166 4.49481 12.2589 4.59701 12.3342 4.67236C12.4096 4.74771 12.5118 4.79004 12.6184 4.79004C12.7249 4.79004 12.8271 4.74771 12.9025 4.67236C12.9778 4.59701 13.0201 4.49481 13.0201 4.38825V0.973075C13.0201 0.866515 12.9778 0.764319 12.9025 0.688969C12.8271 0.61362 12.7249 0.571289 12.6184 0.571289Z"
                fill="currentcolor"
              />
              <path
                d="M12.629 8.80812C12.5224 8.80812 12.4202 8.85045 12.3449 8.9258C12.2695 9.00115 12.2272 9.10335 12.2272 9.20991V11.6552L8.49341 7.92138C8.41763 7.84819 8.31614 7.80769 8.21079 7.80861C8.10545 7.80952 8.00467 7.85178 7.93018 7.92627C7.85569 8.00077 7.81343 8.10154 7.81252 8.20689C7.8116 8.31224 7.8521 8.41373 7.92529 8.48951L11.6591 12.2233H9.21381C9.10725 12.2233 9.00506 12.2656 8.92971 12.341C8.85436 12.4163 8.81203 12.5185 8.81203 12.6251C8.81203 12.7316 8.85436 12.8338 8.92971 12.9092C9.00506 12.9845 9.10725 13.0269 9.21381 13.0269H12.629C12.7356 13.0269 12.8377 12.9845 12.9131 12.9092C12.9884 12.8338 13.0308 12.7316 13.0308 12.6251V9.20991C13.0308 9.10335 12.9884 9.00115 12.9131 8.9258C12.8377 8.85045 12.7356 8.80812 12.629 8.80812Z"
                fill="currentcolor"
              />
              <path
                d="M4.90679 8.12255L1.37388 11.6555V9.21019C1.37388 9.10363 1.33155 9.00143 1.2562 8.92608C1.18085 8.85073 1.07866 8.8084 0.972098 8.8084C0.865538 8.8084 0.763342 8.85073 0.687993 8.92608C0.612643 9.00143 0.570313 9.10363 0.570312 9.21019V12.6254C0.570312 12.7319 0.612643 12.8341 0.687993 12.9095C0.763342 12.9848 0.865538 13.0272 0.972098 13.0272H4.38728C4.49384 13.0272 4.59603 12.9848 4.67138 12.9095C4.74673 12.8341 4.78906 12.7319 4.78906 12.6254C4.78906 12.5188 4.74673 12.4166 4.67138 12.3413C4.59603 12.2659 4.49384 12.2236 4.38728 12.2236H1.94201L5.47491 8.69068C5.5481 8.6149 5.5886 8.51341 5.58768 8.40806C5.58677 8.30271 5.54451 8.20194 5.47002 8.12745C5.39552 8.05295 5.29475 8.0107 5.1894 8.00978C5.08405 8.00887 4.98256 8.04936 4.90679 8.12255Z"
                fill="currentcolor"
              />
              <path
                d="M1.94201 1.37486H4.38728C4.49384 1.37486 4.59603 1.33253 4.67138 1.25718C4.74673 1.18183 4.78906 1.07963 4.78906 0.973075C4.78906 0.866515 4.74673 0.764319 4.67138 0.688969C4.59603 0.61362 4.49384 0.571289 4.38728 0.571289H0.972098C0.865538 0.571289 0.763342 0.61362 0.687993 0.688969C0.612643 0.764319 0.570313 0.866515 0.570312 0.973075V4.38825C0.570312 4.49481 0.612643 4.59701 0.687993 4.67236C0.763342 4.74771 0.865538 4.79004 0.972098 4.79004C1.07866 4.79004 1.18085 4.74771 1.2562 4.67236C1.33155 4.59701 1.37388 4.49481 1.37388 4.38825V1.94299L4.90679 5.47589C4.98256 5.54908 5.08405 5.58957 5.1894 5.58866C5.29475 5.58774 5.39552 5.54549 5.47002 5.47099C5.54451 5.3965 5.58677 5.29573 5.58768 5.19038C5.5886 5.08503 5.5481 4.98354 5.47491 4.90776L1.94201 1.37486Z"
                fill="currentcolor"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="it-shop-content text-center">
        <h3 className="it-shop-title">
          <Link to="/shop-details">
            {title ? title : 'Jeff Gothelf learn UX'}
          </Link>
        </h3>
        <div className="it-shop-price d-flex align-items-center justify-content-between">
          <span className="it-shop-ammount">
            ${newPrice ? newPrice : '$100.00'}{' '}
            {oldPrice && <del>${oldPrice}</del>}
          </span>
          <span>
            <i className="fa-solid fa-star"></i> {rating ? rating : '4.5k'}
          </span>
        </div>
        <div className="it-shop-add">
          <Link to="/cart" className="ed-btn-square radius sm-2">
            <span>{btnText ? btnText : 'Shop Now'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleShop;