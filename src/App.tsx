import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default App;
