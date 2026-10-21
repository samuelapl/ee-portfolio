import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import PageLoadingAnimation from './components/Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Blur effect applied conditionally to the HomePage */}
      <div className={`transition-all duration-500 ${isLoading ? 'blur-md' : 'blur-none'}`}>
        <HomePage />
      </div>
      
      {/* Loading animation overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <PageLoadingAnimation />
        </div>
      )}
    </div>
  )
}

export default App