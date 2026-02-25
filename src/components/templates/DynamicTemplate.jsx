"use client";

import { useMemo } from "react";
import { mapDataToTemplate } from "@/lib/template-mapper";

/**
 * DynamicTemplate Component
 * Renders a raw HTML template with user data.
 */
export const DynamicTemplate = ({ html, data }) => {
    const renderedHtml = useMemo(() => {
        // We can also preprocess data here if needed (e.g., flattening skills)
        const processedData = {
            ...data,
            technical: data.skills?.technical?.map(s => ({ item: s })) || [],
            soft: data.skills?.soft?.map(s => ({ item: s })) || [],
            tools: data.skills?.tools?.map(s => ({ item: s })) || [],
        };

        return mapDataToTemplate(html, processedData);
    }, [html, data]);

    return (
        <div
            className="dynamic-template-container"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
    );
};
