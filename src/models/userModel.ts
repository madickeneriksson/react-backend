export interface User {
    id: number
    firstname: string
    lastname: string
    email: string
}

export interface UserSignUp {
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface UserSignIn {
    email: string
    password: string
}