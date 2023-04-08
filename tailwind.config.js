const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: true, // or 'media' or 'class'
    // theme: {
    //     extend: {
    //         colors: {
    //             light: {
    //                 background: '#FFFFFF',
    //                 text: '#000000',
    //                 primary: colors.blue[500],
    //                 secondary: colors.gray[400],
    //             },
    //         },
    //     },
    // },
    variants: {
        extend: {},
    },
    plugins: [],
}


