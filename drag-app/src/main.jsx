import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from '../NewApp/Components/Todo'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
