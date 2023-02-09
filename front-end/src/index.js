import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Theme } from './provider/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Blog } from './component/Blog';
import { Header } from './components/header';
// import { PostPage } from './component/post-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Theme> */}
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<App />} />
            {/* <Route path="/Blog" element={<Blog />} /> */}
            <Route path="/Home" element={<App />} />
            {/* <Route path="/post/:id" element={<PostPage />} /> */}
          </Route>

        </Routes>
      {/* </Theme> */}
    </BrowserRouter>
    {/* <TypesExample/> */}
  </React.StrictMode>
);