'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Ensure page starts at top on initial load/reload
    window.scrollTo(0, 0)
  }, [])

  return null
}
