
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routerElement } from "./asset/route/routeElem";


function App() {

  const router = createBrowserRouter(routerElement);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
