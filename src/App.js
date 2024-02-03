import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvertsPage from "./pages/adverts/newAdvertsPage";
import LoginPage from "./pages/auth/loginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import AdvertDetailPage from "./pages/adverts/advertDetailPage";
import RequireAuth from "./pages/auth/components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/adverts"
        element={
          <RequireAuth>
            <AdvertsPage />
          </RequireAuth>
        }
      />
      <Route
        path="/adverts/:advertId"
        element={
          <RequireAuth>
            <AdvertDetailPage />
          </RequireAuth>
        }
      />
      <Route
        path="/adverts/new"
        element={
          <RequireAuth>
            <NewAdvertsPage />
          </RequireAuth>
        }
      />

      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/404" element={<div>404 Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
