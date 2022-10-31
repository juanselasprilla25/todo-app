export interface CardInfo {
    id: string,
    cardTitle: string,
    completedState: string,
    // completedState: "todo" | "doing" | "done",
    tasks: string[],
}

export interface CardSliceProps {
    cardBody: {
        cardTitle: string,
        completedState: string,
        tasks: {},
    }
}