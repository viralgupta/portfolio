import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed inset-0 w-full h-full z-[-1] opacity-50' id='polygonshehe'>
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="hexagons"
              width={50}
              height={43.4}
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2) rotate(45)"
            >
              <polygon
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                id="hex"
              />
              <use xlinkHref="#hex" x={25} />
              <use xlinkHref="#hex" x={-25} />
              <use xlinkHref="#hex" x={12.5} y={-21.7} />
              <use xlinkHref="#hex" x={-12.5} y={-21.7} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      <div className='fixed md:hidden flex items-center bg-opacity-80 z-50 w-full h-full bg-black text-white text-center p-20 font-mono'> Please Switch to a Larger Device to View the content.</div>
    </>
  )
}

export default Background