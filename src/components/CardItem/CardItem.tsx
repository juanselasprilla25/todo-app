import './CardItem.modules.css'

import { CardItemProps } from "../../interfaces/interface"
import { FaTrash } from 'react-icons/fa';

export const CardItem = (props: CardItemProps) => {
    const { completedState, task } = props
    return (
        <p className="list-group-item" id={completedState}>
            {task}
            <FaTrash />
        </p>
    )
}
