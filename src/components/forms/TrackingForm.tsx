import CloseIcon from '@/assets/close.svg?react';
import SearchIcon from '@/assets/search.svg?react';
import styles from './trackingForm.module.css'
import useModal from "@/components/hooks/useModal.ts";
import {useForm} from "react-hook-form";
import TrackingFormSchema, {TTrackingForm} from "@/schemas/TrackingFormSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {actGetShipmentDetails, resetError} from "@/store/shipments-slice/shipmentsSlice.ts";
import {useNavigate} from "react-router-dom";
import {LoadingIndicator} from "@/components";
import {useTranslation} from "react-i18next";

const {form_header, input_container, en} = styles;

const TrackingForm = () => {

  const {closeModal} = useModal();

  const {t, i18n} = useTranslation();

  const dispatch = useAppDispatch();

  const {loading, error} = useAppSelector(state => state.shipments);

  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}, reset} = useForm<TTrackingForm>({
      resolver: zodResolver(TrackingFormSchema)
    }
  );

  const onClose = () => {
    closeModal();
    reset();
    dispatch(resetError())
  }

  const onSubmit = (data: TTrackingForm) => {
    dispatch(actGetShipmentDetails({trackingNumber: data.trackingNumber})).unwrap().then((res) => {
      if (res.TransitEvents.length > 0) {
        void navigate(`tracking-details/${data.trackingNumber}`, {replace: true});
        onClose();
      }
    })
    .catch((error) => {
      console.error('Failed to fetch shipment details:', error);
    });
  }

  return (
    <>
      {loading === 'pending' && <div className="loadingBox"><LoadingIndicator/></div>}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className={form_header}>
          <span>{t('trackShipment')}</span>
          <button type="button" onClick={onClose} style={{display: 'flex'}}>
            <CloseIcon/>
          </button>
        </header>

        <section className={`${input_container} ${i18n.resolvedLanguage === 'en' ? en : ''}`}>
          <input type='number' {...register('trackingNumber')} placeholder={t('trackingNumber')}/>
          <button>
            <SearchIcon/>
          </button>
        </section>
        <p className="error_msg">{errors.trackingNumber?.message}</p>
        {(error && !errors.trackingNumber?.message) && <p className="error_msg">{error}</p>}
      </form>
    </>
  )
}

export default TrackingForm;