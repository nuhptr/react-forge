import CounterRender from "./counter-render"

/**
 * Demo render props.
 *
 * @returns Counter dengan tampilan yang disuntikkan lewat prop render.
 */
export default function RenderProps() {
    return (
        <CounterRender
            render={(value) => <p className="text-lg font-semibold">Nilai: {value}</p>}
        />
    )
}
