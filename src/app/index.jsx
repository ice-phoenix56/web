import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
  
const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}/`,
    element: <Main />
  },
]);

export default router;