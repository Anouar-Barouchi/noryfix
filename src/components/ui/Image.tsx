import { useState, type ImgHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
import { ImageOff } from 'lucide-react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackText?: string;
    containerClassName?: string;
}

const Image = ({ src, alt, className, fallbackText, containerClassName, ...props }: ImageProps) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    if (error || !src) {
        return (
            <div className={cn("flex items-center justify-center bg-slate-800 text-slate-500 w-full h-full min-h-[150px]", className)}>
                <div className="text-center p-4">
                    <ImageOff className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="text-xs font-medium uppercase tracking-wider opacity-70">{fallbackText || 'No Image'}</span>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("relative overflow-hidden w-full h-full", containerClassName)}>
            {!loaded && (
                <div className={cn("absolute inset-0 bg-slate-800 animate-pulse z-10", className)} />
            )}
            <img
                src={src}
                alt={alt}
                className={cn(
                    "transition-opacity duration-300 w-full h-full object-cover",
                    loaded ? "opacity-100" : "opacity-0",
                    className
                )}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                {...props}
            />
        </div>
    );
};

export default Image;
