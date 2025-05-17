import React, { useContext, useState } from 'react'
import ReactDom from 'react-dom'
import modalsContext from '../Contexts/modalsContext'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import ProductInSearchBox from './ProductInSearchBox';

export default function SearchInput() {

  const contextData = useContext(modalsContext)
  const { data = [] } = useProducts()

  const [searchValue, setSearchValue] = useState('')
  const fakeProducts = ['laptop', 'mouse', 'key', 'key board', 'speaker', 'monitor']

  const searchingProducts = data.filter(product => product.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  const closeSearchModal = (e) => {
    if (e.target.id == "search-input-wrapper" || e.target.id == "search-input-close-icon") {
      contextData.setShowSearchBox(false)
    }
  }

  return ReactDom.createPortal(

    <div onClick={closeSearchModal} id='search-input-wrapper' className='fixed flex items-center justify-center top-0 bottom-0 z-30 w-full h-screen bg-zinc-700/75'>
      <div className='w-[512px] relative rounded-lg p-6 bg-white mx-auto space-y-3 select-none'>
        <h2 className='font-semibold text-center'>Search Products</h2>
        <IoMdClose id='search-input-close-icon' className='absolute right-[18px] top-[10px] cursor-pointer size-5 font-bold' />
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search..." className='h-10 w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-zinc-800' />
        {searchValue ?
          (<div className='h-60 w-full overflow-y-auto'>
            {searchValue && searchingProducts.map(product => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <ProductInSearchBox {...product} />
              </Link>
            ))}
          </div>)
          : <p className='text-sm text-zinc-500'>Start typing to search for products</p>}
      </div>
    </div>, document.getElementById('modals-parent')
  )
}
