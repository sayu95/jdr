import { RouterProvider } from "react-router";
import { jiwonRouter } from "./RootRouter";

function JiwonRouteProvider() {
  return (
    <div>
      <RouterProvider router={jiwonRouter} />
    </div>
  );
}

export default JiwonRouteProvider;
