import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashboardPage';
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from './pages/NotFoundPage';
import Menu from "./components/Menu";
import GlobalProvider from "./context/GlobalProvider";
const App = () => {
  return <>
    <BrowserRouter>
      <GlobalProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/*" element={<DashBoard />}>
            <Route path="indicadores" element={<p>indicadores</p>} />
            <Route path="metricas" element={<p>metricas</p>} />
          </Route>

          <Route path="/Users" element={<UsersPage />} />
          <Route path="/User/:id" element={<UserPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </>
}

export default App;