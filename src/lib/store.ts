import { create } from 'zustand';
type CartItem={productId:string;quantity:number};
type Store={cart:CartItem[];wishlist:string[];addToCart:(productId:string)=>void;toggleWishlist:(productId:string)=>void;clearCart:()=>void};
export const useShopStore=create<Store>((set)=>({cart:[],wishlist:[],addToCart:(productId)=>set(s=>({cart:[...s.cart.filter(i=>i.productId!==productId),{productId,quantity:1}]})),toggleWishlist:(productId)=>set(s=>({wishlist:s.wishlist.includes(productId)?s.wishlist.filter(id=>id!==productId):[...s.wishlist,productId]})),clearCart:()=>set({cart:[]})}));
