import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Landing = lazy(() => import("../containers/pages/Landing"));
const ComponentList = lazy(() => import("../containers/pages/ComponentsList"));
const About = lazy(() => import("../containers/pages/About"));

interface indexProps {}

const AppRoute: React.FC<indexProps> = () => {

    return(
        <BrowserRouter>
          <Suspense>
            <Routes>
                <Route  path="/" element={<Landing/>} />
                <Route  path="/components" element={<ComponentList/>} />
                <Route  path="/about" element={<About/>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    );
};

export default AppRoute;