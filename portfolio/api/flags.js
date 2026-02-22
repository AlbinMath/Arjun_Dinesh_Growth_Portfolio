import { createClient } from '@vercel/edge-config';

export const config = {
    runtime: 'edge', // Use Edge Runtime for speed
};

export default async function handler(request) {
    try {
        // If Edge Config is not linked, return empty flags to prevent 500 error
        if (!process.env.EDGE_CONFIG) {
            return new Response(JSON.stringify({}), {
                status: 200,
                headers: { 'content-type': 'application/json' },
            });
        }

        // Initialize Edge Config client
        // Expects process.env.EDGE_CONFIG to be set in Vercel Project Settings
        const edgeConfig = createClient(process.env.EDGE_CONFIG);

        // Fetch all flags or a specific one
        const flags = await edgeConfig.getAll();

        return new Response(
            JSON.stringify(flags),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                    'cache-control': 'public, s-maxage=1, stale-while-revalidate=59', // Cache for 1s, allow stale for 59s
                },
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to fetch flags', details: error.message }),
            { status: 500, headers: { 'content-type': 'application/json' } }
        );
    }
}
