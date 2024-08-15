import { ReactNode } from "react";

interface CardProps {
    children : ReactNode
}

function Card(props: CardProps) {

    const { children } = props;
    return ( 
        <div className="card" style={{width:"350px",}}>
            <div className="card-body">{ children }</div>
        </div>
    );

}

interface CardBodyProps {
    title: string
    text?: string   /*? para definir prop opcional, igual que en C#*/
}

export function CardBody(props: CardBodyProps) {

    const { title, text } = props;

    return (
        <> {/*Es lo mismo que utilizar fragment*/}
            <h5 className="card-title">{ title }</h5>
            <p className="card-text"> { text }</p>   
        </>
    );
}

export default Card;