import CloseIcon from '@/assets/close.svg?react';
import SearchIcon from '@/assets/search.svg?react';
import styles from './trackingForm.module.css'
import useModal from "@/components/hooks/useModal.ts";
import {useForm} from "react-hook-form";
import TrackingFormSchema, {TTrackingForm} from "@/schemas/TrackingFormSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";

const {form_header, input_container} = styles;

const TrackingForm = () => {

  const {closeModal} = useModal();

  const {register, handleSubmit, formState: {errors}, reset} = useForm<TTrackingForm>({
      resolver: zodResolver(TrackingFormSchema)
    }
  );

  const onClose = () => {
    closeModal();
    reset();
  }

  const onSubmit = (data: TTrackingForm) => {
    console.log(data);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
    </form>
  )
}

export default TrackingForm;