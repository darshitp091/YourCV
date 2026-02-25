import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const templatesDir = path.join(process.cwd(), "src/templates/bulk");

        if (!fs.existsSync(templatesDir)) {
            return NextResponse.json({ templates: [] });
        }

        const files = fs.readdirSync(templatesDir);
        const htmlFiles = files.filter(file => file.endsWith(".html"));

        const templates = htmlFiles.map(file => {
            const filePath = path.join(templatesDir, file);
            const content = fs.readFileSync(filePath, "utf-8");
            return {
                id: file.replace(".html", ""),
                name: file.replace(".html", "").split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
                html: content
            };
        });

        return NextResponse.json({ templates });
    } catch (error) {
        console.error("Bulk Templates Error:", error);
        return NextResponse.json({ error: "Failed to load bulk templates" }, { status: 500 });
    }
}
