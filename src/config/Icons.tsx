import {
    FaArrowLeft,
    FaArrowRight,
    FaCheck,
    FaChevronRight
} from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { type VariantProps, tv } from "tailwind-variants";

const iconVariants = tv({
    base: "w-5 h-5 text-gray-500",
    variants: {
        size: {
            xs: "w-3 h-3",
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

type IconCheckProps = VariantProps<typeof iconVariants> & {
    className?: string;
};

export const IconCheck = ({ size, color, className }: IconCheckProps) => (
    <FaCheck className={iconVariants({ size, color, className })} />
);

export const IconChevronRight = ({
    size,
    color,
    className
}: IconCheckProps) => (
    <FaChevronRight className={iconVariants({ size, color, className })} />
);

export const IconAlert = ({ size, color, className }: IconCheckProps) => (
    <FiAlertTriangle className={iconVariants({ size, color, className })} />
);

export const IconArrowRight = ({ size, color, className }: IconCheckProps) => (
    <FaArrowRight className={iconVariants({ size, color, className })} />
);

export const IconArrowLeft = ({ size, color, className }: IconCheckProps) => (
    <FaArrowLeft className={iconVariants({ size, color, className })} />
);
