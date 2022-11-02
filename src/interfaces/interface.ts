export interface CardInfo {
    id: string,
    cardTitle: string,
    completedState: string,
    // completedState: "todo" | "doing" | "done",
    tasks: {
            taskId: string,
            taskName: string
        }[],
}
export interface CardContainerProps {
    cardBody: {
        cardTitle: string,
        completedState: string,
        tasks: [],
    }
}
export interface CardContainer {
    id: string,
    cardTitle: string,
    completedState: string,
    // completedState: "todo" | "doing" | "done",
    tasks: [],
}

export interface CardItemProps {
    completedState: string,
    task: string,
}