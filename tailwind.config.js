/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'Mobile': '375px',
        'Desktop': '1400px'
      },
      colors: {
        LightMode_Background: 'hsl(var(--Light-Mode-Background))',
        DarkModeText_and_Light_Mode_Elements: 'hsl(var(--Dark-Mode-Text-and-Light-Mode-Elements))',
        LightMode_Input: 'hsl(var(--Light-Mode-Input))',
        LightMode_Text: 'hsl(var(--Light-Mode-Text))',
        DarkMode_Background: 'hsl(var(--Dark-Mode-Background))',
        DarkMode_Elements: 'hsl(var(--Dark-Mode-Elements))',
      }
    },
  },
  plugins: [],
}