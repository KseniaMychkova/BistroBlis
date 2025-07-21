'use client'

import style from './style.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'


function Basket() {
    const [productsCard, setProductsCard] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('arrayItems')  || []);
        setProductsCard(data)
    }, [])

    function clearBasket () {
        localStorage.setItem('arrayItems', JSON.stringify([]))
        setProductsCard([])
    }

    return (
        <>
            <Header />

            <section className={style.basket}>
                <h1>Basket</h1>
                <div className={style.wrapper}>
                    <div className={style.container}>
                        {productsCard.map((el, index) => <a href={`/menu/${el.id}`} key={index}>
                            <div className={style.menuItems} >
                                <Image src={el.imgPath} alt='' priority/>
                                <div className={style.wrapperText}>
                                    <p className={style.price}>$  {el.price}</p>
                                    <h4>{el.name}</h4>
                                    <p className={style.description}>{el.description}</p>
                                </div>
                            </div>
                        </a>)}
                    </div>
                    {productsCard.length > 0 ? <button onClick={clearBasket}>Clear Basket</button> : null}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Basket