import { useId } from "react";
import type { SVGProps } from "react";

export interface GridPatternBackgroundProps {
    size?: number;
}

export const GridBackground = ({ size }: GridPatternBackgroundProps) => {
    const pattern: Array<[number, number]> = [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1]
    ];
    return (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 z-50 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    x="0"
                    y={`-${size ?? 20}`}
                    squares={pattern}
                    width={size ?? 20}
                    height={size ?? 20}
                    className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/20 stroke-white/10"
                />
            </div>
        </div>
    );
};

interface GridPatternProps extends SVGProps<SVGSVGElement> {
    width: number;
    height: number;
    x: string | number;
    y: string | number;
    squares?: Array<[number, number]>;
}

const GridPattern = ({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: GridPatternProps) => {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            <svg x={x} y={y} className="overflow-visible" aria-hidden="true">
                {squares?.map(([x, y]: number[], idx) => (
                    <rect
                        suppressHydrationWarning
                        strokeWidth="0"
                        key={`${x}-${y}-${
                            // biome-ignore lint/suspicious/noArrayIndexKey: need to use index as key
                            idx
                        }`}
                        width={width + 1}
                        height={height + 1}
                        x={x * width}
                        y={y * height}
                    />
                ))}
            </svg>
        </svg>
    );
};
