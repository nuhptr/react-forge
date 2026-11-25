/**
 * Props for the {@link Car} component.
 */
export interface CarProps {
    modelName?: string
    bodyType?: string
}

/**
 * Renders single vehicle details using destructured props with fallback defaults.
 *
 * @param props Optional vehicle model name and body type.
 * @returns Vehicle summary block.
 */
const Car = ({ modelName = "Default", bodyType = "MPV" }: CarProps) => {
    return (
        <div>
            <h2>Car Model: {modelName}</h2>
            <p>Body Type: {bodyType}</p>
        </div>
    )
}

export default Car
