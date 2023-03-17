import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppDashboard from './Components/Dashboard/appDashboard';
import AppWidgets from './Components/Widgets/appWidgets';
import AppFooter from './Shared/Components/appFooter';
import AppHeader from './Shared/Components/appHeader';
import AppMenu from './Shared/Components/appMenu';
import AppSetting from './Shared/Components/appSetting';

function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/Widgets" element={<AppDashboard />} />
          <Route path="/" element={<AppWidgets />} />
        </Routes>
      </BrowserRouter>
      <AppFooter />
      {/* <AppSetting /> */}
    </div>
  );
}

export default App;
