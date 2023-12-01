import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";

import LoginPage from "./pages/auth/loginPage";

function App({initiallyLogged}) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false)
  return (
    <div className="App">
      {isLogged ? <AdvertsPage onLogout={handleLogout}/> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
