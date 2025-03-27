import { StatusConfig } from "@/config/SkipStatus";

interface SkipCardStatusProps {
    status: boolean;
    type: "road" | "heavyWaste";
}

export const SkipCardStatus = ({ status, type }: SkipCardStatusProps) => {
    const statusKey = status ? "allowed" : "notAllowed";
    const { text, iconColor, icon: Icon } = StatusConfig[type][statusKey];

    return (
        <div className="flex items-center gap-2">
            <Icon size="sm" className={iconColor} />
            <p className="text-zinc-50 max-md:text-sm max-sm:text-base whitespace-nowrap">
                {text}
            </p>
        </div>
    );
};
