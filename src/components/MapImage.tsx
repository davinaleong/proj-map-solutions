import { type ImageAsset } from "./../lib/images"

type MapImageProps = {
  image: ImageAsset
}

function MapImage({ image }: MapImageProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto object-cover rounded-sm shadow-sm"
    />
  )
}

export default MapImage
