import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from '../services/taskService';

interface Task {
    id: number;
    title: string;
    create_at: string;
    completed: number;
}

export default function TaskTable() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getAllTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteTask(id);
            setTasks(prev => prev.filter(task => task.id !== id));
            alert(`Tarea ${id} eliminada`);
        } catch (error) {
            alert('Error al eliminar tarea');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Lista de Tareas</h1>
            <div className="w-full max-w-5xl overflow-x-auto rounded-xl shadow-xl bg-white">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-blue-100 text-blue-800 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Título</th>
                            <th className="px-6 py-4">Creación</th>
                            <th className="px-6 py-4">Completado</th>
                            <th className="px-6 py-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {tasks.map(task => (
                            <tr key={task.id} className="hover:bg-gray-50 transition duration-200">
                                <td className="px-6 py-4 font-medium">{task.id}</td>
                                <td className="px-6 py-4">{task.title}</td>
                                <td className="px-6 py-4">{new Date(task.create_at).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.completed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {task.completed ? 'Sí' : 'No'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex justify-center gap-3">
                                    <button
                                        onClick={() => navigate(`/edit/${task.id}`)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-1.5 rounded-lg transition duration-200"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(task.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1.5 rounded-lg transition duration-200"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {tasks.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-500">
                                    No hay tareas registradas.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
