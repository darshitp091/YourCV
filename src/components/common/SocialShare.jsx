import React from 'react';
import { Button } from '@/components/ui/Button';
import { LucideLinkedin, LucideTwitter, LucideSend } from 'lucide-react';

export const SocialShare = ({ url, title, text }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent(text);

    const shareLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`
    };

    return (
        <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Brag to your network</p>
            <div className="grid grid-cols-2 gap-2">
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 text-[10px] border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/5">
                        <LucideLinkedin className="w-3 h-3" />
                        LinkedIn
                    </Button>
                </a>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 text-[10px] border-[#1DA1F2]/20 text-[#1DA1F2] hover:bg-[#1DA1F2]/5">
                        <LucideTwitter className="w-3 h-3" />
                        Twitter
                    </Button>
                </a>
            </div>
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 text-[10px] border-emerald-500/20 text-emerald-600 hover:bg-emerald-50">
                    <LucideSend className="w-3 h-3" />
                    Share on WhatsApp
                </Button>
            </a>
        </div>
    );
};
