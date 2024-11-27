import CloseIcon from '@/assets/close.svg?react';
import SearchIcon from '@/assets/search.svg?react';
import styles from './trackingForm.module.css'
import useModal from "@/components/hooks/useModal.ts";
import {useForm} from "react-hook-form";
import TrackingFormSchema, {TTrackingForm} from "@/schemas/TrackingFormSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {actGetShipmentDetails} from "@/store/shipments-slice/shipmentsSlice.ts";
import {useNavigate} from "react-router-dom";
import {LoadingIndicator} from "@/components";

const {form_header, input_container} = styles;

const TrackingForm = () => {

  const {closeModal} = useModal();

  const dispatch = useAppDispatch();

  const {loading, error} =  useAppSelector(state => state.shipments);
  
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}, reset} = useForm<TTrackingForm>({
      resolver: zodResolver(TrackingFormSchema)
    }
  );

  const onClose = () => {
    closeModal();
    reset();
  }

  const onSubmit = (data: TTrackingForm) => {
    dispatch(actGetShipmentDetails({trackingNumber: data.trackingNumber})).unwrap().then(() => {
      void navigate(`tracking-details/${data.trackingNumber}`, {replace: true});
      onClose();
    })
    .catch((error) => {
      console.error('Failed to fetch shipment details:', error);
    });
  }

  return (
    <>
      {loading === 'pending' && <div className="loadingBox"><LoadingIndicator /></div>}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <header className={form_header}>
        <span>تتبع شحنتك</span>
        <button type="button" onClick={onClose} style={{display: 'flex'}}>
          <CloseIcon/>
        </button>
      </header>

      <section className={input_container}>
        <input type='number' {...register('trackingNumber')} placeholder="رقم التتبع"/>
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