import Image from "next/image"
import style from './style.module.css'
import Phone from './img/phone.svg'
import Mail from './img/mail.svg'
import Logo from './img/logo.svg'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.backgrountTop}>
                <div className={style.contacts}>
                    <div className={style.container}>
                        <div className={style.info}>
                            <Image src={Phone} alt='' />
                            <p>(414) 857 - 0107</p>

                        </div>
                        <div className={style.info}>
                            <Image src={Mail} alt='' />
                            <p>yummy@bistrobliss</p>
                        </div>
                    </div>
                    <div className={style.networks}>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
            <div className={style.backgroundBottom}>
                <div className={style.navigation}>
                    <div className={style.logo}>
                        <Image src={Logo} alt='logo'/>
                        <p>Bistro Bliss</p>
                    </div>
                    <nav className={style.actions}>
                        <button>Home</button>
                        <button>About</button>
                        <button>Menu</button>
                    </nav>
                    <button className={style.bookingBtn}>Book A Table</button>

                </div>

            </div>
        </div>
    )
}

export default Header