import type { ReactNode } from "react"
import { createPortal } from "react-dom"

/**
 * Props untuk komponen {@link Portal}.
 */
export interface PortalProps {
    /** Elemen anak yang akan dirender di luar hierarki DOM komponen induknya. */
    children: ReactNode
    /** Atribut `id` elemen kontainer tujuan pada `index.html`. Nilai bawaan `"portal-root"`. */
    containerId?: string
}

/**
 * Komponen abstraksi React Portal yang me-mount `children` ke dalam kontainer DOM khusus.
 *
 * Menerapkan Dependency Inversion Principle (DIP) dengan memisahkan pencarian node DOM
 * dari komponen UI overlay atau notifikasi.
 *
 * @param props Konfigurasi tujuan portal.
 * @returns Elemen React Portal yang terhubung ke kontainer target, atau `null` jika tidak ditemukan.
 */
const Portal = ({ children, containerId = "portal-root" }: PortalProps) => {
    if (typeof document === "undefined") return null

    const targetContainer = document.getElementById(containerId)
    if (!targetContainer) return null

    return createPortal(children, targetContainer)
}

export default Portal
