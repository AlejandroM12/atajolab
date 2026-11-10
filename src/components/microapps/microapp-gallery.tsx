import Image from "next/image";
import type { MicroappImage } from "@/types/microapp";
import { BrowserFrame } from "@/components/shared/browser-frame";

/**
 * Screenshots: wide images (app screens) inside a browser frame,
 * portrait images (printed samples) in a compact grid.
 */
export function MicroappGallery({ images, url }: { images: MicroappImage[]; url?: string }) {
  const wide = images.filter((image) => image.width >= image.height);
  const tall = images.filter((image) => image.width < image.height);

  return (
    <div className="space-y-8">
      {wide.map((image) => (
        <figure key={image.src}>
          <BrowserFrame url={url}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full"
            />
          </BrowserFrame>
          {image.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted">{image.caption}</figcaption>
          )}
        </figure>
      ))}
      {tall.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tall.map((image) => (
            <li key={image.src}>
              <figure>
                <div className="overflow-hidden rounded-xl border border-line bg-card p-2 shadow-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 640px) 240px, 50vw"
                    className="h-auto w-full rounded-md"
                  />
                </div>
                {image.caption && (
                  <figcaption className="mt-2 text-center text-xs text-muted">{image.caption}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
