import { createContext } from "react"

const ProfileContext = createContext({
    isAuth: null,
    setProfile: () => { }
})

export default ProfileContext