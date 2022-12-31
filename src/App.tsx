import reactLogo from "./assets/react.svg";
import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import HomePageNoUser from "./pages/homepage-nouser";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
