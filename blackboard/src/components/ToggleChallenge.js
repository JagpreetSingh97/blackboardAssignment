import React from "react";

function ToggleChallenge() {

    const [status, setStatus] = React.useState(true);

    return (
        <div className="center">
            <button onClick={() => setStatus(!status)}>Hide Element Below</button>
            {
                status ? <h1>Toggle Challenge</h1> : null
            }
        </div>
    );
}

export default ToggleChallenge;