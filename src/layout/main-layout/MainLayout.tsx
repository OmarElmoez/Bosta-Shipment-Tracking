import {Header} from "@/components";
import {Outlet} from "react-router-dom";
import ModalContextProvider from "@/context/ModalContext.tsx";

const MainLayout = () => {
  return (
    <ModalContextProvider>
      <main>
        <Header/>
        <section className="container" style={{ paddingBottom: "2rem" }}>
          <Outlet/>
        </section>
      </main>
    </ModalContextProvider>
  )
}

export default MainLayout