import "./App.css";
import HomePage from "./Container/Home/Index";
import ToastContainer from "./Container/Toast/Index";
import { ToastProvider } from "./Context/ToastContext";

function App() {
  return (
    <>
      <ToastProvider>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 text-sm h-full border border-red-400">
          <HomePage />
        </div>
        <ToastContainer />
      </ToastProvider>
    </>
  );
}

export default App;
