import React from 'react'

export const Filtrar = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='filtrar'>
			<input
				type='text'
				id='name'
				placeholder='Nombre del personaje'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}
