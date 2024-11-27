import {TrackingBar} from "@/components";
import styles from "./shipmentInfo.module.css";
import {useAppSelector} from "@/store/hooks.ts";
import formatDate from "@/utils/formatDate.ts";
import {statusInfo, TStatus} from "@/constants";
import {useTranslation} from "react-i18next";

const {info_container, info_box, progress_container} = styles;

const ShipmentInfo = () => {

  const {TrackingNumber, PromisedDate, CurrentStatus: {state, timestamp}} = useAppSelector(state => state.shipments);

  const {t} = useTranslation();

  return (
    <div>
      <section className={info_container}>
        <article className={info_box}>
          <p>{t('shipmentNumber')} {TrackingNumber}</p>
          <p style={{ color: statusInfo[state.toLowerCase() as TStatus].color }}>{statusInfo[state.toLowerCase() as TStatus].text}</p>
        </article>

        <article className={info_box}>
          <p>{t('lastUpdate')}</p>
          <p>{formatDate(timestamp).specificFormat}</p>
        </article>

        <article className={info_box}>
          <p>{t('merchant')}</p>
          <p>SOUQ.COM</p>
        </article>

        <article className={info_box}>
          <p>{t('deliveryTime')}</p>
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