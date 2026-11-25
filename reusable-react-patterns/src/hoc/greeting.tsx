import withLoading from "./with-loading"

/** Komponen sederhana yang akan dibungkus HOC. */
export const Greeting = ({ name }: { name: string }) => <p className="text-lg">Halo, {name}!</p>

/** Versi Greeting dengan status loading dari HOC. */
export const GreetingWithLoading = withLoading(Greeting)
