import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { Post } from './components/post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './homepage';
import reportWebVitals from './reportWebVitals';
=======
// import { Theme } from './provider/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Blog } from './component/Blog';
import { Header } from './components/header';
// import { PostPage } from './component/post-page';
>>>>>>> 9d2954877facb70574503559b32c70f994062145

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/blog/:id' element={<Post />}></Route>
        <Route path='/blog' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
=======
      {/* <Theme> */}
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<App />} />
            {/* <Route path="/Blog" element={<Blog />} /> */}
            <Route path="/Home" element={<App />} />
            {/* <Route path="/post/:id" element={<PostPage />} /> */}
          </Route>
>>>>>>> 9d2954877facb70574503559b32c70f994062145

        </Routes>
      {/* </Theme> */}
    </BrowserRouter>
    {/* <TypesExample/> */}
  </React.StrictMode>
);