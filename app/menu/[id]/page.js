'use client'

import style from './style.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import menuItems from '@/storage'
import attentionImg from '@/public/attention.png'


function ProductCard() {
  const { id } = useParams()
  const result = menuItems.filter(el => el.id == id)

  function addToBasket() {
    const basket = JSON.parse(localStorage.getItem('arrayItems')) || []
    basket.push(result[0])
    localStorage.setItem('arrayItems', JSON.stringify(basket))
  }

  return (
    <>
      <Header />
      <section className={style.card}>
        <div className={style.product}>
          <Image src={result[0].imgPath} alt='' />
          <div className={style.info}>
            <div className={style.text}>
              <h2>{result[0].name}</h2>
              <p>{result[0].longDescription}</p>
            </div>
            <div className={style.size}>
              <p>Size:</p>
              <div className={style.sizesBtns}>
                {result[0].sizes.map((el, i) => <div className={style.btnWrapper} key={i}>
                  <div>
                    <p>{el.size}</p>
                  </div>
                  <p>{el.quantity} {el.unit.slice(0, 2)}</p>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.total}>
          <div className={style.totalPrice}>
            <div className={style.price}>
              <p>Total:</p>
              <p>{result[0].price}</p>
            </div>
            <div className={style.attention}>
              <Image src={attentionImg} alt='' />
              <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
            </div>
          </div>
          <a href='/basket'><button onClick={addToBasket}>Add to Order</button></a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProductCard