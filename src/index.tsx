import React from 'react'
import ReactDOM from 'react-dom/client'
import { List } from './List'
// імпортуємо List

// 1) задаємо тип props
type TextProps = {
    name?: string
    text?: string
    year?: number
}

// 2) створення компоненту, який можна використ. багато разів
const Text = ({ name = 'Jack', text, year }: TextProps) => {
    return (
        <>
            <h1>Hello {name}.</h1>
            <p>
                Now {text}, {year} year
            </p>
        </>
    )
}

// 3) створення кореневого компоненту, в який рендиримо попередні компоненти
const App = () => {
    return (
        <div className="app">
            <Text text="March" year={2023} />
            <Text text="March" year={2023} />
            <List />
        </div>
    )
}

// 4) передаэмо кореневий компонент в React.StrictMode
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
