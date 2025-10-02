interface GalleryGridProps {
images: { src: string; alt: string }[]
}
export default function GalleryGrid({ images }: GalleryGridProps) {
return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{images.map((img, idx) => (
<img key={idx} src={img.src} alt={img.alt} className="w-full h-32 object-cover rounded" />
))}
</div>
)
}