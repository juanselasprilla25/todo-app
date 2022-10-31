import { CardContainerProps } from "../../interfaces/interface";
import { CardItem } from "../CardItem/CardItem"

const { v4: uuidv4 } = require('uuid');


export const CardContainer = (props: CardContainerProps) => {

    const { cardTitle, completedState, tasks } = props.cardBody
    return (
        <article className="card">
            <div className="card-header">
                {cardTitle}
            </div>
            <ul className="list-group list-group-flush">
                {
                    Object.values(tasks).map((data): any => {
                        return <CardItem key={uuidv4()} completedState={completedState} task={data as string} />
                    })
                }
            </ul>
        </article>
    )
}
