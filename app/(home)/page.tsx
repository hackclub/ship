import Image from 'next/image';
import Link from 'next/link';
import { docsRoute, gitConfig } from '@/lib/shared';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';

const repoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-xl space-y-8 text-center">
        <div className="space-y-3">
          <div className="mx-auto flex max-w-2xl flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            <Image
              src="/flag-standalone.svg"
              alt="Hack Club"
              width={526}
              height={184}
              priority
              className="h-20 w-auto sm:h-24 md:h-28"
            />
            <Image
              src="/logo_nobg_dark.png"
              alt="Shipwrights"
              width={512}
              height={512}
              priority
              className="h-32 w-auto object-contain sm:h-36 md:h-40"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-5xl">
            Shipwrights <span className="font-normal text-fd-muted-foreground">@</span>{' '}
            <span className="text-[#ec3750]">Hack Club</span>
          </h1>
          <div className="mx-auto max-w-md space-y-4 pt-1">
            <p className="text-lg font-medium leading-snug text-fd-foreground">
              Know what reviewers want before you submit - not after you get rejected!
            </p>
            <p className="text-[15px] leading-7 text-fd-foreground/90">
              Here you will find many guides for every kind of project so that you could get your projects approved on first try!
            </p>
            <p className="text-sm text-fd-muted-foreground">
              Maintained by the Shipwrights Crew to let you know the latest information regarding the rules of shipping!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={docsRoute}
            className={cn(
              buttonVariants({
                color: 'primary',
                className: 'gap-2 rounded-2xl px-5 py-2.5 text-base',
              }),
            )}
          >
            Open docs
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                color: 'outline',
                className: 'rounded-2xl px-5 py-2.5 text-base',
              }),
            )}
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
