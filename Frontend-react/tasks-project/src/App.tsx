import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import "./styles/index.css"
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateTaskPage />} />
                <Route path="/edit/:id" element={<EditTaskPage />} />
            </Routes>
        </Router>
    )

}

export default App