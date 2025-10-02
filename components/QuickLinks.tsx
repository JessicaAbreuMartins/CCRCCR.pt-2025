interface QuickLink {
title: string
href: string
}
interface QuickLinksProps {
links: QuickLink[]
}
export default function QuickLinks({ links }: QuickLinksProps) {
return (
<div className="grid md:grid-cols-3 gap-4">
{links.map((link) => (
<a key={link.href} href={link.href} className="block bg-blue-50 text-center py-4 rounded-lg hover:bg-blue-100">
{link.title}
</a>
))}
</div>
)
}