import './CardSlice.modules.css'

import { CardSliceProps } from "../../interfaces/interface"

const { v4: uuidv4 } = require('uuid');

export const CardSlice = (props: CardSliceProps) => {
    const { cardTitle, completedState, tasks } = props.cardBody
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
                {cardTitle}
            </div>
            <ul className="list-group list-group-flush">
                {
                    Object.values(tasks).map((data): any => {
                        return <li className="list-group-item" key={uuidv4()} id={completedState}>{data as string}</li>
                    })
                }
            </ul>
        </div>
    )
}
