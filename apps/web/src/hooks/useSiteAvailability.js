import { useEffect, useState } from 'react';

const AVAILABILITY_API = 'https://api.priceport.ai/api/v1/availability?id=1';

export function useSiteAvailability() {
  const [isAvailable, setIsAvailable] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function checkAvailability() {
      try {
        const response = await fetch(AVAILABILITY_API);
        if (!response.ok) throw new Error('Availability check failed');

        const data = await response.json();
        if (!cancelled) {
          setIsAvailable(Boolean(data.status));
        }
      } catch {
        if (!cancelled) {
          setIsAvailable(true);
        }
      }
    }

    checkAvailability();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    isAvailable,
    isLoading: isAvailable === null,
  };
}
