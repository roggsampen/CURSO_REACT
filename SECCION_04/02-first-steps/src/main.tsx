import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeAoo } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeAoo /> */}
  </StrictMode>,
)
