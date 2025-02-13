// src/lib/auth.ts
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export async function getUser() {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')

    if (!token) return null

    try {
        const user = jwt.verify(token.value, process.env.JWT_SECRET!)
        return user
    } catch {
        return null
    }
}