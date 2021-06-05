import {createContext, useState} from 'react'
import {ReactNode} from 'react'


export const AccountContext = createContext<[boolean, (account:boolean) => void]>([false, () => {}]);

export const AccountProvider = ({children}:{children:ReactNode}) => {
    const [account, setAccount] = useState(false);
   
    return ( 
           <AccountContext.Provider value={[account, setAccount]}>
                {children}
           </AccountContext.Provider>
    )
}

