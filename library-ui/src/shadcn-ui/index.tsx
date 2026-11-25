import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Demo shadcn/ui dengan komponen hasil CLI (`shadcn add button card`).
 *
 * Komponen disalin ke project oleh CLI ke `src/components/ui/`, lalu dipakai
 * lewat alias `@/*` sesuai dokumentasi instalasi Vite.
 *
 * @returns Komponen Button dan Card dari registry shadcn/ui.
 */
export default function ShadcnUi() {
    return (
        <section className="grid gap-6" aria-labelledby="shadcn-title">
            <div>
                <h2 id="shadcn-title" className="text-2xl font-bold text-slate-900">
                    shadcn/ui Primitives
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                    Komponen asli dari CLI: <code>shadcn add button card</code>.
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button size="sm">Small</Button>
            </div>

            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>Card dari CLI</CardTitle>
                    <CardDescription>
                        Disalin oleh shadcn ke src/components/ui/card.tsx.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Import memakai alias <code>@/components/ui/card</code>.
                </CardContent>
            </Card>
        </section>
    )
}
