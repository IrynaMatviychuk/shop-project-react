import React from 'react'
import ReactDOM from 'react-dom/client'

// задаємо тип props
type TitleProps = {
    name: string
}

// створення компоненту, який можна використ. багато разів
const Title = (props: TitleProps) => {
    console.log(props)
    return <h1>Hello {props.name} </h1>
}

// створення кореневого компоненту, в який рендиримо попередні компоненти
const App = () => {
    return (
        <div className="app">
            <Title name="App" />
            <Title name="React" />
            <Title name="TS" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
