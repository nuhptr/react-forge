import { Badge, Button, Callout, Card, Flex, Heading, Text, TextField } from "@radix-ui/themes"

/**
 * Demo Radix Themes: Theme provider, Flex, Text, Button, Card, Callout, dan
 * TextField dari `@radix-ui/themes`.
 *
 * @returns Antarmuka aksesibel dengan komponen Radix Themes.
 */
export default function RadixThemes() {
    return (
        <section className="grid gap-6" aria-labelledby="radix-title">
            <div>
                <h2 id="radix-title" className="text-2xl font-bold text-slate-900">
                    Radix UI Themes
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                    Komponen aksesibel dengan tema bawaan — tanpa class styling manual.
                </p>
            </div>

            <Flex direction="column" gap="3">
                <Text>Hello from Radix Themes :)</Text>
                <Flex gap="2" align="center">
                    <Button>Let's go</Button>
                    <Button variant="soft" color="cyan">
                        Soft
                    </Button>
                    <Button variant="outline">Outline</Button>
                </Flex>
                <Flex gap="2" align="center">
                    <Badge color="green">Active</Badge>
                    <Badge color="amber">Pending</Badge>
                </Flex>
            </Flex>

            <Card>
                <Heading size="3">Card Radix</Heading>
                <Text as="p" size="2" color="gray">
                    Kartu dengan tipografi dan warna dari sistem tema.
                </Text>
            </Card>

            <Callout.Root color="blue">
                <Callout.Text>Ini adalah callout dari Radix Themes.</Callout.Text>
            </Callout.Root>

            <Flex direction="column" gap="1" maxWidth="20rem">
                <Text as="label" size="2" weight="bold">
                    Email
                </Text>
                <TextField.Root placeholder="user@example.com" />
            </Flex>
        </section>
    )
}
