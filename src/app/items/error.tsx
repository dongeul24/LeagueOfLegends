'use client';

import ErrorScreen from '@/components/status/ErrorScreen';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorScreen reset={reset} message={error.message} />;
}
