import Image from "next/image";
import type { MicroappImage } from "@/types/microapp";
import { cn } from "@/lib/utils";

/**
 * Backdrop for product screens that are cards or phones and not browser windows.
 * It keeps the product's own paper color in both themes, so the screens look as they do on their site.
 */
const stage = "rounded-2xl border border-line bg-[#faf7f2] shadow-card";

interface ProductStageProps {
  /** The first image is the main screen; the second one, if any, overlaps it as a phone. */
  images: MicroappImage[];
  /** Product mark shown at the top of the stage. */
  mark?: { src: string; name: string };
  className?: string;
}

/** A composition of the product's real screens, used in the home and in the tool page header. */
export function ProductStage({ images, mark, className }: ProductStageProps) {
  const [main, side] = images;
  if (!main) return null;
  return (
    <div className={cn(stage, "overflow-hidden p-5 sm:p-8", className)}>
      {mark && (
        <p className="mb-5 flex items-center gap-2.5 font-display text-lg font-semibold text-[#1d1b18]">
          <Image src={mark.src} alt="" width={28} height={28} className="size-7" />
          {mark.name}
        </p>
      )}
      <div className="grid grid-cols-[1.3fr_1fr] items-end gap-3 sm:gap-6">
        <Image
          src={main.src}
          alt={main.alt}
          width={main.width}
          height={main.height}
          sizes="(min-width: 1024px) 340px, 50vw"
          className="h-auto w-full"
        />
        {side && (
          <Image
            src={side.src}
            alt={side.alt}
            width={side.width}
            height={side.height}
            sizes="(min-width: 1024px) 260px, 40vw"
            className="h-auto w-full rotate-2 drop-shadow-xl"
          />
        )}
      </div>
    </div>
  );
}

/** Every screen on its own stage, with its caption. A last screen without a partner takes the full row. */
export function StageGallery({ images }: { images: MicroappImage[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {images.map((image, index) => (
        <li key={image.src} className={cn(index === images.length - 1 && images.length % 2 === 1 && "sm:col-span-2")}>
          <figure className="h-full">
            <div className={cn(stage, "flex items-center justify-center p-6")}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 640px) 320px, 90vw"
                className="h-auto w-full max-w-xs"
              />
            </div>
            {image.caption && <figcaption className="mt-3 text-center text-sm text-muted">{image.caption}</figcaption>}
          </figure>
        </li>
      ))}
    </ul>
  );
}
