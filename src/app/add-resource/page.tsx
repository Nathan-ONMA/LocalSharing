"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddResourcePage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-start gap-4 md:flex-row">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Add New Resource</h1>

          <form className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Resource Title</Label>
                <Input id="title" placeholder="Enter resource title" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="templates">Templates</SelectItem>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="graphics">Graphics</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="videos">Videos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your resource" rows={4} />
              </div>

              <div className="grid gap-2">
                <Label>Resource File</Label>
                <div className="border rounded-md p-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex h-10 w-full max-w-xs items-center justify-center rounded-md border border-dashed">
                      <label
                        htmlFor="resource-file"
                        className="flex cursor-pointer flex-col items-center justify-center px-4 py-2"
                      >
                        <Upload className="h-4 w-4 mb-1" />
                        <span className="text-xs text-muted-foreground">
                          {fileName ? fileName : "Upload resource file"}
                        </span>
                        <Input id="resource-file" type="file" className="hidden" onChange={handleFileChange} />
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">Max file size: 100MB</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fileSize">File Size</Label>
                  <Input id="fileSize" placeholder="e.g. 2.4 MB" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fileType">File Type</Label>
                  <Input id="fileType" placeholder="e.g. PDF, ZIP" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Submit Resource
            </Button>
          </form>
        </div>

        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Resource Preview Image</h2>
              <div className="border rounded-md p-4 mb-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  {imagePreview ? (
                    <div className="relative w-full aspect-video">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Resource preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
                      <label
                        htmlFor="image-upload"
                        className="flex cursor-pointer flex-col items-center justify-center px-4 py-2"
                      >
                        <Upload className="h-8 w-8 mb-2" />
                        <span className="text-sm text-muted-foreground">Upload preview image</span>
                        <Input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground">Recommended size: 600x400px</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Image Guidelines:</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Use high-quality images that represent your resource</li>
                  <li>• Avoid text-heavy images</li>
                  <li>• Maximum file size: 5MB</li>
                  <li>• Supported formats: JPG, PNG, WebP</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
