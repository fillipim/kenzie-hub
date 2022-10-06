import MainRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/golbal';
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <div className="App">
      <ToastContainer
      position='top-right' 
      autoClose={3000} 
      hideProgressBar={false} 
      pauseOnHover={true}
      theme="dark"
      
      />
      <GlobalStyles/>
      <MainRoutes/>
    </div>
  );
}

export default App;
