import { createContext, useState } from 'react'

export interface PlayerConfigProps {
    reverb: number,
    maxPan: number,
    minDrum: number,
    maxDrum: number,
    chorus: number,
    distortion: number
}

const defaultState = {
    reverb: 0.25, maxPan: 0.2, minDrum: 31, maxDrum: 81, chorus: 1.5, distortion: 0.4
}

export const usePlayerConfig = () => {
    const [config, setPlayerConfig] = useState(defaultState)

    return { config, setPlayerConfig }
}

type PlayerContextType = {
    config: PlayerConfigProps
    setPlayerConfig: Function
}

const initialValue = {
    config: defaultState,
    setPlayerConfig: () => ({})
}

export const playerConfigContext = createContext<PlayerContextType>(initialValue)
