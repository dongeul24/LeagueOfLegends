'use client';

import ErrorScreen from '@/components/status/ErrorScreen';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <ErrorScreen reset={reset} message="전역 에러가 발생함!" />
      </body>
    </html>
  );
}
