'use client';

import Link, { LinkProps } from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AnchorHTMLAttributes, Suspense } from 'react';

type TrackedLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

function TrackedLinkInner({ href, children, ...props }: TrackedLinkProps) {
    const searchParams = useSearchParams();

    let finalHref = href;

    if (typeof href === 'string' && searchParams && searchParams.toString()) {
        const hasQuery = href.includes('?');
        const separator = hasQuery ? '&' : '?';
        finalHref = `${href}${separator}${searchParams.toString()}`;
    }

    return (
        <Link href={finalHref} {...props}>
            {children}
        </Link>
    );
}

export default function TrackedLink({ href, children, ...props }: TrackedLinkProps) {
    return (
        <Suspense fallback={<Link href={href} {...props}>{children}</Link>}>
            <TrackedLinkInner href={href} {...props}>
                {children}
            </TrackedLinkInner>
        </Suspense>
    );
}
