
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {routerElem } from "./asset/routers";
import Account from "./components/Account";
import CreateAccount from "./components/CreateAccount";
import IntroSection from "./components/IntroSection";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <IntroSection />,
  //   },
  //   {
  //     path: "/home",
  //     element: <CreateAccount />,
  //   },
  // ]);
  return (
    <div className="App">
      <RouterProvider router={routerElem } />
    </div>
  );
}

export default App;
