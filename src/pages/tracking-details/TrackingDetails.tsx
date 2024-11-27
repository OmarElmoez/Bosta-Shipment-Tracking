import IssueIcon from '@/assets/issue.png';
import styles from './trackingDetails.module.css';
import {TrackingBar} from "@/components";
import formatDate from "@/utils/formatDate.ts";

const {info_container, info_box, progress_container, shipment_details, address, report_issue, text_box, bottom_div} = styles;

const TrackingDetails = () => {
  return (
    <>
      <div>
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
          <TrackingBar status="cancelled"/>
        </section>
      </div>

      <div className={bottom_div}>
        <section className={shipment_details}>
          <article>
            <h4>تفاصيل الشحنة</h4>
            <table>
              <thead>
              <tr>
                <th>الفرع</th>
                <th>التاريخ</th>
                <th>الوقت</th>
                <th>تفاصيل</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>مدينة نصر</td>
                <td>{formatDate("2024-05-19T13:58:44.866Z").standardDate}</td>
                <td>12:30 pm</td>
                <td>تم انشاء الشحنة</td>
              </tr>
              <tr>
                <td>مدينة نصر</td>
                <td>05/04/2024</td>
                <td>12:30 pm</td>
                <td>تم انشاء الشحنة</td>
              </tr>
              <tr>
                <td>مدينة نصر</td>
                <td>05/04/2024</td>
                <td>12:30 pm</td>
                <td>تم انشاء الشحنة</td>
              </tr>
              <tr>
                <td>مدينة نصر</td>
                <td>05/04/2024</td>
                <td>12:30 pm</td>
                <td>تم انشاء الشحنة</td>
              </tr>
              </tbody>
            </table>
          </article>
        </section>

        <section>
          <h4 style={{fontWeight: '600'}}>عنوان التسليم</h4>
          <div className={address}>
            امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22
          </div>
          <div className={report_issue}>
            <img src={IssueIcon} alt="image"/>
            <div className={text_box}>
              <p>هل يوجد مشكلة في شحنتك ؟!</p>
              <button>إبلاغ عن مشكلة</button>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default TrackingDetails;