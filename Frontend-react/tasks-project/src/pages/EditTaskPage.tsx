import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTaskById, updateTask } from '../services/taskService';

export default function EditTaskPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (id) {
                    const taskArray = await getTaskById(id);
                    const task = taskArray[0];
                    console.log(task.title)
                    setTitle(task.title);
                    setCompleted(Boolean(task.completed));
                }
            } catch (error) {
                alert('Error al cargar la tarea');
                console.error(error);
            }
        };
        fetchTask();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateTask(id, { title, completed });
                alert(`Tarea ${id} actualizada`);
                navigate('/');
            }
        } catch (error) {
            alert('Error al actualizar la tarea');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Editar Tarea #{id}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Nuevo título
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder=""
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:border-transparent"
                            required
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="completed"
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                            className="h-5 w-5 text-orange-600 focus:ring-prange-500 border-gray-300 rounded"
                        />
                        <label htmlFor="completed" className="ml-2 text-sm text-gray-700">
                            ¿Tarea completada?
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-2 rounded-md transition duration-300 font-medium"
                    >
                        Guardar Cambios
                    </button>
                </form>
            </div>
        </div>
    );
}

