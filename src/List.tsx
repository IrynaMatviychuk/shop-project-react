// Підключення компоненту з файла index.tsxs
// const List = () => {
//     return <div>List</div>
// }
// export default List

// Підключення за допомогою плагіна (tsrafe)
type Props = {}

const List = (props: Props) => {
    return (
        <>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                exercitationem consequatur nulla. Autem, unde ad velit
                cupiditate eius adipisci eum rerum iure quis maxime ducimus
                aperiam, deserunt natus voluptate ab.
            </p>
        </>
    )
}
export default List

// якщо ми даний компонент хочемо використати в іншому файлі, то нам потрібно її експортувати. Далі у файлі, в якому хочемо його підключити потрібно провести імпорт: import List from './List'
