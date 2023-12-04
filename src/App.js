import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvertsPage from "./pages/adverts/newAdvertsPage";
import { AuthContext } from "./pages/auth/context";
import LoginPage from "./pages/auth/loginPage";

function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  
  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin
  }

  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? (
          <>
            <AdvertsPage />
            {/*<NewAdvertsPage />*/}
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
