import CheckIcon from '@/assets/check.svg?react';
import styles from './trackingBar.module.css';
import {statusInfo, TStatus} from "@/constants";

const {steps_container, bottom_bar, step_box, top_bar, reason} = styles;

type TTrackingBarProps = {
  status: TStatus;
}



const TrackingBar = ({status}: TTrackingBarProps) => {

  const steps = [
    {
      icon: <CheckIcon color={statusInfo[status].color}/>,
      text: "تم إنشاء الشحنة"
    },
    {
      icon: <CheckIcon color={statusInfo[status].color}/>,
      text: "تم استلام الشحنة من التاجر"
    },
    {
      icon: <CheckIcon color={statusInfo[status].color}/>,
      text: "تم استلام الشحنة من المتجر"
    },
    {
      icon: <CheckIcon color={status === 'delivered' ? statusInfo['delivered'].color : "var(--info-text-color)"}/>,
      text: "تم التسليم"
    },
  ]

  return (
    <>
      <article className={steps_container}>
        {steps.map((step, idx) => (
          <div className={step_box}>
            {step.icon}
            <p>{step.text}</p>
            {(status === 'cancelled' && idx === 2) && <span className={reason} style={{ color: statusInfo[status].color }}>تم إلغاء الشحنة من التاجر</span>}
            {(status === 'delivered_to_sender' && idx === 2) && <span className={reason} style={{ color: statusInfo[status].color }}>العميل غير متواجد في العنوان</span>}
          </div>
        ))}
        <div className={bottom_bar}></div>
        <div className={top_bar}
             style={{backgroundColor: statusInfo[status].color, width: status === 'delivered' ? "100%" : "68%"}}></div>
      </article>
    </>
  )
}


export default TrackingBar