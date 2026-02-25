"use client";

import React from 'react';
import { useResumeStore } from './ReactiveProvider';
import { getSectionComponent, PagePicture, PageLink } from './Shared';
import { cn } from '@/lib/reactive/utils';
import * as Icons from "@phosphor-icons/react";

// --- Pikachu Template ---
export function Pikachu({ pageLayout }) {
    const { main, sidebar, fullWidth } = pageLayout;
    const basics = useResumeStore((state) => state.resume.data.basics);

    return (
        <div className="template-pikachu bg-white min-h-[1100px] w-[800px] shadow-sm font-sans text-slate-900 overflow-hidden">
            <div className="flex">
                {!fullWidth && (
                    <aside className="w-[30%] bg-slate-50 min-h-[1100px] p-8 space-y-8">
                        <PagePicture />
                        <div className="space-y-8">
                            {sidebar.map((section) => {
                                const Component = getSectionComponent(section);
                                return <Component key={section} sectionClassName="sidebar-section" />;
                            })}
                        </div>
                    </aside>
                )}

                <main className={cn("p-10 space-y-8", fullWidth ? "w-full" : "w-[70%]")}>
                    {/* Header */}
                    <div className="page-header w-full space-y-4 rounded-xl bg-[var(--page-primary-color)] p-8 text-white shadow-lg">
                        <div className="border-white/20 border-b pb-4">
                            <h2 className="text-4xl font-extrabold tracking-tight">{basics.name}</h2>
                            <p className="text-xl opacity-90 font-medium">{basics.headline}</p>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-80">
                            {basics.email && (
                                <div className="flex items-center gap-2">
                                    <Icons.Envelope size={14} />
                                    <PageLink url={`mailto:${basics.email}`} label={basics.email} />
                                </div>
                            )}
                            {basics.phone && (
                                <div className="flex items-center gap-2">
                                    <Icons.Phone size={14} />
                                    <PageLink url={`tel:${basics.phone}`} label={basics.phone} />
                                </div>
                            )}
                            {basics.location && (
                                <div className="flex items-center gap-2">
                                    <Icons.MapPin size={14} />
                                    <span>{basics.location}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8">
                        {main.map((section) => {
                            const Component = getSectionComponent(section);
                            return <Component key={section} />;
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
}

// --- Onyx Template ---
export function Onyx({ pageLayout }) {
    const { main, fullWidth } = pageLayout;
    const basics = useResumeStore((state) => state.resume.data.basics);

    return (
        <div className="template-onyx bg-white min-h-[1100px] w-[800px] p-12 shadow-sm font-serif text-slate-900 space-y-10">
            <header className="flex justify-between items-start border-b-4 border-slate-900 pb-8">
                <div className="space-y-2">
                    <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">{basics.name}</h1>
                    <p className="text-2xl text-slate-500 font-bold italic">{basics.headline}</p>
                </div>
                <div className="text-right space-y-1 text-sm font-medium text-slate-400">
                    <PageLink url={`mailto:${basics.email}`} label={basics.email} />
                    <p>{basics.phone}</p>
                    <p>{basics.location}</p>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-12">
                {main.map((section) => {
                    const Component = getSectionComponent(section);
                    return <Component key={section} />;
                })}
            </div>
        </div>
    );
}
