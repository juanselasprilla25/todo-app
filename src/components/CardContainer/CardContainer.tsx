import { CardContainerProps } from "../../interfaces/interface";
import { CardItem } from "../CardItem/CardItem"
import { FaPlusCircle } from 'react-icons/fa';

export const CardContainer = (props: CardContainerProps) => {


    const { cardTitle, completedState, tasks } = props.cardBody
    console.log('data', tasks);
    return (
        <section className="card">
            <header className="card-header">
                {cardTitle}
            </header>
            <article className="list-group list-group-flush">
                {
                    tasks.map(({ taskId, taskName }): any => {
                        return <CardItem key={taskId} completedState={completedState} task={taskName} />
                    })
                }
            </article>
            <article className="add-card-items">
                Agregar nueva tarea
                <FaPlusCircle />
            </article>
        </section>
    )
}
