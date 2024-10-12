import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title';
import { FaRegTrashCan } from 'react-icons/fa6';
import CartTotal from '../Components/CartTotal';

export default function Cart() {
    const { products, currency, cartItems, updateQuantity, clearCart, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    tempData.push({
                        _id: itemId,
                        size: size,
                        quantity: cartItems[itemId][size],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className='pt-6'>
            <div className="text-2xl mb-3">
                <Title text1={'YOUR'} text2={'CART'} />
            </div>
            {cartData.length === 0 ? (
                <p className="text-2xl text-center pt-10 sm:pb-52 text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="overflow-x-auto sm:pb-14">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cartData.map((item, index) => {
                                const productData = products.find((product) => product._id === item._id);
                                return (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center me-10">
                                                <img src={productData.image[0]} alt="Product Image" className='w-20 h-20 object-cover mr-4' />
                                                <p className='text-sm sm:text-xl font-semibold'>{productData.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className='px-2 sm:px-3 sm:py-1 border bg-gray-100'>{item.size}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className='font-medium'>{currency}{productData.price}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="number"
                                                min={1}
                                                value={item.quantity}
                                                onChange={(e) => {
                                                    const value = Number(e.target.value);
                                                    if (value < 1) {
                                                        e.target.value = item.quantity; // Reset to current quantity if invalid
                                                    } else {
                                                        updateQuantity(item._id, item.size, value);
                                                    }
                                                }}
                                                className='border max-w-20 px-2 py-1'
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <FaRegTrashCan
                                                className='cursor-pointer text-xl inline-block text-red-500'
                                                onClick={() => updateQuantity(item._id, item.size, 0)}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-right">
                                    <button
                                        className="w-full text-red-500 font-bold py-2 px-4 rounded"
                                        onClick={handleClearCart}
                                    >
                                        Clear All Cart
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
            <div className="flex justify-end my-20">
                <div className="w-full sm:w-96">
                    <CartTotal />
                    <div className="w-full text-end ">
                        <button onClick={()=>navigate('/placeOrder')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
