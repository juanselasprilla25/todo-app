import './CardItem.modules.css'

import { CardItemProps } from "../../interfaces/interface"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const CardItem = (props: CardItemProps) => {
    const { completedState, task } = props
    return (
        <li className="list-group-item" id={completedState}>
            {task as string}
            <FontAwesomeIcon icon={faTrash} className='iconComponent' />
        </li>
    )
}
