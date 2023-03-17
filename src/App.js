import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import AdminNavbar from './components/Navbars/AdminNavbar';
import FooterAdmin from './components/Footers/FooterAdmin';
import HeaderStats from './components/Headers/HeaderStats';

import Dashboard from './views/Dashboard';
import Maps from './views/Maps';
import Settings from './views/Settings';
import Tables from './views/Tables';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <>
  <Sidebar/>
  <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
  </>
  );
}

export default App;
