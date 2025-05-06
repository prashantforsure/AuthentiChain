"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, QrCode, Shield, Database, FileText, Search, Package, Clock, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VerifyPage() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [isScanning, setIsScanning] = useState(false)

  const handleVerify = () => {
    // Simulate verification process
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setIsVerified(true)
    }, 2000)
  }

  const handleReset = () => {
    setIsVerified(null)
  }

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
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Verification</h2>
            <div className="grid gap-1">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <QrCode className="h-4 w-4" />
                Scan & Verify
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <Search className="h-4 w-4" />
                Search Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <Clock className="h-4 w-4" />
                Verification History
              </Link>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Management</h2>
            <div className="grid gap-1">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                My Products
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
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20" />
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-gray-500">john@example.com</div>
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
            <h1 className="text-lg font-semibold">Product Verification</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto grid max-w-6xl gap-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Link>
              </Button>
              <h1 className="text-lg font-semibold md:text-xl">Verify Product Authenticity</h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <Tabs defaultValue="qr-code">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="qr-code">QR Code</TabsTrigger>
                    <TabsTrigger value="serial">Serial Number</TabsTrigger>
                  </TabsList>
                  <TabsContent value="qr-code" className="space-y-4 pt-4">
                    <div className="flex flex-col items-center justify-center gap-6 p-4 border rounded-lg bg-gray-50">
                      {isScanning ? (
                        <div className="flex flex-col items-center gap-4">
                          <div className="h-32 w-32 animate-pulse bg-primary/20 rounded-lg flex items-center justify-center">
                            <QrCode className="h-16 w-16 text-primary/40" strokeWidth={1} />
                          </div>
                          <p className="text-center text-sm">Scanning QR code...</p>
                        </div>
                      ) : isVerified === null ? (
                        <>
                          <QrCode className="h-32 w-32 text-primary" strokeWidth={1} />
                          <p className="text-center text-sm text-gray-500">
                            Scan the QR code on your product to verify its authenticity
                          </p>
                          <Button className="w-full" onClick={handleVerify}>
                            Scan QR Code
                          </Button>
                        </>
                      ) : isVerified ? (
                        <div className="flex flex-col items-center gap-4">
                          <div className="h-32 w-32 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="h-16 w-16 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-green-600">Authentic Product</h3>
                          <p className="text-center text-sm text-gray-500">
                            This product has been verified as authentic on the blockchain
                          </p>
                          <Button variant="outline" className="w-full" onClick={handleReset}>
                            Scan Another
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-4">
                          <div className="h-32 w-32 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="h-16 w-16 text-red-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-red-600">Counterfeit Alert</h3>
                          <p className="text-center text-sm text-gray-500">
                            This product could not be verified on the blockchain
                          </p>
                          <Button variant="outline" className="w-full" onClick={handleReset}>
                            Try Again
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="serial" className="space-y-4 pt-4">
                    <div className="flex flex-col gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="serial" className="text-sm font-medium">
                          Product Serial Number
                        </label>
                        <div className="flex gap-2">
                          <Input id="serial" placeholder="Enter product serial number" />
                          <Button onClick={handleVerify}>Verify</Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Enter the serial number found on your product packaging or label
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              {isVerified && (
                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Product Information</h2>
                  <div className="space-y-4">
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">Product Name</div>
                      <div>Premium Headphones X1</div>
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">Manufacturer</div>
                      <div>AudioTech Industries</div>
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">Date of Manufacture</div>
                      <div>January 15, 2025</div>
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">Origin</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        Tokyo, Japan
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">Blockchain Verification</div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-green-600 font-medium">Verified</span>
                        <span className="text-xs text-gray-500">2 minutes ago</span>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">Ownership History</div>
                      <div className="text-xs text-gray-500">
                        <div className="flex items-center justify-between py-1">
                          <span>Manufacturer</span>
                          <span>Jan 15, 2025</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span>Distributor</span>
                          <span>Jan 20, 2025</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span>Retailer</span>
                          <span>Feb 05, 2025</span>
                        </div>
                        <div className="flex items-center justify-between py-1 font-medium">
                          <span>Current Owner</span>
                          <span>May 06, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
