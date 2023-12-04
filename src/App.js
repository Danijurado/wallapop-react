import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvertsPage from "./pages/adverts/newAdvertsPage";

import LoginPage from "./pages/auth/loginPage";

function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      {isLogged ? (
        <>
        <AdvertsPage onLogout={handleLogout} />
        <NewAdvertsPage />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
