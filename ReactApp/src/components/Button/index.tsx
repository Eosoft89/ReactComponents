import { ReactNode } from "react";
//import styles from "./Button.module.css"; /* Esto es para utilizar los módulos de CSS de React */
import styled from "styled-components"; /* Esto es para utilizar styled components */

type BtnProps = {
    isLoading: boolean;
}

const Btn = styled.button<BtnProps>`
    background-color: ${ (props) => (props.isLoading ? "gray" : "red") };
    padding: 25px 30px;
`;   

type Props = {
    children: ReactNode; /* un ReactNode es básicamente cualquier componente o subcomponente, en este caso, hasta el string que va en <Button> </Button> */
    isLoading?: boolean;
    onClick: () => void;
}

function Button({ children, isLoading, onClick }: Props) {

    //const className = [`btn btn-${isLoading ? "secondary" : "primary"}`, styles.button, styles.padded].join(" ");

    return (
        /*<button 
            onClick = { onClick } 
            disabled = { isLoading } 
            type = "button" 
            //className={[styles.button, styles.padded].join(" ")}
            className = { className }
        >
            { isLoading ? "Cargando..." : children }    
        </button>*/

        <Btn 
            onClick = { onClick } 
            disabled = { isLoading }
            isLoading = { isLoading} 
        >
            { isLoading ? "Cargando..." : children }     
        </Btn>
    );
}

export default Button