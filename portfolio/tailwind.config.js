/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#d4af37',
                    light: '#f3e5ab',
                    dim: 'rgba(212, 175, 55, 0.15)',
                },
                bg: {
                    DEFAULT: '#080808',
                    secondary: '#111111',
                    tertiary: '#161616',
                }
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                serif: ['"Cormorant Garamond"', 'serif'],
            },
            backgroundImage: {
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
