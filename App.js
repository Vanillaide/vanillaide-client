import AuthProvider from "./src/contexts/AuthProvider";
import ProjectProvider from "./src/contexts/ProjectProvider";
import AppNavigator from "./src/navigator/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <AppNavigator />
      </ProjectProvider>
    </AuthProvider>
  );
}
