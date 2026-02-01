import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/5 bg-white/[0.01] p-4 transition duration-300 hover:shadow-2xl hover:bg-white/[0.03] hover:border-white/10 backdrop-blur-[2px]",
                className,
            )}
        >
            <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center overflow-hidden">
                {header}
            </div>
            <div className="transition duration-300 group-hover/bento:translate-x-1 p-4">
                <div className="flex items-center gap-2 mb-2 text-white/40 group-hover:text-white transition-colors">
                    {icon}
                    <div className="font-outfit font-bold text-white tracking-tight uppercase text-xs">
                        {title}
                    </div>
                </div>
                <div className="font-sans text-xs font-normal text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
                    {description}
                </div>
            </div>
        </div>
    );
};
