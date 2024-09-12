import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { formatter } from "../../../utils/fomater";
import "./style.scss";
import cat1Img from "assets/users/images/categories/h2.png";
import cat2Img from "assets/users/images/categories/h3.png";
import cat3Img from "assets/users/images/categories/h4.png";
import cat4Img from "assets/users/images/categories/h5.png";
import cat5Img from "assets/users/images/categories/h6.png";
import cat6Img from "assets/users/images/categories/h7.png";
import feature1Img from "assets/users/images/featured/feature-1.png";
import feature2Img from "assets/users/images/featured/feature-2.png";
import feature3Img from "assets/users/images/featured/feature-3.png";
import feature4Img from "assets/users/images/featured/feature-4.png";
import feature5Img from "assets/users/images/featured/feature-5.png";
import feature6Img from "assets/users/images/featured/feature-6.png";
import feature7Img from "assets/users/images/featured/feature-7.png";
import feature8Img from "assets/users/images/featured/feature-8.png";
import feature9Img from "assets/users/images/featured/feature-9.png";
import feature10Img from "assets/users/images/featured/feature-10.png";
import feature11Img from "assets/users/images/featured/feature-11.png";
import banner1Img from "assets/users/images/banner/banner1Img.png";
import banner2Img from "assets/users/images/banner/banner2Img.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";



const HomePage = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const sliderItems =[
        {
            bgImg: cat1Img,
            name:"Cây Tùng Bonsai"
        },
        {
            bgImg: cat2Img,
            name:"Cây Lưỡi Hổ"
        },
        {
            bgImg: cat3Img,
            name:"Cây Hoa Trang Bonsai"
        },
        {
            bgImg: cat4Img,
            name:"Cây Xanh Bonsai"
        },
        {
            bgImg: cat5Img,
            name:"Cây Sung Bonsai"
        },
        {
            bgImg: cat6Img,
            name:"Cây Phong Lá Đỏ"
        },
    ];
    // featured begin
    const featProducts= {
      all: {
        title:"Toàn bộ",
        products: [
          {
            img: feature1Img,
            name:"Hoa Sứ Hồng",
            price:500000,
          },
          {
            img: feature2Img,
            name:"Cây Hoa Giấy",
            price:450000,
          },
          {
            img: feature3Img,
            name:"Cây Xanh",
            price:390000,
          },
          {
            img: feature4Img,
            name:"Cây Tùng",
            price:450000,
          },
          {
            img: feature5Img,
            name:"Cây Hoa Nhai",
            price:180000,
          },
          {
            img: feature6Img,
            name:"Cây Sung",
            price:450000,
          },
          {
            img: feature7Img,
            name:"Cây Trang Vàng",
            price:300000,
          },
          {
            img: feature8Img,
            name:"Cây Phong lá đỏ",
            price:350000,
          },
        ],
      },
      hoasu: {
        title:"Cây Hoa Sứ",
        products: [
          {
            img: feature1Img,
            name:"Hoa Sứ Hồng",
            price:500000,
          },
          {
            img: feature11Img,
            name:"Hoa Sứ Trắng",
            price:450000,
          },
        ],
      },
      hoatrang: {
        title:"Cây Hoa Trang",
        products: [
          {
            img: feature7Img,
            name:"Hoa Trang Vàng",
            price:300000,
          },
          {
            img: feature9Img,
            name:"Hoa Trang Hồng",
            price:420000,
          },
          {
            img: feature10Img,
            name:"Hoa Trang Đỏ",
            price:450000,
          },
        ],
      },
      hoaxanh: {
        title:"Cây Xanh",
        products: [
          {
            img: feature3Img,
            name:"Hoa Xanh Bonsai",
            price:600000,
          },
          {
            img: feature6Img,
            name:"Hoa Sung",
            price:550000,
          },
        ],
      },
    };

    const renderFeaturedProducts =(data)=> {
      const tabList=[];
      const tabPanels=[];
     

      Object.keys(data).forEach((key,index)=> {
        tabList.push(<Tab key={index}>{data[key].title}</Tab>);
        const tabPanel=[];
        data[key].products.forEach((item,j)=>{
          tabPanel.push(<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
            <div className="feature__item pl-pr-10">
              <div className="feature__item__pic"
              style={{
                backgroundImage:`url(${item.img})`
              }}
              >
                <ul className="feature__item__pic__hover">
                  <li>
                    <AiOutlineEye/>
                  </li>
                  <li>
                    <AiOutlineShoppingCart/>
                  </li>
                </ul>
              </div>
              <div className="feature__item__text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
          );
        });
        tabPanels.push(tabPanel);
      });
      

      return (
        <Tabs>
            <TabList>{tabList}</TabList>
            {
              tabPanels.map((item,key)=>(
                <TabPanel key={key}>
                  <div className="row">{item}</div>
                </TabPanel>
              ))}
        </Tabs>
      );
    };
    // featured end
  
    return (
       <>
        {/* Categories Begin */}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
            {sliderItems.map((item,key)=>(
                 <div className="categories_slider_item"
                 style={{backgroundImage: `url(${item.bgImg})`}}
                 key={key}
                 >
                     <p>{item.name}</p>
               </div>
            ))}
        </Carousel>
      </div>
       {/* Categories End */}

       {/* Featured Begin*/}
      <div className="container">
        <div className="featured">
            <div className="selection-title">
              <h2>Sản phẩm nổi bật</h2>
            </div>
            {renderFeaturedProducts(featProducts)}
        </div>
      </div>
        {/* Featured End*/}
        {/* Bannel Begin*/}
        <div className="container">
          <div className="banner">
            <div className="banner__pic">
              <img src={banner1Img} alt="banner" />
              <div className="banner__button">Mua Ngay</div>
            </div>
            <div className="banner__pic">
              <img src={banner2Img} alt="banner" />
              <div className="banner__button">Mua Ngay</div>
            </div>
        </div>
</div>

        {/* Bannel End*/}
       </>
    );
  };
export default memo(HomePage);