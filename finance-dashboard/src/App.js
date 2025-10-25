import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExpensesPage from "./pages/ExpensesPage";
import ReportsPage from "./pages/ReportsPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/expenses" element={<ExpensesPage/>}/>
        <Route path="/report" element={<ReportsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
