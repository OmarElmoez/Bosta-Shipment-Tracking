import {z} from "zod";

const TrackingFormSchema = z.object({
  trackingNumber: z.string()
  .min(1, 'برجاء ادخال رقم التتبع')
  .min(7, 'رقم التتبع لا يقل عن 7 ارقام')
  .max(8, 'رقم التتبع لا يزيد عن 8 ارقام')
})

export type TTrackingForm = z.infer<typeof TrackingFormSchema>

export default TrackingFormSchema