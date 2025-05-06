import Link from "next/link"
import { ArrowLeft, Check, QrCode, Shield, Database, FileText, Package, Plus, Upload, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-64 flex-col border-r bg-gray-50">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">AuthentiChain</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Management</h2>
            <div className="grid gap-1">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <QrCode className="h-4 w-4" />
                QR Codes
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <Database className="h-4 w-4" />
                Blockchain Records
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                Reports
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20" />
            <div>
              <div className="font-medium">Admin User</div>
              <div className="text-xs text-gray-500">admin@example.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="md:hidden">
            <Shield className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto grid max-w-6xl gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Link>
                </Button>
                <h1 className="text-lg font-semibold md:text-xl">Product Management</h1>
              </div>
              <div className="flex gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card">
              <Tabs defaultValue="products">
                <div className="border-b">
                  <TabsList className="w-full justify-start rounded-none border-b px-6">
                    <TabsTrigger
                      value="products"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      All Products
                    </TabsTrigger>
                    <TabsTrigger
                      value="pending"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Pending Verification
                    </TabsTrigger>
                    <TabsTrigger
                      value="verified"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Verified
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="products" className="p-0">
                  <div className="flex items-center justify-between border-b px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Input className="w-[300px]" placeholder="Search products..." />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Import
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Manufacturer</TableHead>
                        <TableHead>Date Added</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">PRD001</TableCell>
                        <TableCell>Premium Headphones X1</TableCell>
                        <TableCell>AudioTech Industries</TableCell>
                        <TableCell>Jan 15, 2025</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span>Verified</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">PRD002</TableCell>
                        <TableCell>Luxury Watch Model Z</TableCell>
                        <TableCell>TimePiece Co.</TableCell>
                        <TableCell>Feb 03, 2025</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span>Verified</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">PRD003</TableCell>
                        <TableCell>Designer Handbag Classic</TableCell>
                        <TableCell>Fashion Luxury Ltd.</TableCell>
                        <TableCell>Feb 10, 2025</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500" />
                            <span>Pending</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">PRD004</TableCell>
                        <TableCell>Premium Smartphone X20</TableCell>
                        <TableCell>TechGiant Inc.</TableCell>
                        <TableCell>Mar 05, 2025</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span>Verified</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">PRD005</TableCell>
                        <TableCell>Authentic Sneakers Pro</TableCell>
                        <TableCell>SportWear Global</TableCell>
                        <TableCell>Apr 12, 2025</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500" />
                            <span>Pending</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Total Products</h3>
                </div>
                <div className="mt-4 text-3xl font-bold">128</div>
                <div className="mt-1 text-xs text-gray-500">+12 this month</div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold">Verified Products</h3>
                </div>
                <div className="mt-4 text-3xl font-bold">98</div>
                <div className="mt-1 text-xs text-gray-500">76% of total</div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold">QR Scans</h3>
                </div>
                <div className="mt-4 text-3xl font-bold">1,254</div>
                <div className="mt-1 text-xs text-gray-500">+348 this week</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
