import IssueIcon from '@/assets/issue.png';
import styles from './trackingDetails.module.css';
import {ShipmentInfo, TransitEvents} from "@/pages/tracking-details/sections";
import {useAppSelector} from "@/store/hooks.ts";

const {address, report_issue, text_box, bottom_div} = styles;

const TrackingDetails = () => {

  const {SupportPhoneNumbers} = useAppSelector(state => state.shipments);

  return (
    <>
      <ShipmentInfo />

      <div className={bottom_div}>

        <TransitEvents />

        <section>
          <h4 style={{fontWeight: '600'}}>عنوان التسليم</h4>
          <div className={address}>
            امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22
          </div>
          <div className={report_issue}>
            <img src={IssueIcon} alt="image"/>
            <div className={text_box}>
              <p>هل يوجد مشكلة في شحنتك ؟!</p>
              <button onClick={() => window.location.href = `tel:${SupportPhoneNumbers[0]}`}>إبلاغ عن مشكلة</button>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default TrackingDetails;