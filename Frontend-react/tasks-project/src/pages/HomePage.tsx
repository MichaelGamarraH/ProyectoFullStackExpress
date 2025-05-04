import { useNavigate } from 'react-router-dom';
import UserTable from '../components/TaskTable';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold"></h1>
                <button
                    onClick={() => navigate('/create')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Crear Tarea
                </button>
            </div>
            <UserTable />
        </div>
    );
}
