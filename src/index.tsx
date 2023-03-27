import React from 'react'
import ReactDOM from 'react-dom/client'

// створення компоненту
function Title() {
    return <h1>Hello TS</h1>
}

// ще один компонент, замість огортаючого div пишемо
function List() {
    return (
        <>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus quas quaerat corporis, modi amet ipsum eius cum
                ducimus reiciendis necessitatibus voluptates eaque quia quos
                repellendus reprehenderit excepturi, ex eum minus.
            </p>
        </>
    )
}

// створення кореневого компоненту, в який рендиримо два попередніх компоненти
const App = () => {
    return (
        <div className="app">
            <Title />
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/* <Title />
        <List /> */}
        <App />
    </React.StrictMode>
)
