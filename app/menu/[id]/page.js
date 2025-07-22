'use client'

import style from './style.module.css'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import menuItems from '@/storage'
import attentionImg from '@/public/attention.png'
import { useState } from 'react'


function ProductCard() {
  const { id } = useParams()
  const result = menuItems.filter(el => el.id == id)
  const [size, setSize] = useState(null)
  const [totalPrice, setTotalPrice] = useState(result[0].price)

  function addToBasket() {
    const basket = JSON.parse(localStorage.getItem('arrayItems')) || [];
    const itemToAdd = {
      ...result[0],
      size,
      calculatedPrice: size ?
        result[0].price * result[0].sizes.find(s => s.size === size).quantity :
        result[0].price
    }
    basket.push(itemToAdd)
    localStorage.setItem('arrayItems', JSON.stringify(basket))
  }

  const handleSizeSelect = (size) => {
    setSize(size)
    const selectedSizeData = result[0].sizes.find(s => s.size === size)
    setTotalPrice(result[0].price * selectedSizeData.quantity)
  }



  return (
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
              {result[0].sizes.map((el, i) => <div onClick={() => handleSizeSelect(el.size)} className={`${style.btnWrapper} ${size === el.size ? style.selected : ''}`} key={i}>
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
            <p>{totalPrice.toFixed(2)}</p>
          </div>
          <div className={style.attention}>
            <Image src={attentionImg} alt='' />
            <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          </div>
        </div>
        <a href='/basket'><button onClick={addToBasket}>Add to Order</button></a>
      </div>
    </section>
  )
}

export default ProductCard