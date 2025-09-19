import Image0001 from "./../assets/images/0001.png"
import Image0002 from "./../assets/images/0002.png"
import Image0003 from "./../assets/images/0003.png"
import Image0004 from "./../assets/images/0004.png"
import Image0005 from "./../assets/images/0005.png"
import Image0006 from "./../assets/images/0006.png"
import Image0007 from "./../assets/images/0007.png"
import Image0008 from "./../assets/images/0008.png"
import Image0009 from "./../assets/images/0009.png"

// Export individually
export {
  Image0001,
  Image0002,
  Image0003,
  Image0004,
  Image0005,
  Image0006,
  Image0007,
  Image0008,
  Image0009,
}

// Define type for images
export type ImageAsset = {
  id: number
  src: string
  alt: string
}

// Typed array of images
export const images: ImageAsset[] = [
  { id: 1, src: Image0001, alt: "Sample Point 1" },
  { id: 2, src: Image0002, alt: "Sample Point 2" },
  { id: 3, src: Image0003, alt: "Sample Point 3" },
  { id: 4, src: Image0004, alt: "Sample Point 4" },
  { id: 5, src: Image0005, alt: "Sample Point 5" },
  { id: 6, src: Image0006, alt: "Sample Point 6" },
  { id: 7, src: Image0007, alt: "Sample Point 7" },
  { id: 8, src: Image0008, alt: "Sample Point 8" },
  { id: 9, src: Image0009, alt: "Sample Point 9" },
]

export const samplePointAImages: ImageAsset[] = [
  { id: 2, src: Image0002, alt: "Sample Point 2" },
  { id: 3, src: Image0003, alt: "Sample Point 3" },
  { id: 4, src: Image0004, alt: "Sample Point 4" },
  { id: 5, src: Image0005, alt: "Sample Point 5" },
]

export const samplePointBImages: ImageAsset[] = [
  { id: 6, src: Image0006, alt: "Sample Point 6" },
  { id: 7, src: Image0007, alt: "Sample Point 7" },
  { id: 8, src: Image0008, alt: "Sample Point 8" },
  { id: 9, src: Image0009, alt: "Sample Point 9" },
]
