function WelcomeMessage() {
    return (
        <div>
            <h1>Welcome to ALX React APP!</h1>
            <p>This is a simple JSX component.</p>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
            <div>
            <WelcomeMessage />
        </div>
        </div>
    );
}

export default WelcomeMessage;