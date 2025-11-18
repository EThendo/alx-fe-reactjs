import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <UserProfile
        name="Thendo Mbengeni"
        age="23"
        bio="A creative mind with a passion for media, tech, and digital marketing."
      />

      <MainContent />
      <Footer />
    </>
  );
}

export default App;
