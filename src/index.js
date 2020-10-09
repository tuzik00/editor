import React from 'react';



function App({onChange, vueValue}) {
    return (
        <div>
            <h1>
                React component
            </h1>

            <input
                onInput={onChange}
            />

            vue {vueValue}
        </div>
    );
}


export default App;
