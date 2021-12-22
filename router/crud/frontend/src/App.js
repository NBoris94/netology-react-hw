import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {PostsProvider} from "./store/PostsState";
import PostsPage from "./pages/PostsPage";
import AddPostPage from "./pages/AddPostPage";
import PostViewPage from "./pages/PostViewPage";
import EditPostPage from "./pages/EditPostPage";

function App() {
  return (
      <PostsProvider>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="/posts/new" element={<AddPostPage />} />
              <Route path="/posts/:postId" element={<PostViewPage />} />
              <Route path="/posts/edit/:postId" element={<EditPostPage />} />
            </Routes>
          </div>
        </Router>
      </PostsProvider>
  );
}

export default App;
