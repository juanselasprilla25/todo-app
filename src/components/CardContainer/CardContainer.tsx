import './CardContainer.modules.css'

import { CardInfo, CardSliceProps } from "../../interfaces/interface"

import { CardSlice } from "../Card/CardSlice"
import React from "react"

const { v4: uuidv4 } = require('uuid');

const cardInfo: CardInfo[] = [
    {
        id: uuidv4(),
        cardTitle: 'To Do',
        completedState: "todo",
        tasks: ['App_1', 'App_2'],
    },
    {
        id: uuidv4(),
        cardTitle: 'Doing',
        completedState: "doing",
        tasks: ['App_3', 'App_4'],
    },
    {
        id: uuidv4(),
        cardTitle: 'Done',
        completedState: "done",
        tasks: ['App_5', 'App_6'],
    }]

export default function CardContainer() {
    return (
        <section className='cardContainer'>
            {
                cardInfo.map(({ id, cardTitle, completedState, tasks }: any) => {
                    return <CardSlice key={id + uuidv4()} cardBody={{ cardTitle, completedState, tasks }} />
                })
            }
        </section>
    )
}
