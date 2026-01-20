import { Loader2Icon } from "lucide-react";
import type { AspectRatio, IThumbnail } from "../assets/assets"

const PreviewPanel = ({thumbnail, isLoading, aspectRatio} : 
    {thumbnail: IThumbnail, isLoading: boolean; aspectRatio: AspectRatio}) => {

        const aspectClasses = {
            '16:9': 'aspect-video',
            '1:1' : 'aspect-square',
            '9:16' : 'aspect-[9/16]',
        } as Record<AspectRatio, string>;

    return (
        <div className="relative mx-auto w-full max-w-2xl">
            <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
                {/* loading state */}
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-cener justify-center gap-4 bg-black/25">
                        <Loader2Icon className="size-8 animated-spin text-zinc-400"/>
                        <div className="text-center">
                            <p className="text-sm font-medium text-zinc-200">AI is creating yout thumbnail...</p>
                            <p className="mt-1 text-xs text-zinc-400">This may take 10-20 seconds</p>
                        </div>
                    </div>
                )}

                {/* Image preview */}
                {!isLoading && thumbnail?.image_url && (
                    <div className="group relative h-full w-full">
                        <img src={thumbnail?.image_url} alt={thumbnail.title} className="h-full w-full object-cover"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PreviewPanel