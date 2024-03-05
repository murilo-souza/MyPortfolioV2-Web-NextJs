import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },

      colors: {
        github: '#171515',
        skills: '#7C3AED',
      },
    },
  },
  plugins: [],
}
export default config
