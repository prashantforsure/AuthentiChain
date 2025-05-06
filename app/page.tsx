import Link from "next/link"
import { ArrowRight, Check, QrCode, Shield, Database, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">AuthentiChain</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Product
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Enterprise
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Log In
            </Link>
            <Button>Get started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                    Authentic products verification made simple
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    AuthentiChain's easy enough for individual consumers, and powerful enough to meet the needs of
                    enterprise organizations — including 78% of Fortune 500 companies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Sign up for free
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6 shadow-lg">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Verify Product Authenticity</h3>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Check className="h-4 w-4" />
                        Secure
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 p-4 border rounded-lg bg-gray-50">
                      <QrCode className="h-32 w-32 text-primary" strokeWidth={1} />
                      <p className="text-center text-sm text-gray-500">
                        Scan the QR code on your product to verify its authenticity
                      </p>
                      <Button className="w-full">Scan QR Code</Button>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        Blockchain Verified
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        IPFS Secured
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        Smart Contract
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        Tamper-proof
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2 text-primary">
                  <QrCode className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Scan & Verify</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Database className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Track Products</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Shield className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Manage Security</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FileText className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">View Reports</h3>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <div className="grid gap-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</div>
                    <div>
                      <h3 className="font-semibold">Manufacturers register products</h3>
                      <p className="text-gray-500">
                        Products are registered on the blockchain with unique identifiers and detailed information
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">2</div>
                    <div>
                      <h3 className="font-semibold">QR codes are generated</h3>
                      <p className="text-gray-500">
                        Each product receives a unique QR code linked to its blockchain record
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">3</div>
                    <div>
                      <h3 className="font-semibold">Consumers scan to verify</h3>
                      <p className="text-gray-500">
                        Scan the QR code to instantly verify product authenticity and view its history
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">4</div>
                    <div>
                      <h3 className="font-semibold">Ownership transfers are recorded</h3>
                      <p className="text-gray-500">All ownership changes are securely recorded on the blockchain</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="w-full">
                    Learn more about our technology
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
