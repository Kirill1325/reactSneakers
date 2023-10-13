import React, { useState } from 'react';
import '../styles/App.css';
import MyInput from './UI/MyInput';
import MySelect from './UI/MySelect';
import { IOption } from '../types/types';
import { IProduct } from '../types/types';
import ProductItem from './ProductItem';
import { useProducts } from '../hooks/UseProducts';
import MultipleSelect from './UI/MultipleSelect';

interface ProductListProps {
	products: IProduct[],
	setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
	setClothes?: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setAccesories?: React.Dispatch<React.SetStateAction<IProduct[]>>,
	searchQuerry: string,
	categorie: string,
	isMobile: boolean,
	sizesOptions: {
		name: string,
		value: string
	}[],
}

function ProductList({ products, setProducts, setClothes, setAccesories, searchQuerry, categorie, isMobile, sizesOptions }: ProductListProps) {

	const url = window.location.href

	const selectOptions = [
		{ name: 'Expensive First', value: 'expensive' },
		{ name: 'Cheap First', value: 'cheap' }
	]

	const brandsOptions = [
		{ name: 'Brand Name', value: 'brandsDefault' },
		{ name: 'Adidas', value: 'Adidas' },
		{ name: 'Nike', value: 'Nike' },
		{ name: 'Reebook', value: 'Reebook' },
		{ name: 'New Balance', value: 'New Balance' },
		{ name: 'Puma', value: 'Puma' },
		{ name: 'Napapijri', value: 'Napapijri' },
		{ name: 'The North Face', value: 'The North Face' },
		{ name: 'Vans', value: 'Vans' },
	]

	const categorieOptions = [
		{ name: 'Categorie', value: 'categorieDefault' },
		{ name: 'Shoes', value: 'Shoes' },
		{ name: 'Clothes', value: 'Clothes' },
		{ name: 'Accesories', value: 'Accesories' },
	]

	const [selectedSort, setSelectedSort] = useState<IOption>(selectOptions[0])
	const [brandNameSort, setBrandNameSort] = useState<IOption[]>([])
	const [sizeSort, setSizeSort] = useState<IOption[]>([])
	const [categorieSort, setCategorieSort] = useState<IOption[]>([])
	const sortedProducts = useProducts(products, selectedSort, brandNameSort, sizeSort, categorieSort, searchQuerry)

	return (

		<div className='products'>
			<h1 style={{ marginTop: '40px', marginLeft: '15px' }}>{categorie} - {sortedProducts.length}</h1>

			<div className='filterBar'>
				<div className='selects'>
					<MySelect
						options={selectOptions}
						value={selectedSort}
						defaultValue={selectOptions[0]}
						setState={setSelectedSort}
					/>
					<MultipleSelect
						options={brandsOptions.slice(1)}
						value={brandNameSort}
						defaultValue={brandsOptions[0]}
						setState={setBrandNameSort}
					/>
					{url.includes('Sales') &&
						<MultipleSelect
							options={categorieOptions.slice(1)}
							value={categorieSort}
							defaultValue={categorieOptions[0]}
							setState={setCategorieSort}
						/>
					}
					{!url.includes('Accesories') &&
						<MultipleSelect
							options={sizesOptions.slice(1)}
							value={sizeSort}
							defaultValue={sizesOptions[0]}
							setState={setSizeSort}
						/>
					}
				</div>
			</div>

			<div className='productList'>
				{sortedProducts.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
						setProducts={setProducts}
						isMobile={isMobile}
					/>
				))}
			</div>
		</div>

	)
}

export default ProductList