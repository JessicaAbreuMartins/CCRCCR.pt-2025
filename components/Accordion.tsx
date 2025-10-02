interface AccordionProps {
title: string
children: React.ReactNode
}
export default function Accordion({ title, children }: AccordionProps) {
const [open, setOpen] = React.useState(false)
return (
<div className="border rounded-lg">
<button onClick={() => setOpen(!open)} className="w-full px-4 py-2 text-left font-semibold">
{title}
</button>
{open && <div className="p-4 border-t">{children}</div>}
</div>
)
}