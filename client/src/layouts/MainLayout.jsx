import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/common/ChatBot";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <ChatBot />
    </>
  );
};

export default MainLayout;