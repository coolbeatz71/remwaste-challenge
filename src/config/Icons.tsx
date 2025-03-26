import { FaCheck } from "react-icons/fa";
import { type VariantProps, tv } from "tailwind-variants";

const iconCheckVariants = tv({
    base: "w-5 h-5 text-gray-500",
    variants: {
        size: {
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8"
        },
        color: {
            default: "text-gray-300",
            success: "text-green-300",
            warning: "text-yellow-300",
            danger: "text-red-300"
        }
    },
    defaultVariants: {
        size: "md",
        color: "default"
    }
});

type IconCheckProps = VariantProps<typeof iconCheckVariants> & {
    className?: string;
};

export const IconCheck = ({ size, color, className }: IconCheckProps) => (
    <FaCheck className={iconCheckVariants({ size, color, className })} />
);
