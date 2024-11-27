export const statusInfo = {
  'delivered': {
    color: "var(--delivered-color)",
    text: "تم تسليم الشحنة"
  },
  'cancelled': {
    color: "var(--danger-color)",
    text: "تم إلغاء الشحنة"
  },
  'delivered_to_sender': {
    color: "var(--not-delivered-color)",
    text: "لم يتم تسليم الشحنة"
  },
}

export type TStatus = keyof typeof statusInfo;