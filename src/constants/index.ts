import i18next from "@/utils/i18n";

export const statusInfo = {
  'delivered': "var(--delivered-color)",
  'cancelled': "var(--danger-color)",
  'delivered_to_sender': "var(--not-delivered-color)",
}

export const getTranslatedText = (status: TStatus) => {
  return `${i18next.t(status)}`
}

export type TStatus = keyof typeof statusInfo;