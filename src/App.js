import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvertsPage from "./pages/adverts/newAdvertsPage";
import { useAuth } from "./pages/auth/context";
import LoginPage from "./pages/auth/loginPage";

function App() {
  const { isLogged } = useAuth();
  return (
    <div className="App">
      {isLogged ? (
        <>
          <AdvertsPage />
          {/*<NewAdvertsPage />*/}
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
