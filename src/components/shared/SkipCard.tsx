import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/layout/Card.Layout";
import { IconAlert, IconCheck, IconChevronRight } from "@/config/Icons";
import { cn } from "@/lib/Utils";
import type { SkipModel } from "@/services/Api";
import { Fragment } from "react";
import { Button } from "./Button";

export interface SkipCardProps {
    skip: SkipModel;
    isSelected: boolean;
    onSelect: () => void;
}

export const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
    return (
        <Card
            className={cn(
                "relative overflow-hidden transform transition-all duration-500",
                isSelected
                    ? "scale-[1.03] ring-2 ring-blue-500 shadow-lg rotate-1"
                    : "hover:scale-[1.02] hover:shadow-lg hover:rotate-0"
            )}
        >
            <div className="relative overflow-hidden">
                <img
                    src={skip.image || "/placeholder.svg"}
                    alt={`${skip.size} Skip`}
                    className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute right-2 top-2 rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white transform transition-transform hover:scale-110 hover:rotate-3">
                    {skip.size}
                </div>
                {skip.privateOnly && (
                    <div className="absolute bottom-2 left-2 flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 transform transition-transform hover:scale-110">
                        <IconAlert size="xs" className="mr-1" />
                        <span>Private Property Only</span>
                    </div>
                )}
            </div>
            <CardHeader>
                <CardTitle>{skip.size} Skip</CardTitle>
                <CardDescription>{skip.period}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-500 transition-all duration-300 hover:text-blue-700 dark:hover:text-blue-400">
                    {skip.price}{" "}
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                        per week
                    </span>
                </p>
            </CardContent>
            <CardFooter>
                <Button
                    onClick={onSelect}
                    variant={isSelected ? "default" : "outline"}
                >
                    {isSelected ? (
                        <Fragment>
                            <IconCheck
                                size="sm"
                                className="mr-2 animate-bounce"
                            />
                            Selected
                        </Fragment>
                    ) : (
                        <Fragment>
                            Select This Skip
                            <IconChevronRight
                                size="sm"
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Fragment>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
