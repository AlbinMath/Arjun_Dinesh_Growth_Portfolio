import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch and check feature flags.
 * 
 * @param {string} flagName - The key of the feature flag to check.
 * @param {boolean} defaultValue - Check 'api/flags.js' for implementation details.
 * @returns {boolean} - The current value of the feature flag.
 */
export function useFeatureFlag(flagName, defaultValue = false) {
    const [isEnabled, setIsEnabled] = useState(defaultValue);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the fetch function
        const fetchFlag = async () => {
            // FIX: Prevent Vite from crashing by trying to bundle 'api/flags.js' when it detects a fetch to that path locally.
            // In 'npm run dev', this fetch hits the file system. In 'vercel dev' or production, it hits the API.
            if (import.meta.env.DEV) {
                console.warn("[FeatureFlag] Local Development: Skipping API fetch to avoid Vite errors. Using default value.");
                setIsEnabled(defaultValue);
                setLoading(false);
                return;
            }

            try {
                // Production fetch
                const response = await fetch('/api/flags');

                // Gracefully handle non-JSON responses (HTML from Vite) or failures
                const contentType = response.headers.get("content-type");
                if (!response.ok || !contentType || !contentType.includes("application/json")) {
                    console.warn("[FeatureFlag] API not available (likely local mode). Using default.");
                    setLoading(false);
                    return;
                }

                const flags = await response.json();

                if (flags && typeof flags[flagName] !== 'undefined') {
                    setIsEnabled(flags[flagName]);
                }
            } catch (error) {
                console.warn(`[FeatureFlag] Error fetching flag '${flagName}':`, error);
                // Keep default value on error
            } finally {
                setLoading(false);
            }
        };

        fetchFlag();
    }, [flagName]);

    return isEnabled;
}
