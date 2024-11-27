import formatDate from "@/utils/formatDate.ts";
import styles from './transitEvents.module.css'
import {useAppSelector} from "@/store/hooks.ts";
import {useTranslation} from "react-i18next";

const {shipment_details, en} = styles;
const TransitEvents = () => {

  const {TransitEvents: Events} = useAppSelector(state => state.shipments);

  const {t, i18n} = useTranslation();

  return (
    <section className={`${shipment_details} ${i18n.resolvedLanguage === 'en' ? en : ''}`}>
      <article>
        <h4>{t('shipmentDetails')}</h4>
        <table>
          <thead>
          <tr>
            <th>{t('branch')}</th>
            <th>{t('history')}</th>
            <th>{t('time')}</th>
            <th>{t('details')}</th>
          </tr>
          </thead>
          <tbody>
          {Events.map(event => {
            return (
              <tr>
                <td>{event.hub || "---"}</td>
                <td>{formatDate(event.timestamp).standardDate}</td>
                <td
                  style={{direction: 'ltr', textAlign: i18n.resolvedLanguage === 'en' ? 'left' : 'right'}}>{formatDate(
                  event.timestamp).time}</td>
                <td>{event.state}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default TransitEvents;