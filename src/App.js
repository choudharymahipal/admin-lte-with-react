import './App.css';
import AppDashboard from './Components/Dashboard/appDashboard';
import AppFooter from './Shared/Components/appFooter';
import AppHeader from './Shared/Components/appHeader';
import AppMenu from './Shared/Components/appMenu';
import AppSetting from './Shared/Components/appSetting';

function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <AppDashboard />
      <AppFooter />
      {/* <AppSetting /> */}
    </div>
  );
}

export default App;
