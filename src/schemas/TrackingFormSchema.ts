import {z} from "zod";
import i18next from '@/utils/i18n'


const TrackingFormSchema = z.object({
  trackingNumber: z.string()
  .min(1, i18next.t('emptyErrorMsg'))
  .min(7, i18next.t('minErrorMsg'))
  .max(8, i18next.t('maxErrorMsg'))
})

export type TTrackingForm = z.infer<typeof TrackingFormSchema>

export default TrackingFormSchema