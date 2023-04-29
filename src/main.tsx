import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';

import './index.css';
import './app.css';
import 'tailwindcss/tailwind.css';
import { Root } from 'root';

import { ErrorPage, GeneratorPage } from 'pages';

// Vercel analytics
import { inject } from '@vercel/analytics';
inject();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <GeneratorPage />,
        errorElement: <ErrorPage />,
      },
    ],
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
