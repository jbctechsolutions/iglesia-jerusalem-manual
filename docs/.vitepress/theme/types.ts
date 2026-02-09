export interface Device {
  id: string
  name: string
  type: string
  status: 'online' | 'offline' | 'unknown'
  details?: DeviceDetails
}

export interface DeviceDetails {
  powerState?: 'on' | 'off'
  powerWatts?: number
  recording?: boolean
  [key: string]: any
}

export interface StatusResponse {
  overall: 'healthy' | 'degraded' | 'offline' | 'unknown'
  timestamp: string
  devices: Device[]
}

export interface APIConfig {
  endpoints: string[]
  pollInterval: number
  timeout: number
  retryDelay: number
}
