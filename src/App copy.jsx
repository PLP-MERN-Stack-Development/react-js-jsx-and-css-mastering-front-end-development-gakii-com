import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiDataDisplay from './components/ApiDataDisplay';
import Card from './components/Card';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Home route */}
            <Route path="/" element={
              <Card title="Welcome to PLP Task Manager">
                <p className="text-gray-600 dark:text-gray-400">
                  A simple and efficient task management application built with React and Tailwind CSS.
                  Use the navigation menu to explore different features.
                </p>
              </Card>
            } />

            {/* Tasks route */}
            <Route path="/tasks" element={<TaskManager />} />

            {/* API Data route */}
            <Route path="/api-data" element={<ApiDataDisplay />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 