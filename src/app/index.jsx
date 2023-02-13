import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'

const path = (import.meta.env.PROD)? '/shop-template' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}/`,
    element: <Main />
  },
]);

export default router;