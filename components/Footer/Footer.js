import style from './style.module.css'
import Image from 'next/image'
import LogoFooter from '../../public/LogoFooter.png'
import instaImg1 from '../../public/instagram1.png'
import instaImg2 from '../../public/instagram2.png'
import instaImg3 from '../../public/instagram3.png'
import instaImg4 from '../../public/instagram4.png'
// import instagram from '../../public/instargram.svg'

function Footer() {

    const pages = ['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'];
    const utilityPages = ['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'];

    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <Image src={LogoFooter} alt='logo' />
                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                </div>
                <div className={style.navigationFooter}>
                    <div className={style.pages}>
                        <h4>Pages</h4>
                        <nav className={style.navPages}>
                            {pages.map((el, index) => <div key={index}><button>{el}</button></div>)}
                        </nav>
                    </div>
                    <div className={style.pages}>
                        <h4>Utility Pages</h4>
                        <nav className={style.navPages}>
                             {utilityPages.map((el, index) => <div key={index}><button>{el}</button></div>)}
                        </nav>
                    </div>
                </div>
                <div className={style.followOnInstagram}>
                    <h4>Follow Us On Instagram</h4>
                    <div className={style.imgOnInstagram}>
                        <Image src={instaImg1} alt='' className={style.img} />
                        <Image src={instaImg2} alt='' className={style.img} />
                        <Image src={instaImg3} alt='' className={style.img} />
                        <Image src={instaImg4} alt='' className={style.img} />
                    </div>
                    <a className={style.iconInstagram} href='#'></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer