import './App.css';
import { useEffect, useState } from "react";
import TaskListComponent from "./component/TaskListComponent";
// import { weavyConfig } from "./weavy-config";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleAddTask = async () => {
        try {
            const postResponse = await fetch('https://56f994a6fa484de1ab55f48862c005a4.weavy.io/POST /api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            const newTaskData = await postResponse.json();

            setTasks([...tasks, newTaskData]);
            setNewTask({ title: '', description: '', dueDate: '' });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://56f994a6fa484de1ab55f48862c005a4.weavy.io/GET /api/users');
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <div className="App">
            <h1>Weavy Task App</h1>

            {/* Add Task Form */}
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={newTask.title} onChange={handleInputChange} />
                <label>Description:</label>
                <input type="text" name="description" value={newTask.description} onChange={handleInputChange} />
                <label>Due Date:</label>
                <input type="text" name="dueDate" value={newTask.dueDate} onChange={handleInputChange} />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            {/* Task List */}
            <TaskListComponent tasks={tasks} />
        </div>
            </>
    );
}

export default App;
