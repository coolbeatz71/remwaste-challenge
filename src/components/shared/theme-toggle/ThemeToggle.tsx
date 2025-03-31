import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const raysVariants = {
        hidden: {
            strokeOpacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        visible: {
            strokeOpacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const rayVariant = {
        hidden: {
            pathLength: 0,
            opacity: 0,
            scale: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
                pathLength: { duration: 0.3 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 }
            }
        }
    };

    const shineVariant = {
        hidden: {
            opacity: 0,
            scale: 2,
            strokeDasharray: "20, 1000",
            strokeDashoffset: 0,
            filter: "blur(0px)"
        },
        visible: {
            opacity: [0, 1, 0],
            strokeDashoffset: [0, -50, -100],
            filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
            transition: {
                duration: 0.75,
                ease: "linear"
            }
        }
    };

    const onToggle = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    const sunPath =
        "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
    const moonPath =
        "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z";

    const moonAnimation = {
        d: moonPath,
        rotate: -360,
        scale: 1.5,
        x: -25,
        y: -25,
        stroke: "#5fbdf7",
        fill: "#4640f3",
        fillOpacity: 0.65,
        strokeOpacity: 1,
        transition: { delay: 0.1 }
    };

    const sunAnimation = {
        d: sunPath,
        rotate: 0,
        stroke: "#fbbf24",
        fill: "#ffc83e",
        fillOpacity: 0.65,
        strokeOpacity: 1
    };

    return (
        <button
            type="button"
            onClick={onToggle}
            title="Toggle Theme"
            className="cursor-pointer group relative size-12 sm:size-12 md:size-12 bg-foreground text-background rounded-lg flex justify-center items-center text-amber-500 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700"
        >
            <motion.svg
                width={25}
                height={25}
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="relative inset-0"
                aria-hidden="true"
            >
                <motion.path
                    d={moonPath}
                    initial="hidden"
                    variants={shineVariant}
                    className={"absolute top-0 left-0 stroke-indigo-500 "}
                    animate={theme === "dark" ? "visible" : "hidden"}
                />

                <motion.g
                    initial="hidden"
                    variants={raysVariants}
                    animate={theme === "light" ? "visible" : "hidden"}
                    className="stroke-6 stroke-yellow-400"
                    style={{ strokeLinecap: "round" }}
                >
                    {[
                        "M50 2V11",
                        "M85 15L78 22",
                        "M98 50H89",
                        "M85 85L78 78",
                        "M50 98V89",
                        "M23 78L16 84",
                        "M11 50H2",
                        "M23 23L16 16"
                    ].map((d) => (
                        <motion.path
                            key={d}
                            d={d}
                            variants={rayVariant}
                            className="origin-center"
                        />
                    ))}
                </motion.g>

                <motion.path
                    d={sunPath}
                    fill="transparent"
                    transition={{ duration: 0.65, type: "spring" }}
                    initial={{ fillOpacity: 0, strokeOpacity: 0 }}
                    animate={theme === "dark" ? moonAnimation : sunAnimation}
                />
            </motion.svg>
        </button>
    );
};
