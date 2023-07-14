import { createContext, useState, useEffect } from "react"

const TextContext = createContext()

export const TextContextProvider = ({children}) => {

    const [teleprompterText, setTeleprompterText] = useState(
        "Bonjour from France! I'm exploring the stunning landscapes and vibrant culture of this beautiful country. There's a cafe just around the corner. I'm just walking around the Tuileries Garden Park now. I will give you all an update at my next stop. Merci! Bye for now."
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
