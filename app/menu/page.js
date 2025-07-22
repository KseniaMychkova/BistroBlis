'use client'
import style from './style.module.css'
import Image from "next/image";
import btnAll from '../../public/btnAll.png';
import btnLemonade from '../../public/btnLemonade.png';
import btnMainCources from '../../public/btnMainCourses.png';
import btnDesserts from '../../public/btnDesserts.png';
import menuItems from "@/storage";
import { useState } from 'react';

function Menu() {
    const [menuFiltered, setMenuFiltered] = useState(menuItems)
    const [activeCategory, setActiveCategory] = useState('')

    const btnMenu = [{ id: 1, img: btnAll, title: 'ALL' },
    { id: 2, img: btnLemonade, title: 'Lemonade' },
    { id: 3, img: btnMainCources, title: 'Main courses' },
    { id: 4, img: btnDesserts, title: 'Dessert' }
    ]


    function filteredCategory(category) {
        setActiveCategory(category)
        if (category.toLowerCase() === 'lemonade') {
            setMenuFiltered(menuItems.filter(el => el.category.toLowerCase() === 'lemonade'))
        }
        else if (category.toLowerCase() === 'dessert') {
            setMenuFiltered(menuItems.filter(el => el.category.toLowerCase() === 'dessert'))
        }
        else if (category.toLowerCase() === 'main courses') {
            setMenuFiltered(menuItems.filter(el => el.category.toLowerCase() === 'main courses'))
        }
        else if (category.toLowerCase() === 'all') {
            setMenuFiltered(menuItems)
        }
    }

    return (
        <section className={style.ourMenu}>
            <div className={style.wrapper}>
                <div className={style.aboutMenu}>
                    <h2>Our Menu</h2>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <div className={style.btnCategory}>
                    {btnMenu.map((el, index) => <div onClick={() => filteredCategory(el.title)} key={index} className={`${style.btn}${activeCategory === el.title.toLowerCase() ? style.selected : ''}`}>
                        <div className={style.imgBtn}>
                            <Image src={el.img} alt='' />
                        </div>
                        <p>{el.title}</p>
                    </div>)}
                </div>
            </div>
            <div className={style.menu}>
                {menuFiltered.map((el, index) => <a href={`/menu/${el.id}`} key={index}>
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
    )
}

export default Menu