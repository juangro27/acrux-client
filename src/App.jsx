import Navigation from "./components/Navigation/Navigations";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };

    return (
        <div className="App">
            <Navigation />
            <div style={styles}>
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
