import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };
    return (
        <div
            style={styles}
            className="h-full flex flex-col justify-center items-center"
        >
            <h1 className="text-5xl text-center	font-bold text-white">Log in</h1>
            <LoginForm />
        </div>
    );
};
export default LoginPage;
