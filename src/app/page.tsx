import Link from "next/link"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceCard } from "@/components/resource-card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            ResourceHub
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Popular
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              New Uploads
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              About
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Download High-Quality Resources
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access thousands of templates, documents, images, and more to enhance your projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search resources..." className="pl-8 w-full" />
                  </div>
                  <Button type="submit">Search</Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=800"
                alt="Resources Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse by Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find exactly what you need with our organized resource categories
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 mb-4">
              <div className="text-sm font-medium">Filter by:</div>
              <Link href="/add-resource">
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Resource
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="all" className="mt-4">
              <TabsList className="flex flex-wrap justify-start mb-8 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="graphics">Graphics</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ResourceCard
                    title="Business Proposal Template"
                    category="Templates"
                    downloads={1250}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="2.4 MB"
                    fileType="DOCX"
                  />
                  <ResourceCard
                    title="Social Media Graphics Pack"
                    category="Graphics"
                    downloads={3420}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="18.7 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Project Management Spreadsheet"
                    category="Templates"
                    downloads={980}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="1.2 MB"
                    fileType="XLSX"
                  />
                  <ResourceCard
                    title="UI Design Kit"
                    category="Graphics"
                    downloads={2150}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="42.5 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Marketing Plan Template"
                    category="Documents"
                    downloads={1680}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="3.1 MB"
                    fileType="PDF"
                  />
                  <ResourceCard
                    title="Ambient Background Music"
                    category="Audio"
                    downloads={890}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="8.5 MB"
                    fileType="MP3"
                  />
                  <ResourceCard
                    title="Resume Template Pack"
                    category="Templates"
                    downloads={4320}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="5.2 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Product Mockup Templates"
                    category="Graphics"
                    downloads={1750}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="24.8 MB"
                    fileType="PSD"
                  />
                </div>
              </TabsContent>
              <TabsContent value="templates" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ResourceCard
                    title="Business Proposal Template"
                    category="Templates"
                    downloads={1250}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="2.4 MB"
                    fileType="DOCX"
                  />
                  <ResourceCard
                    title="Project Management Spreadsheet"
                    category="Templates"
                    downloads={980}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="1.2 MB"
                    fileType="XLSX"
                  />
                  <ResourceCard
                    title="Resume Template Pack"
                    category="Templates"
                    downloads={4320}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="5.2 MB"
                    fileType="ZIP"
                  />
                </div>
              </TabsContent>
              <TabsContent value="documents" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ResourceCard
                    title="Marketing Plan Template"
                    category="Documents"
                    downloads={1680}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="3.1 MB"
                    fileType="PDF"
                  />
                  <ResourceCard
                    title="Business Analysis Report"
                    category="Documents"
                    downloads={1240}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="2.8 MB"
                    fileType="PDF"
                  />
                  <ResourceCard
                    title="Digital Marketing Guide"
                    category="Documents"
                    downloads={5980}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="4.8 MB"
                    fileType="PDF"
                  />
                </div>
              </TabsContent>
              <TabsContent value="graphics" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ResourceCard
                    title="Social Media Graphics Pack"
                    category="Graphics"
                    downloads={3420}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="18.7 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="UI Design Kit"
                    category="Graphics"
                    downloads={2150}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="42.5 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Product Mockup Templates"
                    category="Graphics"
                    downloads={1750}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="24.8 MB"
                    fileType="PSD"
                  />
                  <ResourceCard
                    title="Professional Icon Set"
                    category="Graphics"
                    downloads={6420}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="12.7 MB"
                    fileType="SVG"
                  />
                </div>
              </TabsContent>
              <TabsContent value="audio" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ResourceCard
                    title="Ambient Background Music"
                    category="Audio"
                    downloads={890}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="8.5 MB"
                    fileType="MP3"
                  />
                  <ResourceCard
                    title="Sound Effects Collection"
                    category="Audio"
                    downloads={1250}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="24.3 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Podcast Intro Music"
                    category="Audio"
                    downloads={760}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="3.2 MB"
                    fileType="MP3"
                  />
                </div>
              </TabsContent>
              <TabsContent value="videos" className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ResourceCard
                    title="Motion Graphics Templates"
                    category="Videos"
                    downloads={1840}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="78.5 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Video Transitions Pack"
                    category="Videos"
                    downloads={2230}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="124.7 MB"
                    fileType="ZIP"
                  />
                  <ResourceCard
                    title="Stock Video Collection"
                    category="Videos"
                    downloads={1560}
                    image="/placeholder.svg?height=200&width=300"
                    fileSize="256.8 MB"
                    fileType="ZIP"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Downloads</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out what others are downloading the most
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Complete Business Toolkit"
                category="Templates"
                downloads={8750}
                image="/placeholder.svg?height=200&width=300"
                fileSize="48.2 MB"
                fileType="ZIP"
                featured={true}
              />
              <ResourceCard
                title="Professional Icon Set"
                category="Graphics"
                downloads={6420}
                image="/placeholder.svg?height=200&width=300"
                fileSize="12.7 MB"
                fileType="SVG"
                featured={true}
              />
              <ResourceCard
                title="Digital Marketing Guide"
                category="Documents"
                downloads={5980}
                image="/placeholder.svg?height=200&width=300"
                fileSize="4.8 MB"
                fileType="PDF"
                featured={true}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2023 ResourceHub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
