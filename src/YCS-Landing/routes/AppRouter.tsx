import { Routes, Route} from "react-router-dom"

import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { AppLayout } from '../layout/AppLayout';

export const AppRouter = () => {
  return (
    <>
      <AppLayout/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </>
  )
}
