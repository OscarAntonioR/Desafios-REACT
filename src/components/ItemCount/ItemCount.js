import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = (props) => {
	const stock = parseInt(props.stock);
	const inicial = parseInt(props.inicial);

	const [contador, setContador] = useState(inicial);

	function aumentar() {
		if (contador < stock) {
			setContador(contador + 1);
		}
	}
	function disminuir() {
		if (contador > 0) {
			setContador(contador - 1);
		}
	}

	return (
		<div className="contenedor">
			<h2>Contador</h2>
			<hr />
			<div className="contador">
				<button className="btn btn-outline-primary" onClick={disminuir}>
					-
				</button>
				<h3 className="numero">{contador}</h3>
				<button className="btn btn-outline-primary" onClick={aumentar}>
					+
				</button>
			</div>
			<button className="btn btn-outline-primary">
				Agregar al carrito
			</button>
		</div>
	);
};