import Landing from "./Landing.jsx";
import {useEffect} from "react";

function Header(){
    useEffect(() => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        document.querySelectorAll(".page-scroll").forEach((link) => {
            link.addEventListener("click", () => {
                navbarToggler.classList.remove("active");
                navbarCollapse.classList.remove("show");
            });
        });

        navbarToggler.addEventListener("click", () => {
            navbarToggler.classList.toggle("active");
            navbarCollapse.classList.toggle("show");
        });
    }, []);

    return (
        <section className="header_area">
            <div className="navbar-area bg-white">
                <div className="container relative">
                    <div className="row items-center">
                        <div className="w-full">
                            <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                                <a className="navbar-brand mr-5" href="index.html">
                                    <img src="src/assets/images/logo.svg" alt="Logo"/>
                                </a>
                                <button className="block navbar-toggler focus:outline-none lg:hidden" type="button"
                                        data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div
                                    className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none"
                                    id="navbarOne">
                                    <ul id="nav"
                                        className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll active" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#about">About</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#work">Projects</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#pricing">Pricing</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#blog">Blog</a>
                                        </li>
                                        <li className="nav-item ml-5 lg:ml-11">
                                            <a className="page-scroll" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Landing/>
        </section>
    )
}

export default Header