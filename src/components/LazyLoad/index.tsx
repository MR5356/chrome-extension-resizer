import React, { Suspense, ComponentType } from 'react'
import Loading from '../Loading'

// 定义可能为空的组件 Props
type MaybeProps<T> = T extends Record<string, never> ? void | T : T

interface LazyLoadProps<T extends Record<string, unknown>> {
    component: ComponentType<T>
    componentProps?: MaybeProps<T>
    fallback?: React.ReactNode
}

export function LazyLoad<T extends Record<string, unknown>>({
                                                                component: Component,
                                                                componentProps,
                                                                fallback = <Loading />,
                                                            }: LazyLoadProps<T>) {
    return (
        <Suspense fallback={fallback}>
            <Component {...(componentProps as T)} />
        </Suspense>
    )
}
