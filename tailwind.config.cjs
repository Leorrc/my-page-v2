/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            keyframes: {
                gengar: {
                    '0%': { transform: 'scale(0.95)' },
                    '70%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0.95)' }
                }
            },
            animation: {
                gengar: 'gengar 2s infinite'
            },
            dropShadow: {
                rsrs: '0 0 1em rgb(36, 15, 70)'
            },
            colors: {
                gengar: '#5d5984',
                amarelo: '#dfa500',

                headerColor: '#272638',

                roxo1: '#545078',
                roxo2: '#9c95de',
                roxo3: '#aea6f7',

                color: '#6610f2',
                color2: '#6f42c1',

                bg1: '#8e2de2',
                bg2: '#4a00e0'
            },
            fontFamily: {
                display: ['Poppins, sans-serif']
            }
        }
    },
    plugins: []
}