

// "use client"
// import { UpdateCartContext } from '../_context/UpdateCartContext'
// import React, {useContext, useEffect, useState } from 'react'
// import Image from 'next/image'
// import { LayoutGrid, ShoppingBag, Search, CircleUserRound, ShoppingBasket} from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'
// import { deleteCookie, getCookie } from 'cookies-next'
// import { toast } from 'sonner'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../../components/ui/dropdown-menu"
// import { createContext } from 'react'
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"


// import GlobalApi from '../_utils/GlobalApi'
// import Link from 'next/link'
// import CartItemList from './CartItemList'

// function Header() {

//   const [categoryList,setCategoryList]=useState([]);
//   useEffect(()=>{
//     console.log(categoryList)
//   } , [])
//   const isLogin=getCookie('jwt')?true:false;
//   let user=''
//   try
//   {
//       user=JSON.parse(getCookie('user'));
//   }catch(e){}
//   const jwt=getCookie('jwt');
//   const [totalCartItem,setTotalCartItem]=useState(0)
//   const {updateCart,setUpdateCart}=useContext(UpdateCartContext)
//   const [cartItemList,setCartItemList]=useState([]);
//   const router=useRouter();



//   useEffect(()=>{
//     getCartItems();
// },[updateCart])


//   const getCategoryList=()=>{
//     GlobalApi.getCategory().then(resp=>{
//         setCategoryList(resp.data.data);
//         console.log(resp.data);
//     })
// }

// useEffect(()=>{
//   getCategoryList();
//   console.log(categoryList);
// },[]);

  

// const getCartItems = async () => {
//   try {
//     if (!user?.id || !jwt) {
//       // Handle missing user id or jwt, possibly redirect to sign-in
//       console.error("User id or JWT token is missing.");
//       return;
//     }
//     const cartItemList_ = await GlobalApi.getCartItems(user.id, jwt);
//     console.log(cartItemList_);
//     setTotalCartItem(cartItemList_?.length);
//     setCartItemList(cartItemList_);
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       // Handle 401 Unauthorized error, e.g., redirect to sign-in page
//       console.error("Unauthorized request:", error);
//       // Example: redirect to sign-in page
//       router.push('/sign-in');
//     } else {
//       // Handle other errors
//       console.error("Error fetching cart items:", error);
//       // Example: show a toast or message to the user
//       toast.error("Failed to fetch cart items. Please try again later.");
//     }
//   }
// }


//   const onSignOut=()=>{
//     deleteCookie('jwt')
//     deleteCookie('user')

//     router.push('/sign-in');
// }
  
// const onDeleteItem=(id)=>{
//   GlobalApi.deleteCartItem(id,jwt).then(resp=>{
//       toast('Item removed !');
//       getCartItems();
//   })
// }

// const [subTotal,setSubTotal] = useState(0);
// useEffect(()=>{
//   let total=0;
//   cartItemList.forEach(element => {
//       total=total+element.amount
//   });
//   setSubTotal(total.toFixed(2))
// },[cartItemList])

//   return (
//     <div className='p-5 shadow-md flex justify-between'>
//       <div className='flex items-center gap-8'>
//        <Link href={'/'}  
//        ><Image src='/gross.png' alt='logo' width={150} height={100} className='cursor-pointer'/></Link> 
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <div className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
//               <LayoutGrid className='h-5 w-5'/>
//               Category
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
//             <DropdownMenuSeparator />
            
//             {categoryList.map((category, index) => {
//               const iconData = category?.attributes?.icon?.data;
//               if (!iconData || iconData.length === 0) {
//                 console.error("Icon URL is missing for category:", category);
//                 return null; // Skip rendering if icon URL is missing
//               }
//               const iconUrl = iconData[0]?.attributes?.url;
        
// const fullIconUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${iconUrl}`;


//               // console.log("Full Icon URL:", fullIconUrl); // Logging the full URL
//      <Link  key={index}
//      href={'/products/category'+category.attributes.name}>
//               return (
//                 <DropdownMenuItem className='flex gap-4 items-center cursor-pointer' key={index}>
//                   <Image
//                     src={fullIconUrl}
//                     unoptimized={true}
//                     alt='icon'
//                     width={35}
//                     height={27}
//                   />
//                   <h2 className='text-lg'>{category?.attributes?.name}</h2>
//                 </DropdownMenuItem>
               
//               );
//               </Link>
//             })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//         <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
//           <Search/>
//           <input type='text' placeholder='Search' className='outline-none'/>
//         </div>
//       </div>
//       <div className='flex gap-5 items-center'>

//         <Sheet>
//   <SheetTrigger> <h2 className='flex gap-2 items-center text-lg'><ShoppingBasket className='h-7 w-7'/>
//         <span className='bg-primary text-white px-2 rounded-full'>{totalCartItem}</span>
//         </h2></SheetTrigger>
//   <SheetContent>
//     <SheetHeader>
//       <SheetTitle className='bg-primary text-white font-bold text-lg p-2'>My Cart</SheetTitle>
//       <SheetDescription>
//        <CartItemList cartItemList={cartItemList}
//         onDeleteItem={onDeleteItem}/>
//       </SheetDescription>
//     </SheetHeader>
//     <SheetClose asChild>
//     <div className='absolute w-[90%] bottom-6 flex flex-col'>
//         <h2 className='flex text-lg font-bold justify-between'>
//             Subtotal <span>${subTotal}</span>
//         </h2>
//         <Button 
//                     disabled={cartItemList.length==0}
//                     onClick={()=>router.push(jwt?'/checkout':'/sign-in')}>Checkout</Button>
//       </div>
//     </SheetClose>
//   </SheetContent>
// </Sheet>
// {!isLogin?  <Link href={'/sign-in'}>
//                 <Button>Login</Button>
//             </Link>
//             :
//             <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//   <CircleUserRound 
//             className="bg-green-100
//             p-2 rounded-full cursor-pointer
//              text-primary h-12 w-12"
//             />   
//   </DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel>My Account</DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>Profile</DropdownMenuItem>
//    <Link href={'/my-order'}>
//      <DropdownMenuItem>My Order</DropdownMenuItem>
//      </Link>
   
//     <DropdownMenuItem onClick={()=>onSignOut()}>Logout</DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
 
//         }
//       </div>
//     </div>
//   )
// }

// export default Header

"use client"
import { UpdateCartContext } from '../_context/UpdateCartContext'
import React, {useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, ShoppingBasket, Search, CircleUserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { deleteCookie, getCookie } from 'cookies-next'
import { toast } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'
import CartItemList from './CartItemList'

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const isLogin = getCookie('jwt') ? true : false;
  let user = '';
  try {
    user = JSON.parse(getCookie('user'));
  } catch (e) {}
  const jwt = getCookie('jwt');
  const [totalCartItem, setTotalCartItem] = useState(0);
  const { updateCart, setUpdateCart } = useContext(UpdateCartContext);
  const [cartItemList, setCartItemList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCartItems();
  }, [updateCart]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
      console.log(resp.data);
    });
  };
// useEffect(()=>{
//   getCategoryList();
//  
// },[]);
  useEffect(() => {
    getCategoryList();
    console.log(categoryList);
  }, []);

  const getCartItems = async () => {
    try {
      if (!user?.id || !jwt) {
        console.error("User id or JWT token is missing.");
        return;
      }
      const cartItemList_ = await GlobalApi.getCartItems(user.id, jwt);
      console.log(cartItemList_);
      setTotalCartItem(cartItemList_?.length);
      setCartItemList(cartItemList_);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized request:", error);
        router.push('/sign-in');
      } else {
        console.error("Error fetching cart items:", error);
        toast.error("Failed to fetch cart items. Please try again later.");
      }
    }
  };

  const onSignOut = () => {
    deleteCookie('jwt');
    deleteCookie('user');
    router.push('/sign-in');
  };

  const onDeleteItem = (id) => {
    GlobalApi.deleteCartItem(id, jwt).then(resp => {
      toast('Item removed!');
      getCartItems();
    });
  };

  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItemList.forEach(element => {
      total += element.amount;
    });
    setSubTotal(total.toFixed(2));
  }, [cartItemList]);

  return (
    <div className='p-5 shadow-md flex justify-between'>
      <div className='flex items-center gap-8'>
        <Link href='/'>
          <Image src='/gross.png' alt='logo' width={150} height={100} className='cursor-pointer' />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
              <LayoutGrid className='h-5 w-5' />
              Category
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => {
              const iconData = category?.attributes?.icon?.data;
              if (!iconData || iconData.length === 0) {
                console.error("Icon URL is missing for category:", category);
                return null;
              }
              const iconUrl = iconData[0]?.attributes?.url;
              const fullIconUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${iconUrl}`;
              return (
                <Link key={index} href={`/products/category/${category.attributes.name}`}>
                  <DropdownMenuItem className='flex gap-4 items-center cursor-pointer'>
                    <Image
                      src={fullIconUrl}
                      unoptimized={true}
                      alt='icon'
                      width={35}
                      height={27}
                    />
                    <h2 className='text-lg'>{category?.attributes?.name}</h2>
                  </DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
          <Search />
          <input type='text' placeholder='Search' className='outline-none' />
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <Sheet>
          <SheetTrigger>
            <h2 className='flex gap-2 items-center text-lg'>
              <ShoppingBasket className='h-7 w-7' />
              <span className='bg-primary text-white px-2 rounded-full'>{totalCartItem}</span>
            </h2>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='bg-primary text-white font-bold text-lg p-2'>My Cart</SheetTitle>
              <SheetDescription>
                <CartItemList cartItemList={cartItemList} onDeleteItem={onDeleteItem} />
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
              <div className='absolute w-[90%] bottom-6 flex flex-col'>
                <h2 className='flex text-lg font-bold justify-between'>
                  Subtotal <span>${subTotal}</span>
                </h2>
                <Button
                  disabled={cartItemList.length === 0}
                  onClick={() => router.push(jwt ? '/checkout' : '/sign-in')}
                >
                  Checkout
                </Button>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>
        {!isLogin ? (
          <Link href='/sign-in'>
            <Button>Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound
                className='bg-green-100 p-2 rounded-full cursor-pointer text-primary h-12 w-12'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <Link href='/my-order'>
                <DropdownMenuItem>My Order</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={() => onSignOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default Header;
