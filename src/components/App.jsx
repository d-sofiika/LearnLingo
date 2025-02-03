import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() => import("../pages/TeachersPage/TeachersPage.jsx"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage/FavoritesPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />}/>
          <Route path="*" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;