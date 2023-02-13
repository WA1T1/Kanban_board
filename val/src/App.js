import './index.css';

import HomePage from "./screens/HomePage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {ContentProvider} from "./providers/ContentProvider";
import TaskScreen from "./screens/TaskScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/tasks/:id",
        element: <TaskScreen/>,
    },
]);

function App() {
  return (
      <ContentProvider>
          <RouterProvider router={router} />
      </ContentProvider>
  );
}

export default App;
