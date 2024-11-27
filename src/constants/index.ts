import i18next from "@/utils/i18n";

export const statusInfo = {
  'delivered': {
    color: "var(--delivered-color)",
    text: i18next.t('deliveredStatus')
  },
  'cancelled': {
    color: "var(--danger-color)",
    text: i18next.t('cancelledStatus')
  },
  'delivered_to_sender': {
    color: "var(--not-delivered-color)",
    text: i18next.t('notDeliveredStatus')
  },
}

export type TStatus = keyof typeof statusInfo;