type Props = {}

// Іменована форма експорту
export const List = (props: Props) => {
    let data = 'red'
    let data2 = true
    const styleObj = {
        color: 'white',
        backgroundColor: 'blue',
        padding: '10px',
    }
    return (
        <>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <p
                style={{
                    color: data2 ? 'blue' : 'green',
                    backgroundColor: data,
                    padding: '15px',
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                exercitationem consequatur nulla. Autem, unde ad velit
                cupiditate eius adipisci eum rerum iure quis maxime ducimus
                aperiam, deserunt natus voluptate ab.
            </p>
            <p style={styleObj}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                exercitationem consequatur nulla. Autem, unde ad velit
                cupiditate eius adipisci eum rerum iure quis maxime ducimus
                aperiam, deserunt natus voluptate ab.
            </p>
        </>
    )
}
