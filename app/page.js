import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer'
import Image from "next/image"
import style from './style.module.css'
import Breakfast from '../public/iconBreakfast.svg'
import Dishes from '../public/iconDishes.svg'
import Drinks from '../public/iconDrinks.svg'
import Desserts from '../public/iconDesserts.svg'
import Caterings from '../public/caterings.png'
import Birthdays from '../public/birthdays.png'
import Weddings from '../public/weddings.png'
import Events from '../public/events.png'


export default function Home() {
  const menuItem = [
    { id: 1, img: Breakfast, title: 'Breakfast', description: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { id: 2, img: Dishes, title: 'Main Dishes', description: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { id: 3, img: Drinks, title: 'Drinks', description: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { id: 4, img: Desserts, title: 'Desserts', description: 'In the new era of technology we look in the future with certainty and pride for our life.' }
  ]

  const ourServices = [
    { id: 1, img: Caterings, title: 'Caterings', description: 'In the new era of technology we look in the future with certainty for life.' },
    { id: 1, img: Birthdays, title: 'Birthdays', description: 'In the new era of technology we look in the future with certainty for life.' },
    { id: 1, img: Weddings, title: 'Weddings', description: 'In the new era of technology we look in the future with certainty for life.' },
    { id: 1, img: Events, title: 'Events', description: 'In the new era of technology we look in the future with certainty for life.' }
  ]


  return (
    <>
      <Header />
      <main>
        <section className={style.backgroundImg}>
          <div className={style.main}>
            <h1>Best food for <br />your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className={style.buttons}>
              <button> Book A Table</button>
              <button>Explore Menu</button>
            </div>
          </div>
        </section>
        <section className={style.reviewProductsItem}>
          <h2>Browse Our Menu</h2>
          <div className={style.wrapper}>

            {menuItem.map((el, index) => <div key={index} className={style.items}>
              <Image src={el.img} alt={el.title} />
              <div className={style.itemText}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
              </div>
              <button>Explore Menu</button>
            </div>)}
          </div>
        </section>

        <section className={style.services}>
          <div className={style.containerServices}>
            <h2>We also offer unique services for your events</h2>
            <div className={style.wrapper}>
              {ourServices.map((el, index) =>
                <div key={index} className={style.itemServices}>
                  <Image src={el.img} alt={el.title} />
                  <div className={style.itemServiceText}>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                  </div>
                </div>)}

            </div>

          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
