import { cn } from "@/lib/Utils";
import type { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const alertVariants = tv({
    base: "mb-4 p-3 border rounded-md",
    variants: {
        variant: {
            warning:
                "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300",
            error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300",
            success:
                "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300",
            info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300"
        }
    },
    defaultVariants: {
        variant: "info"
    }
});

export interface AlertBannerProps {
    message: string;
    icon?: ReactNode;
    variant?: VariantProps<typeof alertVariants>["variant"];
}

const AlertBanner = ({ message, variant = "info", icon }: AlertBannerProps) => {
    return (
        <div className={cn(alertVariants({ variant }))}>
            <p className="flex items-center gap-2">
                {icon}
                {message}
            </p>
        </div>
    );
};

export { AlertBanner, alertVariants };
