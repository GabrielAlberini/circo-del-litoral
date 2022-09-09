import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./frontend/views/Home/Home";
import { Galeria } from "./frontend/views/Galeria/Galeria";
import { QuienesSomos } from "./frontend/views/QuienesSomos/QuienesSomos";
import { Animaciones } from "./frontend/views/Animaciones/Animaciones";
import { Intervenciones } from "./frontend/views/Intervenciones/Intervenciones";
import { Shows } from "./frontend/views/Shows/Shows";
import { Festivales } from "./frontend/views/Festivales/Festivales";
import { Formacion } from "./frontend/views/Formacion/Formacion";
import { Novedades } from "./frontend/views/Novedades/Novedades";
import { Contacto } from "./frontend/views/Contacto/Contacto";
import { NotFound } from "./frontend/views/NotFound/NotFound";
import { DashboardLogin } from "./frontend/login/views/DashboardLogin";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
          <Route path="/animaciones" element={<Animaciones />}></Route>
          <Route path="/intervenciones" element={<Intervenciones />}></Route>
          <Route path="/shows" element={<Shows />}></Route>
          <Route path="/festivales" element={<Festivales />}></Route>
          <Route path="/formacion" element={<Formacion />}></Route>
          <Route path="/novedades" element={<Novedades />}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/admin" element={<DashboardLogin />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
