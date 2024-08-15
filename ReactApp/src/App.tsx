import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App(){

    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => setIsLoading(!isLoading);

    const [list, setList] = useState(["Goku", "Tanjiro"]);

    const handleAddClick = () => setList([...list, "Minion"]); /*... list crea una copia de la lista y le agrega la nueva cadena */
    const handleRemoveClick = () => setList(list.slice(0, -1));

    const handleSelect = (element: string) => {
        console.log("imprimiendo", element)
    };

    /* && Evalúa si la lista posee algún elemento, si posee, dibuja el componente List*/
    /* También podía hacerse con list.length ? <List.../> : "Sin contenido" */
    /* Además, esto se podría hacer directamente en el return, sin la necesidad de definir const content*/
    const content = list.length !== 0 && <List data = { list } onSelect={ handleSelect }/>;

    return(
        <Card>
            <Button onClick= { handleAddClick }> Agregar </Button>
            <Button onClick= { handleRemoveClick }> Eliminar </Button>
            <CardBody title="Hola mundo" text="Este es mi texto"/>
            {content}
            <Button isLoading = { isLoading } onClick = { handleClick }>
                Cargar {/* Esto sería la parte children del componente */}
            </Button>
        </Card>
    );
  

}

export default App;