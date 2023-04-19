import SignupForm from "../../components/SignupForm/SignupForm";

const SignupPage = () => {
    const styles = {
        minHeight: "calc(100vh - 64px)",
    };
    return (
        <div
            style={styles}
            className="h-full flex flex-col justify-center items-center"
        >
            <h1 className="text-5xl text-center	font-bold text-white mt-10">
                Sign up
            </h1>
            <SignupForm />
        </div>
    );
};
export default SignupPage;
