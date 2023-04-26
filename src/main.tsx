import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';

import './index.css';
import './app.css';
import 'tailwindcss/tailwind.css';

import { ErrorPage, GeneratorPage } from 'pages';

const router = createBrowserRouter([
  {
    path: '/generate',
    element: <GeneratorPage />,
    errorElement: <ErrorPage />,
  },
]);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
