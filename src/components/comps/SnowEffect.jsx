import React from 'react'

const SnowEffect = () => {
  return (
          <div className="absolute inset-0">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute h-2 w-2 bg-white rounded-full opacity-50 animate-move-particles"
            style={ {
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationIterationCount: 'infinite',
            }}
            ></div>
        ))}
      </div>
  )
}

export default SnowEffect