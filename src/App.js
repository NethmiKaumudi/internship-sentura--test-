import './App.css';
import { useEffect, useState } from "react";
import TaskListComponent from "./component/TaskListComponent";
import { weavyConfig } from "./weavy-config";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const weavy = new window.Weavy(weavyConfig);

        const fetchData = async () => {
            try {
                const response = await fetch('https://56f994a6fa484de1ab55f48862c005a4.weavy.io/GET /api/users');
                const data = await response.json();
                setTasks(data);
                const postData = {
                    title: 'New Task',
                    description: 'Description',
                    dueDate: '2024-02-10',
                };

                const postResponse = await fetch('https://56f994a6fa484de1ab55f48862c005a4.weavy.io/POST /api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any other headers as needed
                    },
                    body: JSON.stringify(postData),
                });

                const newTaskData = await postResponse.json();

                setTasks([...data, newTaskData]);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Weavy Task App</h1>
            <TaskListComponent tasks={tasks} />
        </div>
    );
}

export default App;
