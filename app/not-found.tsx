import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <Image
        src="/favicon.png"
        alt="Ship"
        width={192}
        height={192}
        priority
        className="w-48 h-48 mb-4"
      />

      <h1 className="text-5xl font-extrabold mb-4">404</h1>

      <p className="text-lg text-zinc-600 mb-6">
        Sorry! We couldn't find the page you were looking for.
      </p>
      <p className="text-lg text-zinc-600 mb-6">
        If you think this shouldn't happen, please report it to us in <a href="https://hackclub.enterprise.slack.com/archives/C099P9FQQ91" target="_blank" rel="noreferrer" className="underline">#ask-the-shipwrights</a>!
      </p>
      
      <Link
        href="/"
        className={cn(
          buttonVariants({
            color: 'primary',
            className: 'gap-2 rounded-2xl px-5 py-2.5 text-base',
          }),
        )}
      >
        Go home
      </Link>
    </main>
  );
}
