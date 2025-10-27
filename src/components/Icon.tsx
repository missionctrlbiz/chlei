"use client";
import { Icon } from '@iconify/react';
import React from 'react';

export type AppIconProps = {
    name: string;
    size?: number | string; // px or rem
    color?: string;
    className?: string;
    title?: string;
    ariaHidden?: boolean;
};

export default function AppIcon({ name, size = 24, color, className, title, ariaHidden }: AppIconProps) {
    return (
        <span className={className} title={title}>
            <Icon
                icon={name}
                width={size}
                height={size}
                color={color}
                aria-hidden={ariaHidden}
                role={title ? 'img' : 'presentation'}
            />
        </span>
    );
}
