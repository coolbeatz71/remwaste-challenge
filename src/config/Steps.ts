export interface Step {
    id: string;
    name: string;
    completed: boolean;
    current: boolean;
}

export const steps: Step[] = [
    { id: "postcode", name: "Postcode", completed: true, current: false },
    { id: "waste-type", name: "Waste Type", completed: true, current: false },
    { id: "select-skip", name: "Select Skip", completed: false, current: true },
    {
        id: "permit-check",
        name: "Permit Check",
        completed: false,
        current: false
    },
    {
        id: "choose-date",
        name: "Choose Date",
        completed: false,
        current: false
    },
    { id: "payment", name: "Payment", completed: false, current: false }
];
