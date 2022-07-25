import { FC, Fragment } from "react";
import Login from "./pages/noAuthor/login";
import Author from "./pages";
import { UserModal } from '@brushes/store';
import { ErrorBoundary } from "./components/error";
import { fullPageErrorFallback } from "./components/error/fullPageErrorFallBack";

const App: FC = () => {
  const { user } = UserModal.useContainer();
  return (
      <ErrorBoundary fallbackRender={fullPageErrorFallback}>
        <Fragment>{user ? <Author /> : <Login />}</Fragment>
      </ErrorBoundary>
  );
};

export default () => <UserModal.Provider><App/></UserModal.Provider>;
