import { useEffect, useState, useRef } from "react";
import logo from "../../images/logo.png";

function Header() {
    const [navScroll, setNavScroll] = useState(false);
    const hamburgerMenuRef = useRef(null);
    const navMenuRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const nav = navRef.current;
            const navHeight = nav.clientHeight;

            if (window.scrollY > navHeight) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        };

        const handleHamburgerClick = () => {
            const hamburgerMenu = hamburgerMenuRef.current;
            const navMenu = navMenuRef.current;
            const nav = navRef.current;

            nav.classList.toggle('nav-open');
            hamburgerMenu.classList.toggle('open');
            if (navMenu.classList.contains('show')) {
                navMenu.style.height = '0';
                navMenu.classList.remove('show');
            } else {
                navMenu.style.height = `${navMenu.scrollHeight}px`;
                navMenu.classList.add('show');
            }
        };

        const hamburgerMenuElement = hamburgerMenuRef.current;
        if (hamburgerMenuElement) {
            hamburgerMenuElement.addEventListener('click', handleHamburgerClick);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            hamburgerMenuElement.removeEventListener('click', handleHamburgerClick);
        }
    }, []);
    return (
        <>
            <header id="navbar">
                <nav ref={navRef} className={`nav ${navScroll ? 'nav-scroll' : ''}`} id="main-nav">
                    <div className="nav-div container">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="nav-menu" ref={navMenuRef} id="nav-menu">
                            <ul>
                                <li>
                                    <a href="#hero">Home</a>
                                    <a href="#classes">Classes</a>
                                    <a href="#trainers">Trainer</a>
                                    <a href="#reviews">Review</a>
                                    <button href="#joinus">JOIN US</button>
                                </li>
                            </ul>
                        </div>
                        <div className="hamburger-menu" ref={hamburgerMenuRef} id="hamburger-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;