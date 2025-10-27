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
        <Icon
            icon={name}
            width={size}
            height={size}
            color={color}
            className={className}
            aria-hidden={ariaHidden}
            title={title}
            role={title ? 'img' : 'presentation'}
        />
    );
}
