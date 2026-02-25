"use client";

import React, { useMemo } from 'react';
import { ReactiveProvider } from './ReactiveProvider';
import { Pikachu, Onyx } from './Templates';
import { match } from 'ts-pattern';

export function ReactiveRenderEngine({ data, templateId = "pikachu", primaryColor }) {
    const metadata = useMemo(() => ({
        template: templateId,
        primaryColor: primaryColor || "rgba(13, 110, 110, 1)", // Default teal
    }), [templateId, primaryColor]);

    const pageLayout = useMemo(() => ({
        main: ["summary", "experience", "education"],
        sidebar: ["skills"],
        fullWidth: templateId === "onyx"
    }), [templateId]);

    const TemplateComponent = useMemo(() => {
        return match(templateId)
            .with("pikachu", () => Pikachu)
            .with("onyx", () => Onyx)
            .otherwise(() => Pikachu);
    }, [templateId]);

    // Define CSS Variables for the engine
    const cssVariables = {
        "--page-primary-color": metadata.primaryColor,
        "--page-gap-y": "12pt",
        "--page-gap-x": "12pt",
        "--page-margin-x": "40pt",
        "--page-margin-y": "40pt",
    };

    return (
        <ReactiveProvider data={data} metadata={metadata}>
            <div style={cssVariables} className="reactive-engine-root">
                <TemplateComponent pageLayout={pageLayout} />
            </div>
        </ReactiveProvider>
    );
}
