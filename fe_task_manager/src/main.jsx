import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import viVN from 'antd/es/locale/vi_VN'
import '@/assets/tailwind.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: 3,
      refetchOnWindowFocus: false,
      retryDelay: 3000,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ConfigProvider
    locale={viVN}
    theme={{
      token: {
        colorPrimary: '#249fd4',
        colorSuccess: '#ade792',
        colorError: '#e05d5d',
        colorWarning: '#ffb344',
        colorInfo: '#113cfc',
        controlHeightLG: 56,
        controlHeight: 46,
        controlHeightSM: 40,
        controlHeightXS: 24,
      },
      components: {
        Tag: {
          green: '#2f8a8a',
        },
        Dropdown: {},
        Button: {
          controlOutline: 'none',
        },
      },
    }}
  >
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ConfigProvider>,
  // </React.StrictMode>,
)
