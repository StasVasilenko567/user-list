export type User = {
    id: number,
    name: string,
    username: string,
    email?: string,
    phone?: string,
}

export function PlaceholderUser() : User {
    return {
        name: "oleg",
        username: "neoleg",
        id: -1
    }
}