import { useState } from "react";

type Props = {
    data: string[]
    onSelect?: (element: string) => void;
}   /* En esta caso, "type" e "interface" cumplen la misma función */

function List({ data, onSelect }: Props) {

    /* State son los datos internos del componente, las Props son argumentos que le pasamos al componente */
    /* Los Estados pueden mutar, las Props deberían ser inmutables*/
    /* Cuando cambia un estado o una prop, se generará un re-render*/

    const [index, setIndex] = useState(1);
    const handleClick = (i: number, element: string) => {
        setIndex(i);
        onSelect?.(element);
    };

    return (
        <ul className="list-group">
            { data.map((element, i) => (
                <li onClick={ () => handleClick(i, element) } 
                    key={ element } 
                    className={`list-group-item ${index == i ? "active" : "" }`}>
                    { element }
                </li>
            ))}  
        </ul>
    );
}

export default List;