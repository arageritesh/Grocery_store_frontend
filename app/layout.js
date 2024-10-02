// "use client"
// import { Outfit } from "next/font/google";
// import "./globals.css";
// import Header from "./_components/Header";
// import { Toaster } from "@/components/ui/sonner";
// import { usePathname } from "next/navigation";
// import { UpdateCartContext } from "./_context/UpdateCartContext";
// import { useEffect, useState } from "react";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// // import { useCookies } from 'next-client-cookies';
// import { getCookie, setCookie } from "cookies-next";
// const outfit = Outfit({ subsets: ["latin"] });

// // export const metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };

// export default function RootLayout({ children }) {
//   const params=usePathname();
//   // const cookies = useCookies();
//   const [updateCart,setUpdateCart]=useState(false);
//   const showHeader=params=='/sign-in'||params=='/create-account'?false:true;

//   useEffect(()=>{
//     setCookie('ABC','123');
//    const res= getCookie('ABC','123')
//     console.log(res)
//   },[])
//   return (
//     <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
//     <html lang="en">
//       <body className={outfit.className}>
//         <UpdateCartContext.Provider value={{updateCart,setUpdateCart}}>
//         {showHeader&&<Header/>}
//         {children}
//         <Toaster />
//         </UpdateCartContext.Provider>
//       </body>
//     </html>
//     </PayPalScriptProvider>
//   );
// }

"use client"
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
import { UpdateCartContext } from "./_context/UpdateCartContext";
import { useEffect, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { useCookies } from 'next-client-cookies';
import { getCookie, setCookie } from "cookies-next";
const outfit = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const params=usePathname();
  // const cookies = useCookies();
  const [updateCart,setUpdateCart]=useState(false);
  const showHeader=params=='/sign-in'||params=='/create-account'?false:true;

  useEffect(()=>{
    setCookie('ABC','123');
   const res= getCookie('ABC','123')
    console.log(res)
  },[])
  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
    <html lang="en">
      <body className={outfit.className}>
        <UpdateCartContext.Provider value={{updateCart,setUpdateCart}}>
        {showHeader&&<Header/>}
        {children}
        <Toaster />
        </UpdateCartContext.Provider>
      </body>
    </html>
    </PayPalScriptProvider>
  );
}