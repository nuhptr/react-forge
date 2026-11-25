import type { ComponentType } from "react"

import BasicTests from "./basic-tests"
import BoundaryTesting from "./boundary-testing"
import Matchers from "./matchers"
import ParameterizedTesting from "./parameterized-testing"
import PositiveNegativeTesting from "./positive-negative-testing"
import Tdd from "./tdd"
import TestingAsync from "./testing-async"
import TestsSyntaxIntro from "./tests-syntax-intro"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog modul berurutan abjad (A-Z).
 *
 * Single Responsibility: hanya mendefinisikan daftar modul; tidak merender UI.
 */
export const demos: Demo[] = [
    {
        id: "basic-tests",
        title: "Basic Tests",
        description: "Assertion pada angka, string, array, objek.",
        Component: BasicTests,
    },
    {
        id: "boundary-testing",
        title: "Boundary Testing",
        description: "Uji nilai batas.",
        Component: BoundaryTesting,
    },
    {
        id: "matchers",
        title: "Matchers",
        description: "Jest/Vitest matchers.",
        Component: Matchers,
    },
    {
        id: "parameterized-testing",
        title: "Parameterized Testing",
        description: "it.each untuk banyak kasus.",
        Component: ParameterizedTesting,
    },
    {
        id: "positive-negative-testing",
        title: "Positive & Negative",
        description: "Kasus valid dan invalid.",
        Component: PositiveNegativeTesting,
    },
    {
        id: "tdd",
        title: "TDD",
        description: "Red-green-refactor.",
        Component: Tdd,
    },
    {
        id: "testing-async",
        title: "Testing Async",
        description: "await, resolves, dan rejects.",
        Component: TestingAsync,
    },
    {
        id: "tests-syntax-intro",
        title: "Tests Syntax Intro",
        description: "describe, it, expect, dan AAA.",
        Component: TestsSyntaxIntro,
    },
]
