import React from 'react'
import ReactDOM from 'react-dom/client'

// створюємо React Element - найпростіша структура в React

// перший варіант запису (для розуміння роботи "під капотом") without jsx
// const title = React.createElement('h1', { id: 'title' }, 'Hello, React.js')
// console.log(title)
// root.render(<React.StrictMode>{title}</React.StrictMode>)

// другий варіант (простіший) за допомогою tsx extended,  вивдимо в <React.StrictMode>
const title = <h1 id="title">Hello React.js</h1>
console.log(title)

// правила роботи з JSX
const content = (
    <div>
        {title}
        <ul className="list">
            <li>Lost item 1</li>
            <li>Lost item 2</li>
            <li>Lost item 3</li>
        </ul>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            natus eos enim, suscipit maiores ex laborum culpa doloremque
            accusamus hic? Vel perferendis suscipit fuga dolor nesciunt
            assumenda sapiente fugiat distinctio!
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
