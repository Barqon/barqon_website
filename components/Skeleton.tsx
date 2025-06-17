import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200 dark:bg-gray-800", className)}
      {...props}
    />
  );
}

export function TextSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Skeleton className={cn("h-4 w-full", className)} {...props} />
  );
}

export function ImageSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Skeleton className={cn("aspect-square w-full", className)} {...props} />
  );
}

export function CardSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ImageSkeleton />
      <div className="space-y-2">
        <TextSkeleton />
        <TextSkeleton className="w-2/3" />
      </div>
    </div>
  );
} 