import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-cream pt-16">
      <Container className="text-center">
        <p className="font-serif text-6xl text-forest-900">404</p>
        <h1 className="mt-4 font-serif text-2xl text-forest-900">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" variant="primary" size="lg">
            Back to Home
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
