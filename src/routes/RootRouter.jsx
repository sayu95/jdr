import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Initpage from "./Initpage";

// <BrowserRouter /> 예전 방식
// 그저 설정으로 받아들임!

export const jiwonRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Initpage />,
      },
    ],
  },
]);
