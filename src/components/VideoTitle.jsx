import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="max-w-xl md:max-w-2xl space-y-4 mb-20">
      {/* Netflix Original Badge (Optional) */}
      <div className="flex items-center gap-2">
        <span className="text-red-600 font-bold text-2xl">N</span>
        <span className="text-gray-300 text-sm uppercase tracking-wider">Film</span>
      </div>

      {/* Movie Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-white">
        {title}
      </h1>

      <p className="text-sm max-w-md md:max-w-lg md:text-base lg:text-lg text-gray-200 drop-shadow-lg leading-relaxed line-clamp-3">
        {overview}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded hover:bg-gray-200 transition">
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded hover:bg-gray-500/50 transition backdrop-blur-sm">
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0-4h.01" />
          </svg>
          More Info
        </button>
      </div>
    </div>

  )
}

export default VideoTitle
