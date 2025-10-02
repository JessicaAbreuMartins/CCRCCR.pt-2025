import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type NewsCardProps = {
  title: string
  date: string
}

export default function NewsCard({ title, date }: NewsCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
    </Card>
  )
}