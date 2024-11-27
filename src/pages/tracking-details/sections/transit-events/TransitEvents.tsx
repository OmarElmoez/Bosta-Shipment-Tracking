import formatDate from "@/utils/formatDate.ts";
import styles from './transitEvents.module.css'
import {useAppSelector} from "@/store/hooks.ts";

const {shipment_details} = styles;
const TransitEvents = () => {

  const {TransitEvents: Events} = useAppSelector(state => state.shipments);

  return (
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
            {Events.map(event => {
              return (
                <tr>
                  <td>{event.hub || "---"}</td>
                  <td>{formatDate(event.timestamp).standardDate}</td>
                  <td style={{direction: 'ltr', textAlign: 'right'}}>{formatDate(event.timestamp).time}</td>
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