import styles from './trackingDetails.module.css';
import {TrackingBar} from "@/components";

const {info_container, info_box, progress_container} = styles;

const TrackingDetails = () => {
  return (
    <>
      <section className={info_container}>

        <article className={info_box}>
          <p>رقم الشحنة 84043113</p>
          <p>تم تسليم الشحنة</p>
        </article>

        <article className={info_box}>
          <p>آخر تحديث</p>
          <p>الأثنين 06/04/2024</p>
        </article>

        <article className={info_box}>
          <p>اسم التاجر</p>
          <p>SOUQ.COM</p>
        </article>

        <article className={info_box}>
          <p>موعد التسليم خلال</p>
          <p>3 يناير 2024</p>
        </article>

      </section>

      <section className={progress_container}>
        <TrackingBar status="cancelled" />
      </section>

      <section>
        <article>

        </article>
      </section>
    </>
  )
}

export default TrackingDetails;