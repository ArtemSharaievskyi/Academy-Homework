import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

// Використання React.lazy для lazy loading інших компонентів
const Users = React.lazy(() => import('./components/Users'));
const UserDetail = React.lazy(() => import('./components/UserDetail'));
const Posts = React.lazy(() => import('./components/Posts'));
const PostDetail = React.lazy(() => import('./components/PostDetail'));
const Comments = React.lazy(() => import('./components/Comments'));
const CommentDetail = React.lazy(() => import('./components/CommentDetail'));

// Налаштування маршрутизації із використанням Outlet та children
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Загальна оболонка з навігацією
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "user/:id", element: <UserDetail /> },
      { path: "posts", element: <Posts /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "comments", element: <Comments /> },
      { path: "comment/:id", element: <CommentDetail /> },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
