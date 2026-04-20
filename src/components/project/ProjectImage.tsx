import { useState } from "react";

export const ProjectImage = ({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) return null;

  return (
    <figure className="mt-10 overflow-hidden rounded-sm border border-border bg-muted/40">
      <img
        src={`/${src}`}
        alt={alt}
        className="aspect-video w-full object-cover object-top"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </figure>
  );
};
