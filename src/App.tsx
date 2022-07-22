import { FC, Fragment } from "react";
import Login from "./pages/noAuthor/login";
// import { useAuth } from "libs/context/authorityProvider";
import Author from "./pages";
import { ErrorBoundary } from "./components/error";
import { fullPageErrorFallback } from "./components/error/fullPageErrorFallBack";
// import { useBackground } from "../libs/hooks";

const App: FC = () => {
  // const { user } = useAuth();
  const user = false
  // useBackground("#e1e1e1");

  return (
    <ErrorBoundary fallbackRender={fullPageErrorFallback}>
      <Fragment>{user ? <Author /> : <Login />}</Fragment>
    </ErrorBoundary>
  );
};

export default App;
