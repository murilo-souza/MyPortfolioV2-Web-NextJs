/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'
import Logo from '../icon.png'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={String(Logo)} style={{ width: '100%' }} alt="" />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  )
}
