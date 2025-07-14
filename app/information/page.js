import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer'
import style from './style.module.css'
import Image from "next/image";
import contactsInfoImg from '../../public/contactsInfo.png'
import statisticBlockImg from '../../public/statisticBlockImg.jpg'

export default function Home() {

    const statisticData = [
        { id: 1, name: 'Locations', counter: '3' },
        { id: 2, name: 'Founded', counter: '1995' },
        { id: 3, name: 'Staff Members', counter: '65+' },
        { id: 4, name: 'Satisfied Customers', counter: '100%' }
    ]
    return (
        <>
            <Header />
            <section className={style.informationAboutUs}>
                <div className={style.infoHealthy}>
                    <div className={style.wrapper}>
                        <div className={style.imgBlock}>
                            <Image src={contactsInfoImg} alt='' />
                        </div>
                        <div className={style.textBlock}>
                            <h2 className={style.title}>We provide healthy food for your family.</h2>
                            <p className={style.boldestText}>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palatez</p>
                            <p className={style.text}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>
                    </div>
                </div>
                <div className={style.infoGuest}>
                    <div className={style.statisticWrapper}>
                        <div className={style.statisticDescroption}>
                            <h2 className={style.title}>A little information for our valuable guest</h2>
                            <p className={style.text}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        </div>
                        <div className={style.statistic}>
                            {statisticData.map((el, index) => <div className={style.statisticBlock} key={index}>
                                <p className={style.counter}>{el.counter}</p>
                                <p className={style.nameOfCounter}>{el.name}</p>
                            </div>)}
                        </div>
                    </div>
                    <Image src={statisticBlockImg} alt='' />
                </div>
            </section>
            <Footer />
        </>
    );
}
