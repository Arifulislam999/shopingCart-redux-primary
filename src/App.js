import { useEffect, useState } from "react";
import "./App.css";
import Routing from "./Components/Routing";
import RingLoader from "react-spinners/RingLoader";
function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            <div className="App">{loading ? <RingLoader className="load" color={"red"} loading={loading} size={80} /> : <Routing />}</div>
        </div>
    );
}

export default App;
