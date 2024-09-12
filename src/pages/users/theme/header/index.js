import { memo, useState } from "react";
import "./style.scss";
import {AiFillInstagram, AiFillLinkedin, AiOutlineDownCircle, AiOutlineFacebook, AiOutlineGlobal, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/fomater";
import { ROUTERS } from "../../../../utils/router";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";


const Header = () =>{
    const [isShowCategories,setShowCategories] = useState(true);
    const [isShowHumberger,setShowHumberger] = useState(false);
    const [menus, setMenus] = useState([
        {
            name:"Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name:"Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name:"Sản phẩm",
            path: "",
            isShowSubmenu:false,
            child:[
                {
                    name:"Cây Lưỡi hổ",
                    path: "",
                },
                {
                    name:"Cây Tùng",
                    path: "",
                },
                {
                    name:"Cây Sung Bonsai",
                    path: "",
                },
                {
                    name:"Cây Hoa Giấy",
                    path: "",
                },
                {
                    name:"Cây Đa Bonsai",
                    path: "",
                },
            ],
        },
        {
            name:"Bài viết",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name:"Liên hệ",
            path: ROUTERS.USER.PRODUCTS,
        },
    ]);
    return (
        <>
            <div className={`humberger__menu__overlay ${isShowHumberger ? "active" : ""}`}
                 onClick={() => setShowHumberger(false)}
            />
            <div  className={`humberger__menu__wrapper ${isShowHumberger ? "show" : ""}`}
                >
                <div className="header__logo">
                    <h1>Green Garden</h1>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li>
                            <Link to={""}>
                            <AiOutlineShoppingCart/> <span>1</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="header__cart__price">
                        Giỏ hàng: <span>{formatter(500000)}</span>
                    </div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__auth">
                        <Link to={""}>
                            <BiUser/>Đăng nhập
                        </Link>
                    </div>
                </div>
                <div className="humberger__menu__nav">
                    <ul>
                        {menus.map((menu, menuKey)=> (
                            <li key={menuKey} to={menu.path}>
                                <Link 
                                    to={menu.path}
                                    onClick={()=>{
                                        const newMenus = [...menus];
                                        newMenus[menuKey].isShowSubmenu= !newMenus[menuKey].isShowSubmenu;
                                        setMenus(newMenus);
                                    }}
                                >
                                    {menu.name}
                                    {menu.child && (
                                        menu.isShowSubmenu ? (
                                            <AiOutlineDownCircle/>
                                        ):(
                                        <AiOutlineDownCircle/>
                                        ))}
                                </Link>
                                {menu.child && (
                                  <ul className={`header__menu__dropdown ${menu.isShowSubmenu ? "show__submenu" : ""}`}>
                                     {menu.child.map((childItem, childKey)=> (
                                       <li key={`${menuKey}-${childKey}`}>
                                            <Link to={childItem.path}>{childItem.name}</Link>
                                       </li>
                                   
                                     ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header__top__right__social">
                    <Link to={""}>
                        <AiOutlineFacebook/>
                    </Link>
                    <Link to={""}>
                        <AiFillInstagram/>
                    </Link>
                    <Link to={""}>
                        <AiFillLinkedin/>
                    </Link>
                    <Link to={""}>
                        <AiOutlineGlobal/>
                    </Link>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li>
                            <MdEmail/> pthithanhthuy59@gmail.com
                        </li>
                        <li>
                            Miễn phí đơn hàng từ {formatter(500000)}
                        </li>
                    </ul>
                </div>
            </div>
           
            

       
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail/>
                                    pthithanhthuy59@gmail.com
                                </li>
                                <li>Miễn phí ship đơn từ {formatter(500000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiFillInstagram/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiFillLinkedin/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineGlobal/>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser/>
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <h1>Green Garden</h1>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey)=>(
                                        <li key={menuKey} className={ menuKey === 0 ? "active" :""}>
                                             <Link to={menu?.path}>{menu?.name}</Link>
                                             {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {
                                                        menu.child.map((childItem, childKey)=>(
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                        ))}                                               
                                                    </ul>
                                                ) }
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    </div>

                    
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formatter(1000000)}</span>
                            </div>
                            <ul>
                                <li>
                                     <Link to={"#"}>
                                        <AiOutlineShoppingCart/> <span>3</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="humberger__open">
                            <AiOutlineMenu
                            onClick={()=> setShowHumberger(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero__categories_container">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 hero__categories">
                        <div className="hero__categories__all" onClick={()=>setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh sách sản phẩm
                        </div>
                        <ul className={isShowCategories ? "" :"hidden"}>
                            <li>
                                <Link to={"#"}>Cây Lưỡi Hổ</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Tùng</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Sung Bonsai</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Phát Tài</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Đa Cảnh</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Vạn Niên Thanh</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Hoa giấy</Link> 
                            </li>
                            <li>
                                <Link to={"#"}>Cây Hoa sứ</Link> 
                            </li>
                        </ul>
                    </div>
                     <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 hero__search_container">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì?"></input>
                                    <button type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero__search__phone__text">
                                    <p>0983830756</p>  
                                    <span> Hỗ trợ 24/7</span> 
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            <div className="hero__text">
                                <span>Cây Bonsai </span>
                                <h2>
                                    Đa dạng <br/>
                                    các loại
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary-btn">
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </>
       
    );
};
export default memo(Header);