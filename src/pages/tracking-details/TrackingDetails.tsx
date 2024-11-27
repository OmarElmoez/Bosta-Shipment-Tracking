import IssueIcon from '@/assets/issue.png';
import styles from './trackingDetails.module.css';
import {ShipmentInfo, TransitEvents} from "@/pages/tracking-details/sections";
import {useAppSelector} from "@/store/hooks.ts";
import {useTranslation} from "react-i18next";

const {address, report_issue, text_box, bottom_div} = styles;

const TrackingDetails = () => {

  const {SupportPhoneNumbers} = useAppSelector(state => state.shipments);

  const {t} = useTranslation();

  return (
    <>
      <ShipmentInfo />

      <div className={bottom_div}>

        <TransitEvents />

        <section>
          <h4 style={{fontWeight: '600'}}>{t('deliveryAddress')}</h4>
          <div className={address}>
            {t('address')}
          </div>
          <div className={report_issue}>
            <img src={IssueIcon} alt="image"/>
            <div className={text_box}>
              <p>{t('problemQuestion')}</p>
              <button onClick={() => window.location.href = `tel:${SupportPhoneNumbers[0]}`}>{t('problemAction')}</button>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default TrackingDetails;