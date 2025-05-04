import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createTask } from '../services/taskService';

export default function CreateTaskPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createTask({ title, completed });
            alert('Tarea creada exitosamente');
            navigate('/');
        } catch (error) {
            alert('Error al crear la tarea');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Crear Nueva Tarea</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Título de la Tarea
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Ingrese la tarea para su registro"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="completed"
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                            className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="completed" className="ml-2 text-sm text-gray-700">
                            ¿Tarea completada?
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300 font-medium"
                    >
                        Crear Tarea
                    </button>
                </form>
            </div>
        </div>
    );
}
