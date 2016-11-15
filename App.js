import React from 'react';

/*class App extends React.Component {
    render() {
        return React.createElement('h1', 
            null,
            'Hello guys')      
    }
}*/

/*class App extends React.Component {
    render() {
        return <h1> Hello Guys </h1>
    }
}*/
//const App = () => <h1>Hello </h1>


class App extends React.Component {
    render() {
//Los elementos en el return, deberan ir dentro de un parentesis,
// cuando sean mas de uno, en caso contrario, ponerlos en la misma 
//linea que el return
        return (
            <div>
                <h1>Hello world</h1>
                <b>Bold</b>
            </div>
        );      
    }
}

export default App