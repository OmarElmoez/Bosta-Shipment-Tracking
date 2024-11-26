import CheckIcon from '@/assets/check.svg?react';
import styles from './trackingBar.module.css';

const {steps_container, bottom_bar, step_box, top_bar} = styles;

type TShipmentStatus = "delivered" | "cancelled" | "not-delivered";

type TTrackingBarProps = {
  status: TShipmentStatus;
}

const statusColors = {
  'delivered': "var(--delivered-color)",
  'cancelled': "var(--danger-color)",
  'not-delivered': "var(--not-delivered-color)",
}

const TrackingBar = ({status}: TTrackingBarProps) => {

  const steps = [
    {
      icon: <CheckIcon color={statusColors[status]}/>,
      text: "تم إنشاء الشحنة"
    },
    {
      icon: <CheckIcon color={statusColors[status]}/>,
      text: "تم استلام الشحنة من التاجر"
    },
    {
      icon: <CheckIcon color={statusColors[status]}/>,
      text: "تم استلام الشحنة من المتجر"
    },
    {
      icon: <CheckIcon color={status === 'delivered' ? statusColors['delivered'] : "var(--info-text-color)"}/>,
      text: "تم التسليم"
    },
  ]

  return (
    <>
      <article className={steps_container}>
        {steps.map((step) => (
          <div className={step_box}>
            {step.icon}
            <p>{step.text}</p>
          </div>
        ))}
        <div className={bottom_bar}></div>
        <div className={top_bar}
             style={{backgroundColor: statusColors[status], width: status === 'delivered' ? "100%" : "68%"}}></div>
      </article>
    </>
  )
}

export default TrackingBar