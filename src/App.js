import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";

import LoginPage from "./pages/auth/loginPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true);
  return (
    <div className="App">
      {isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
