import { createContext, useState, useEffect } from "react"

const TextContext = createContext()

export const TextContextProvider = ({children}) => {

    const [teleprompterText, setTeleprompterText] = useState(
        "Bonjour from France! I'm exploring the stunning views and vibrant culture of this beautiful country. There's a cafe just around the corner. I'm walking by the Tuileries Garden Park now. I will give you all another update at my next stop, bye for now. Merci!"
    )

    useEffect(() => {
        console.log("New telepromterText:", teleprompterText)
      }, [teleprompterText])

    return (
        <TextContext.Provider value={{teleprompterText, setTeleprompterText}}>
            {children}
        </TextContext.Provider>
    )
}

export default TextContext
