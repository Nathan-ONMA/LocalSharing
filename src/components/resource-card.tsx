import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResourceCardProps {
  title: string
  category: string
  downloads: number
  image: string
  fileSize: string
  fileType: string
  featured?: boolean
}

export function ResourceCard({
  title,
  category,
  downloads,
  image,
  fileSize,
  fileType,
  featured = false,
}: ResourceCardProps) {
  return (
    <Card className={featured ? "border-primary/50" : ""}>
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
          <Badge className="absolute top-2 right-2">{category}</Badge>
          {featured && (
            <Badge variant="secondary" className="absolute top-2 left-2">
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{fileSize}</span>
          <span>{fileType}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-sm text-muted-foreground flex items-center">
          <Download className="h-3.5 w-3.5 mr-1" />
          {downloads.toLocaleString()}
        </div>
        <Button size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </CardFooter>
    </Card>
  )
}
