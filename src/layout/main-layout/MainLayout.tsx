import {Header} from "@/components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <section className="container">
        <Outlet />
      </section>
    </main>
  )
}

export default MainLayout