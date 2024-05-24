import React, { createContext, useState } from 'react'
export const WishContext=createContext()

function Wishpovider(  {children}) {
    const [wishlist, setwishlist] = useState([])

        function addwishlist(item) {
        const index=wishlist.findIndex(x=>x._id===item._id)
        if (index!==-1) {
            wishlist[index].count++
            setwishlist([...wishlist])
            
        }else{
            setwishlist([...wishlist,{...item,count:1}])
        }
        
    }
        function removewishlist(item) {
        setwishlist(wishlist.filter(x=>x._id!==item._id))
        
    }

  return <WishContext.Provider value={{wishlist,addwishlist,removewishlist}}>
    {children}
  </WishContext.Provider>
}

export default Wishpovider