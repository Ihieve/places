import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import MapScreen from "./pages/MapScreen";
import PlaceDetails from "./pages/PlaceDetails";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";

import MainLayout from "./component/layout/MainLayout";

export default function App() {
  return (
   
      <Routes>
        {/* Pages without BottomNav */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/settings" element={<Settings />} />

        {/* Pages with BottomNav */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/explore"
          element={
            <MainLayout>
              <Explore />
            </MainLayout>
          }
        />
        <Route
          path="/favorites"
          element={
            <MainLayout>
              <Favorites />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
  
  );
}