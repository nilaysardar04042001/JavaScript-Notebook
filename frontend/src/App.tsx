{/* App.tsx */}
import { application } from '../../shared/src/application';
export function App() {
  return (
    <main className="app-shell">
      <h1>{application.title}</h1>
      <p>
        The React and Vite frontend environment is configured and ready for the
        notebook interface.
      </p>
      <p>Version {application.version}</p>
    </main>
  );
}
