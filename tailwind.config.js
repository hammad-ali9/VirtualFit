/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#2D3FE7",
                "primary-dark": "#1e2bb0",
                "background-light": "#FFFFFF",
                "background-dark": "#0F172A",
                "text-main": "#0F172A",
                "text-muted": "#64748B",
                "accent": "#14B8A6",
                "heading": "#0F172A",
                "body": "#64748B",
                "page": "#F8FAFC",
                "border-gray": "#E2E8F0",
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"],
                "display": ["Inter", "sans-serif"]
            },
            backgroundImage: {
                'gradient-blue': 'linear-gradient(135deg, #2D3FE7 0%, #4F46E5 100%)',
                'gradient-subtle': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
            }
        },
    },
    plugins: [],
}
