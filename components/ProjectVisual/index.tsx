import Image from "next/image";

import type { FeaturedProject } from "@/content/projects";

import styles from "./index.module.scss";

export default function ProjectVisual({
  image,
}: {
  image: NonNullable<FeaturedProject["heroImage"]>;
}) {
  return (
    <figure className={styles.visual}>
      <div className={styles.frame}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 960px) calc(100vw - 344px), (max-width: 1304px) calc(100vw - 384px), 920px"
        />
      </div>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}
