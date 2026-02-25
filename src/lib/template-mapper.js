/**
 * Universal Template Mapper
 * Replaces placeholders in HTML templates with real user data.
 * Placeholders follow the format: {{path.to.data}}
 * For arrays, it looks for blocks like: <!-- repeat:experience --> ... <!-- end:repeat -->
 */
export function mapDataToTemplate(html, data) {
    let result = html;

    // 1. Handle Repeats (Arrays)
    // Example: <!-- repeat:experience --> ... {{role}} ... <!-- end:repeat -->
    const repeatRegex = /<!-- repeat:(\w+) -->([\s\S]*?)<!-- end:repeat -->/g;
    result = result.replace(repeatRegex, (match, key, itemTemplate) => {
        const items = data[key] || [];
        return items
            .map((item) => {
                let itemHtml = itemTemplate;
                // Replace item-specific placeholders
                const itemPlaceholderRegex = /{{(\w+)}}/g;
                return itemHtml.replace(itemPlaceholderRegex, (m, field) => {
                    return item[field] || "";
                });
            })
            .join("");
    });

    // 2. Handle Simple Placeholders
    // Example: {{personal.fullName}}, {{summary}}
    const placeholderRegex = /{{([\w.]+)}}/g;
    result = result.replace(placeholderRegex, (match, path) => {
        const keys = path.split(".");
        let value = data;
        for (const key of keys) {
            value = value?.[key];
        }
        return value || "";
    });

    return result;
}

/**
 * Example Template Structure (for bulk ingestion reference):
 * 
 * <div class="resume">
 *   <h1>{{personal.fullName}}</h1>
 *   <p>{{personal.jobTitle}}</p>
 *   
 *   <div class="summary">{{summary}}</div>
 *   
 *   <div class="experience">
 *     <!-- repeat:experience -->
 *     <div class="item">
 *       <h3>{{role}} at {{company}}</h3>
 *       <p>{{description}}</p>
 *     </div>
 *     <!-- end:repeat -->
 *   </div>
 * </div>
 */
