import {ReactNode, Suspense} from "react";
import {LoadingIndicator} from "@/components";

const pageSuspense = ({children}: {children: ReactNode}) => {
  return (
    <Suspense fallback={<div className="loadingBox">
      <LoadingIndicator/>
    </div>}>
      {children}
    </Suspense>
  )
}

export default pageSuspense;