import Account from "../../components/Account";
import CreateAccount from "../../components/CreateAccount";
import IntroSection from "../../components/IntroSection";
import { ROUTER_PATH } from "./routePath";

export const routerElement = [
    {
        path: ROUTER_PATH.index,
        element: <IntroSection/>,
    },
    {
        path: ROUTER_PATH.SignIn,
        element: <Account/>,
    },
    {
        path: ROUTER_PATH.CreateAccount,
        element: <CreateAccount/>
    }

]