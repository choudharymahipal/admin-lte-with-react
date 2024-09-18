import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppDashboard from "./Components/Dashboard/appDashboard";
import AppWidgets from "./Components/Widgets/appWidgets";
import AppChartJs from "./Components/Charts/appChartJs";
import AppFlot from "./Components/Charts/appFlot";
import AppInline from "./Components/Charts/appInline";
import AppFooter from "./Shared/Components/appFooter";
import AppHeader from "./Shared/Components/appHeader";
import AppMenu from "./Shared/Components/appMenu";
import AppSetting from "./Shared/Components/appSetting";

function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppDashboard />} />
          <Route path="Widgets" element={<AppWidgets />} />
          <Route path="Chart/ChartJs" element={<AppChartJs />} />
          <Route path="Chart/Flot" element={<AppFlot />} />
          <Route path="Chart/InLine" element={<AppInline />} />
        </Routes>
      </BrowserRouter>
      <AppFooter />
      {/* <AppSetting /> */}
    </div>
  );
}

export default App;
