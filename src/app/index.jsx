import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
]);

export default router;