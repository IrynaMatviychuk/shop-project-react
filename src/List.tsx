import './List.scss'

type Props = {}

// Іменована форма експорту
export const List = (props: Props) => {
    let data = true
    return (
        <>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <p className={`article-description ${data ? 'content' : 'test'} `}>
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
