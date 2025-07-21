import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import style from './style.module.css'
import Image from "next/image";
import btnAll from '../../public/btnAll.png';
import btnLemonade from '../../public/btnLemonade.png';
import btnMainCources from '../../public/btnMainCourses.png';
import btnDesserts from '../../public/btnDesserts.png';
import menuItems from "@/storage";

function Menu() {
    const btnMenu = [{ id: 1, img: btnAll, title: 'ALL' },
    { id: 2, img: btnLemonade, title: 'Lemonade' },
    { id: 3, img: btnMainCources, title: 'Main courses' },
    { id: 4, img: btnDesserts, title: 'Dessert' }
    ]

    return (
        <>
            <Header />

            <section className={style.ourMenu}>
                <div className={style.wrapper}>
                    <div className={style.aboutMenu}>
                        <h2>Our Menu</h2>
                        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                    </div>
                    <div className={style.btnCategory}>
                        {btnMenu.map((el, index) => <div key={index} className={style.btn}>
                            <div className={style.imgBtn}>
                                <Image src={el.img} alt='' />
                            </div>
                            <p>{el.title}</p>
                        </div>)}
                    </div>
                </div>
                <div className={style.menu}>
                    {menuItems.map((el, index) => <a href={`/menu/${el.id}`} key={index}>
                        <div className={style.menuItems} >
                            <Image src={el.imgPath} alt='' />
                            <div className={style.wrapperText}>
                                <p className={style.price}>$  {el.price}</p>
                                <h4>{el.name}</h4>
                                <p className={style.description}>{el.description}</p>
                            </div>
                        </div>
                    </a>)}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Menu