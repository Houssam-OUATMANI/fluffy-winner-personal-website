import { Fragment } from "react";
import MainHeader from '../navigation/mainHeader';


export default function Layout({children}) {
   return(
      <Fragment>
         <MainHeader/>
         <main>
            {children}
         </main>
      </Fragment>
   )
}