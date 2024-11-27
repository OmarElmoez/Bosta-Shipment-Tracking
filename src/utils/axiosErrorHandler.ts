import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    return error.response?.data.status;
  } else {
    return "An unexpected error occurred";
  }
};

export default axiosErrorHandler;