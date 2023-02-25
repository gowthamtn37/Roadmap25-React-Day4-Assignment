import { Footer } from "./Footer";
import { MainContent } from "./MainContent";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { LogoutModal } from "./LogoutModal";

export function Dashboard() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <Topbar />
          <MainContent />
          <Footer />
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="Topbar">
        <i className="fas fa-angle-up"></i>
      </a>

      <LogoutModal />
    </div>
  );
}
