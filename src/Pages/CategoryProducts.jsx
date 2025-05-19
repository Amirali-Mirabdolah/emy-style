import React from 'react'
// import useCategory from '../hooks/useCategory'
import { useParams } from 'react-router-dom'
import useCategoryProducts from '../hooks/useCategoryProducts'

export default function CategoryProducts() {

  const categoryId = useParams().categoryID
  console.log(categoryId);
  
  const { data =[], isLoading } = useCategoryProducts(categoryId)
  console.log('data in catpro ', data);



  return (
    <>
      <h1>AllProducts</h1>
    </>
  )
}
