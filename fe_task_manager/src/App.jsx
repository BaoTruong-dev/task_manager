import { useRoutes } from 'react-router-dom'
import { routers } from './routes'

export const App = () => {
  const element = useRoutes(routers)
  return element
}
