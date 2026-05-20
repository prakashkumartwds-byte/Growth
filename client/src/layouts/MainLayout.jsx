import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/common/ChatBot";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />

      {children}

      <Footer />

      <ChatBot />
    </>
  );
};

export default MainLayout;