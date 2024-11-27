import {TrackingBar} from "@/components";
import styles from "./shipmentInfo.module.css";
import {useAppSelector} from "@/store/hooks.ts";
import formatDate from "@/utils/formatDate.ts";
import {statusInfo, TStatus} from "@/constants";

const {info_container, info_box, progress_container} = styles;

const ShipmentInfo = () => {

  const {TrackingNumber, PromisedDate, CurrentStatus: {state, timestamp}} = useAppSelector(state => state.shipments);

  return (
    <div>
      <section className={info_container}>
        <article className={info_box}>
          <p>رقم الشحنة {TrackingNumber}</p>
          <p style={{ color: statusInfo[state.toLowerCase() as TStatus].color }}>{statusInfo[state.toLowerCase() as TStatus].text}</p>
        </article>

        <article className={info_box}>
          <p>آخر تحديث</p>
          <p>{formatDate(timestamp).specificFormat}</p>
        </article>

        <article className={info_box}>
          <p>اسم التاجر</p>
          <p>SOUQ.COM</p>
        </article>

        <article className={info_box}>
          <p>موعد التسليم خلال</p>
          <p>{formatDate(PromisedDate).arabicDate}</p>
        </article>

      </section>
      <section className={progress_container}>
        <TrackingBar status={state.toLowerCase() as TStatus} />
      </section>
    </div>
  )
}

export default ShipmentInfo