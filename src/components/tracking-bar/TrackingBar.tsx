import CheckIcon from '@/assets/check.svg?react';
import styles from './trackingBar.module.css';
import {statusInfo, TStatus} from "@/constants";
import {useTranslation} from "react-i18next";

const {steps_container, bottom_bar, step_box, top_bar, reason, en} = styles;

type TTrackingBarProps = {
  status: TStatus;
}


const TrackingBar = ({status}: TTrackingBarProps) => {

  const {t, i18n} = useTranslation();

  const steps = [
    {
      icon: <CheckIcon color={statusInfo[status]}/>,
      text: `${t('stepOne')}`
    },
    {
      icon: <CheckIcon color={statusInfo[status]}/>,
      text: `${t('stepTwo')}`
    },
    {
      icon: <CheckIcon color={statusInfo[status]}/>,
      text: `${t('stepThree')}`
    },
    {
      icon: <CheckIcon color={status === 'delivered' ? statusInfo['delivered'] : "var(--info-text-color)"}/>,
      text: `${t('stepFour')}`
    },
  ]

  return (
    <>
      <article className={steps_container}>
        {steps.map((step, idx) => (
          <div className={`${step_box} ${i18n.resolvedLanguage === 'en' ? en : ''}`}>
            {step.icon}
            <p>{step.text}</p>
            {(status === 'cancelled' && idx === 2) &&
                <span className={reason} style={{color: statusInfo[status]}}>{t('cancelledFromMerchant')}</span>}
            {(status === 'delivered_to_sender' && idx === 2) &&
                <span className={reason} style={{color: statusInfo[status]}}>{t('clientNotFound')}</span>}
          </div>
        ))}
        <div className={bottom_bar}></div>
        <div className={`${top_bar} ${i18n.resolvedLanguage === 'en' ? en : ''}`}
             style={{
               backgroundColor: statusInfo[status],
               width: status === 'delivered' ? "100%" : "63%"
             }}></div>
      </article>
    </>
  )
}


export default TrackingBar