import { cn } from '@/lib/utils';
import React from 'react'

interface CardProps {
  cardClassName?: string;
  title?: string,
  content: string,
  proTipsContent?: string | null | undefined;
}

export default function Card({
  cardClassName,
  title,
  content,
  proTipsContent
}: CardProps) {
  return (
    <div className={cn(
      "w-full min-w-fit h-fit min-h-80 relative overflow-hidden p-4",
      "border border-transparent dark:border-neutral-700 rounded-md shadow-xl mx-auto",
      "rounded-xl",
      "after:content-[''] after:absolute after:inset-0 after:bg-neutral-950 after:opacity-80 after:blur-2xl",
      cardClassName
      )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <div className="relative my-4">
            <p className="font-normal text-lg text-gray-50 relative my-4 italic">
              {content}
            </p>
          </div>
          {
            proTipsContent && (
              <div>
                <p className="text-base text-white font-semibold">Pro Tips:</p>
                <p className="text-base text-gray-50">{proTipsContent}</p>
              </div>
            )
          }
          </div>
    </div>
  )
}