import './List.css'

type Props = {}

// Іменована форма експорту
export const List = (props: Props) => {
    return (
        <>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                exercitationem consequatur nulla. Autem, unde ad velit
                cupiditate eius adipisci eum rerum iure quis maxime ducimus
                aperiam, deserunt natus voluptate ab.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                exercitationem consequatur nulla. Autem, unde ad velit
                cupiditate eius adipisci eum rerum iure quis maxime ducimus
                aperiam, deserunt natus voluptate ab.
            </p>
        </>
    )
}
