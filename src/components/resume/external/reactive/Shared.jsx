"use client";

import React from 'react';
import { useResumeStore } from './ReactiveProvider';
import { cn, getSectionTitle } from '@/lib/reactive/utils';
import * as Icons from "@phosphor-icons/react";

// --- Shared Display Components ---

export function PagePicture() {
    const picture = useResumeStore((state) => state.resume.data.picture);
    if (picture.hidden || !picture.url) return null;

    return (
        <div
            className="page-picture overflow-hidden border"
            style={{
                width: `${picture.size}pt`,
                height: `${picture.size / picture.aspectRatio}pt`,
                borderRadius: `${picture.borderRadius}%`,
                borderColor: picture.borderColor,
                borderWidth: `${picture.borderWidth}pt`,
                transform: `rotate(${picture.rotation}deg)`,
                boxShadow: picture.shadowWidth > 0 ? `0 0 ${picture.shadowWidth}pt ${picture.shadowColor}` : 'none'
            }}
        >
            <img src={picture.url} alt="Profile" className="w-full h-full object-cover" />
        </div>
    );
}

export function PageLink({ url, label, icon: Icon }) {
    if (!url) return null;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
            {Icon && <Icon size={12} />}
            <span>{label || url}</span>
        </a>
    );
}

export function PageIcon({ icon, ...props }) {
    if (!icon) return null;
    const IconComponent = Icons[icon.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon'] || Icons.QuestionIcon;
    return <IconComponent {...props} />;
}

export function PageSection({ type, className, children }) {
    const section = useResumeStore((state) => state.resume.data.sections[type]);
    if (!section || section.hidden) return null;

    const items = (section.items || []).filter((item) => !item.hidden);
    if (items.length === 0 && type !== 'summary') return null;

    return (
        <section className={cn(`page-section page-section-${type}`, className)}>
            <h6 className="mb-1.5 font-bold uppercase tracking-wider text-[var(--page-primary-color)] border-b border-[var(--page-primary-color)] pb-0.5">
                {section.title || getSectionTitle(type)}
            </h6>

            <div
                className="section-content grid gap-x-[var(--page-gap-x)] gap-y-[var(--page-gap-y)]"
                style={{ gridTemplateColumns: `repeat(${section.columns || 1}, 1fr)` }}
            >
                {items.map((item) => (
                    <div key={item.id} className={cn(`section-item section-item-${type} print:break-inside-avoid`)}>
                        {children(item)}
                    </div>
                ))}
            </div>
        </section>
    );
}

// --- Item Components ---

export function ExperienceItem({ company, position, location, period, description }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between items-baseline">
                <div className="font-bold text-sm">{position}</div>
                <div className="text-xs opacity-60 font-medium">{period}</div>
            </div>
            <div className="flex justify-between items-center text-[10pt]">
                <div className="italic">{company}</div>
                <div className="text-[9pt] opacity-50">{location}</div>
            </div>
            {description && (
                <div
                    className="text-[9pt] leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    );
}

export function EducationItem({ school, degree, area, period, location, description }) {
    return (
        <div className="space-y-0.5">
            <div className="flex justify-between items-baseline">
                <div className="font-bold text-sm">{school}</div>
                <div className="text-xs opacity-60 font-medium">{period}</div>
            </div>
            <div className="flex justify-between items-baseline text-[10pt]">
                <div>{degree} {area && `in ${area}`}</div>
                <div className="text-[9pt] opacity-50">{location}</div>
            </div>
            {description && (
                <div
                    className="text-[9pt] mt-1 opacity-70"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    );
}

export function SkillsItem({ name, proficiency, keywords }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between items-center">
                <div className="font-bold text-[10pt]">{name}</div>
                {proficiency && <div className="text-[8pt] uppercase tracking-tighter opacity-50">{proficiency}</div>}
            </div>
            {keywords && keywords.length > 0 && (
                <div className="flex flex-wrap gap-1">
                    {keywords.map((kw, i) => (
                        <span key={i} className="text-[8pt] px-1.5 py-0.5 bg-black/5 rounded">{kw}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

export function PageSummary({ className }) {
    const summary = useResumeStore((state) => state.resume.data.summary);
    if (summary.hidden || !summary.content) return null;

    return (
        <section className={cn("page-section page-section-summary", className)}>
            <h6 className="mb-1.5 font-bold uppercase tracking-wider text-[var(--page-primary-color)] border-b border-[var(--page-primary-color)] pb-0.5">
                {summary.title || "Summary"}
            </h6>
            <div
                className="text-[10pt] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: summary.content }}
            />
        </section>
    );
}

// --- Section Resolver ---
export function getSectionComponent(section) {
    switch (section) {
        case "summary":
            return ({ className }) => <PageSummary className={className} />;
        case "experience":
            return ({ className, sectionClassName }) => (
                <PageSection type="experience" className={cn(sectionClassName, className)}>
                    {(item) => <ExperienceItem {...item} />}
                </PageSection>
            );
        case "education":
            return ({ className, sectionClassName }) => (
                <PageSection type="education" className={cn(sectionClassName, className)}>
                    {(item) => <EducationItem {...item} />}
                </PageSection>
            );
        case "skills":
            return ({ className, sectionClassName }) => (
                <PageSection type="skills" className={cn(sectionClassName, className)}>
                    {(item) => <SkillsItem {...item} />}
                </PageSection>
            );
        default:
            return () => null;
    }
}
