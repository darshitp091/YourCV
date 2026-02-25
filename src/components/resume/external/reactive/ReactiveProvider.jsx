"use client";

import React, { createContext, useContext, useMemo } from 'react';
import { mapToReactiveSchema } from '@/lib/reactive/adapter';

const ReactiveContext = createContext(null);

export const useResumeStore = (selector) => {
    const context = useContext(ReactiveContext);
    if (!context) {
        throw new Error("useResumeStore must be used within a ReactiveProvider");
    }
    return selector(context);
};

export function ReactiveProvider({ data, metadata, children }) {
    const reactiveData = useMemo(() => mapToReactiveSchema(data, metadata), [data, metadata]);

    // Mimic the Reactive Resume store structure
    const store = {
        resume: {
            data: reactiveData
        }
    };

    return (
        <ReactiveContext.Provider value={store}>
            {children}
        </ReactiveContext.Provider>
    );
}
