import { IconCheck } from "@/config/Icons";
import type { Step } from "@/config/Steps";
import { cn } from "@/lib/Utils";

export interface StepsLayoutProps {
    steps: Step[];
}

export const StepsLayout = ({ steps }: StepsLayoutProps) => {
    return (
        <div className={cn("min-h-full text-gray-900 dark:text-gray-100")}>
            <div className="container mx-auto px-4 py-6">
                <div className="relative">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-[33%]" />
                    </div>
                    <div className="flex justify-between">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className={cn(
                                        "w-8 h-8 flex items-center justify-center rounded-full mb-1",
                                        step.completed
                                            ? "bg-blue-500 text-white"
                                            : step.current
                                              ? "border-2 border-blue-500 text-blue-500"
                                              : "border-2 border-gray-300 dark:border-gray-600 text-gray-400"
                                    )}
                                >
                                    {step.completed ? (
                                        <IconCheck className="h-4 w-4" />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <span
                                    className={cn(
                                        "text-xs font-medium hidden md:block",
                                        step.current
                                            ? "text-blue-500"
                                            : "text-gray-500 dark:text-gray-400"
                                    )}
                                >
                                    {step.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
