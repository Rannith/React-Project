import React, { useState, createContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = () => {
    const [user, setUser] = useState(null)
}