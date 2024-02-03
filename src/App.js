import './App.css';
import {useEffect, useState} from "react";
import {weavyConfig} from "./weavy-config";
import TaskListComponent from "./component/TaskListComponent";

function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const weavy = new window.Weavy(weavyConfig);

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/tasks');
                const data = await response.json();
                setTasks(data);
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
