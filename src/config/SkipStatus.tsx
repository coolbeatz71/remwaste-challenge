import { IconCancel, IconCheckCircle, IconRoad } from "./Icons";

export const StatusConfig = {
    road: {
        allowed: {
            icon: IconRoad,
            text: "Allowed on road",
            iconColor: "text-green-400"
        },
        notAllowed: {
            icon: IconCancel,
            text: "Not allowed on road",
            iconColor: "text-red-400"
        }
    },
    heavyWaste: {
        allowed: {
            icon: IconCheckCircle,
            text: "Allows heavy waste",
            iconColor: "text-green-400"
        },
        notAllowed: {
            icon: IconCancel,
            text: "Heavy waste not allowed",
            iconColor: "text-red-400"
        }
    }
};
