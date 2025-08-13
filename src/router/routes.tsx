import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/homePage';
import LinkPage from '../features/link/linkPage';
import ProjectPage from '../features/projects/projectPage';

function RouterPage() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/link" element={<LinkPage />} /> 
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
