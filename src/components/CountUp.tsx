"use client";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type CounterProps = {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
};

export default function Counter({ end, duration = 2.5, suffix = '', prefix = '', decimals = 0, className = '' }: CounterProps) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <span ref={ref} className={className}>
            {inView ? (
                <CountUp
                    end={end}
                    duration={duration}
                    suffix={suffix}
                    prefix={prefix}
                    decimals={decimals}
                    separator=","
                />
            ) : (
                <span>0</span>
            )}
        </span>
    );
}
