import { FC, Fragment } from "react";
import { UserModal } from '@brushes/store';
import { Login } from "@brushes/materials";
import Author from "./pages";
import { ErrorBoundary } from "./components";
import { fullPageErrorFallback } from "./components";

const App: FC = () => {
  const { user } = UserModal.useContainer();
  return (
      <ErrorBoundary fallbackRender={fullPageErrorFallback}>
        <Fragment>{user ? <Author /> : <Login />}</Fragment>
      </ErrorBoundary>
  );
};

export default () => <UserModal.Provider><App/></UserModal.Provider>;
