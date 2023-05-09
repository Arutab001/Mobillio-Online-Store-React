import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import MainPictureImg from '../../images/laptop-transformed-600h.png';
import Lenovo_1Img from '../../images/Lenovo_Gallery/Lenovo_1.jpeg';
import Lenovo_2Img from '../../images/Lenovo_Gallery/Lenovo_2.jpeg';
import Lenovo_3Img from '../../images/Lenovo_Gallery/Lenovo_3.jpeg';
import Lenovo_4Img from '../../images/Lenovo_Gallery/Lenovo_4.jpeg';
import Lenovo_5Img from '../../images/Lenovo_Gallery/Lenovo_5.jpeg';
import Lenovo_6Img from '../../images/Lenovo_Gallery/Lenovo_6.jpeg';
import Lenovo_7Img from '../../images/Lenovo_Gallery/Lenovo_7.jpeg';
import Lenovo_8Img from '../../images/Lenovo_Gallery/Lenovo_8.jpeg';
import Lenovo_9Img from '../../images/Lenovo_Gallery/Lenovo_9.jpeg';
import Lenovo_10Img from '../../images/Lenovo_Gallery/Lenovo_10.jpeg';
import Lenovo_11Img from '../../images/Lenovo_Gallery/Lenovo_11.jpeg';

import styles from './iphone13.module.css'
import '.././home.css'
import '../../style.css'


const LenovoIdeaPad = (props) => {
    return (
        <div className={styles['container']}>
            <Helmet>
                <title>ARTEM</title>
            </Helmet>
            <header data-role="Header" className="home-header max-width-container">
                <div className="home-navbar1">
                    <div className="home-container01">
                    </div>
                    <div className="home-middle">
                        <div className="home-left">
                            <Link to="/catalog" className="home-text navbar-link">
                                SHOP
                            </Link>
                            <span className="navbar-link">SPECIAL</span>
                        </div>
                        <Link to={'/'}>
                            <span className="navbar-logo-title">ARTEM</span>
                        </Link>
                        <div className="home-right">
                            <a href="/#about" className="home-text02 navbar-link">
                                ABOUT
                            </a>
                            <a href="/#contacts" className="home-text03 navbar-link">
                                CONTACT
                            </a>
                        </div>
                    </div>
                    <div className="home-icons">
                        <img
                            alt="iconsbxscart3271299"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                            className="home-image01"
                        />
                        <img
                            alt="iconsbxsheartcircle3271300"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                            className="home-image02"
                        />
                        <img
                            alt="AccountCircle3271301"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                            className="home-image03"
                        />
                    </div>
                </div>
                <div data-role="BurgerMenu" className="home-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path
                            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
            </header>
            <div className={styles['container2']}>
                <div className={styles['container3']}>
                    <div className={styles['container4']}>
                        <div className={styles['container5']}>
                            <h1 className={styles['text04']}>
                                <span>      Lenovo IdeaPad</span>
                                <br></br>
                                <br></br>
                            </h1>

                            <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                                <path
                                    d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                            </svg>
                            <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                                <path
                                    d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                            </svg>
                            <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                                <path
                                    d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                            </svg>
                            <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                                <path
                                    d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                            </svg>
                            <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                                <path
                                    d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                            </svg>
                        </div>
                        <img src={MainPictureImg}  className={styles['Main-picture']} />
                    </div>
                    <h1>500$</h1>
                    <span>
            15.6" 1920 x 1080, TN+Film, 60 Гц, 4 ГБ DDR4, SSD 256 ГБ, видеокарта встроенная, без ОС, цвет крышки серый
          </span>
                    <button className={['button']}>Buy</button>
                </div>
                <div className={styles['gallery']}>
                    <h1 className={styles['text10']}>Галерея</h1>
                    <div className={styles['container7']}>
                        <img src={Lenovo_1Img} />
                        <img src={Lenovo_2Img} />
                        <img src={Lenovo_3Img} />
                        <img src={Lenovo_4Img} />
                        <img src={Lenovo_5Img} />
                        <img src={Lenovo_6Img} />
                        <img src={Lenovo_7Img} />
                        <img src={Lenovo_8Img} />
                        <img src={Lenovo_9Img} />
                        <img src={Lenovo_10Img} />
                        <img src={Lenovo_11Img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LenovoIdeaPad;
