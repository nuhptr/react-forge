import type { ComponentType } from "react"

interface WithLoadingProps {
    loading: boolean
}

/**
 * Higher-Order Component: membungkus komponen dengan status loading.
 *
 * Single Responsibility: hanya menambahkan perilaku loading, tidak mengubah
 * logika komponen yang dibungkus.
 */
const withLoading = <P extends object>(Wrapped: ComponentType<P>) => {
    const WrappedWithLoading = (props: P & WithLoadingProps) => {
        if (props.loading) {
            return <p className="text-slate-400">Memuat...</p>
        }

        const { loading: _loading, ...rest } = props

        return <Wrapped {...(rest as P)} />
    }

    WrappedWithLoading.displayName = `withLoading(${Wrapped.displayName ?? "Component"})`

    return WrappedWithLoading
}

export default withLoading
