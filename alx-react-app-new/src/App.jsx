import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header with inline styling */}
      <Header />

      {/* UserProfile with inline styling */}
      <UserProfile
        name="Thendo Mbengeni"
        age={23}
        bio="Media & Tech enthusiast"
      />

      {/* MainContent with inline styling */}
      <MainContent />

      {/* Footer with inline styling */}
      <Footer />
    </div>
  );
}

export default App;

