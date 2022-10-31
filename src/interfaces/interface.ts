export interface CardContainer {
    id: string,
    cardTitle: string,
    completedState: string,
    // completedState: "todo" | "doing" | "done",
    tasks: string[],
}
export interface CardContainerProps {
    cardBody: {
        cardTitle: string,
        completedState: string,
        tasks: {},
    }
}
export interface CardInfo {
    id: string,
    cardTitle: string,
    completedState: string,
    // completedState: "todo" | "doing" | "done",
    tasks: string[],
}

export interface CardItemProps {
    completedState: string,
    task: string,
}