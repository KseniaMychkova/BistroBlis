import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import style from './style.module.css'
import Image from "next/image";
import btnAll from '../../public/btnAll.png';
import btnLemonade from '../../public/btnLemonade.png';
import btnMainCources from '../../public/btnMainCourses.png';
import btnDesserts from '../../public/btnDesserts.png';
import eggs from '../../public/eggs.png';
import pizza from '../../public/pizza.png';
import coctail from '../../public/coctail.png';
import cake from '../../public/cake.png';
import lemonade from '../../public/lemonade.png';
import icecream from '../../public/icecream.png';
import burger from '../../public/burger.png';
import waffles from '../../public/waffles.png';



function Menu() {
    const btnMenu = [{ id: 1, img: btnAll, title: 'ALL' },
    { id: 2, img: btnLemonade, title: 'Lemonade' },
    { id: 3, img: btnMainCources, title: 'Main courses' },
    { id: 4, img: btnDesserts, title: 'Dessert' }
    ]
    const menu = [
        { id: 1, img: eggs, price: 9.99, title: 'Fried Eggs', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 2, img: pizza, price: 15.99, title: 'Hawaiian Pizza', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 3, img: coctail, price: 7.25, title: 'Martinez Cocktail', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 4, img: cake, price: 20.99, title: 'Butterscotch Cake', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 5, img: lemonade, price: 5.89, title: 'Mint Lemonade', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 6, img: icecream, price: 18.05, title: 'Chocolate Icecream', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 7, img: burger, price: 12.55, title: 'Cheese Burger', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
        { id: 8, img: waffles, price: 12.99, title: 'Classic Waffles', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' }]

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
                    {menu.map((el, index) => <div className={style.menuItems} key={index}>
                        <Image src={el.img} alt=''/>
                        <div className={style.wrapperText}>
                            <p className={style.price}>$  {el.price}</p>
                            <h4>{el.title}</h4>
                            <p className={style.description}>{el.description}</p>

                        </div>
                    </div>)}


                </div>

            </section>

            <Footer />
        </>
    )
}

export default Menu