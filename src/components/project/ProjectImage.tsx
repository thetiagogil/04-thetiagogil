import { useEffect, useState } from "react";

import { LoadableImage } from "@/components/LoadableImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { sortProjectImages } from "@/lib/projects";

export const ProjectImage = ({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) => {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const resolvedImages = sortProjectImages(images);
  const visibleImages = resolvedImages.filter(
    (image) => !failedImages.includes(image),
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    const syncPosition = () => {
      const nextIndex = Math.min(
        api.selectedScrollSnap(),
        Math.max(visibleImages.length - 1, 0),
      );

      if (api.selectedScrollSnap() !== nextIndex) {
        api.scrollTo(nextIndex);
      }

      setSelectedIndex(nextIndex);
    };

    syncPosition();
    api.on("reInit", syncPosition);
    api.on("select", syncPosition);

    return () => {
      api.off("reInit", syncPosition);
      api.off("select", syncPosition);
    };
  }, [api, visibleImages.length]);

  const handleImageError = (image: string) => {
    setFailedImages((current) =>
      current.includes(image) ? current : [...current, image],
    );
  };

  if (!visibleImages.length) return null;

  if (visibleImages.length === 1) {
    const [image] = visibleImages;

    return (
      <figure className="overflow-hidden rounded-sm border border-border bg-muted/40">
        <LoadableImage
          key={image}
          src={`/${image}`}
          alt={alt}
          className="aspect-video w-full object-cover object-top"
          loading="eager"
          onError={() => handleImageError(image)}
        />
      </figure>
    );
  }

  return (
    <figure className="overflow-hidden rounded-sm border border-border bg-muted/40">
      <Carousel setApi={setApi} className="w-full">
        <div className="absolute right-3 top-3 z-10 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
          {selectedIndex + 1} / {visibleImages.length}
        </div>

        <CarouselContent className="ml-0">
          {visibleImages.map((image, index) => (
            <CarouselItem key={image} className="pl-0">
              <LoadableImage
                key={image}
                src={`/${image}`}
                alt={`${alt} ${index + 1} of ${visibleImages.length}`}
                className="aspect-video w-full object-cover object-top"
                loading={index === 0 ? "eager" : "lazy"}
                onError={() => handleImageError(image)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 top-auto bottom-3 translate-y-0 bg-background/85 backdrop-blur-sm hover:bg-background" />
        <CarouselNext className="right-3 top-auto bottom-3 translate-y-0 bg-background/85 backdrop-blur-sm hover:bg-background" />
      </Carousel>
    </figure>
  );
};
