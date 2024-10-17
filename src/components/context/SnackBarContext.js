import { createContext , useState} from "react"
import MySnackbar from '../MySnackbar';




   export const SnackBarContext = createContext({})
    export const MyProvider = ({children}) => {
        const [open, setOpen] = useState(false);
        const [message, setMessage] = useState("");
      
        function showHideToast(message){
            setOpen(true)
            setMessage(message)
            setTimeout(() => {
              setOpen(false)
            }, 2000)
          }
        return(
            <SnackBarContext.Provider value={ {showHideToast}}>
                      <MySnackbar open={open} message={message}/>
                {children}
            </SnackBarContext.Provider>
        )
    }


