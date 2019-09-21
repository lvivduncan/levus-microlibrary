
// levus-microlibrary
// 21-09-19

(() => {
	
	const A = (_selector) => {
		// NodeList
		const selector = document.querySelectorAll(_selector);

		// колекція, яку буде повертати функція після обробки
		const collection = {};

		// display: block
		collection.block = () => {
			for(let item of selector){
				item.style.display = 'block';
			}
			return collection;
		}

		// display: flex
		collection.flex = () => {
			for(let item of selector){
				item.style.display = 'flex';

				for(let i=0; i<=item.children.length; i++){
					if(item.children[i] != null){
						item.children[i].style.flex = 1;
					}
				}				
			}
			return collection;
		}		

		// display: inline-block
		collection.inlineBlock = () => {
			for(let item of selector){
				item.style.display = 'inline-block';
			}
			return collection;
		}

		// dispay: none
		collection.none = () => {
			for(let item of selector){
				item.style.display = 'none';
			}
			return collection;
		}

		// color: colorName
		collection.color = (_color = 'black') => {
			for(let item of selector){
				item.style.color = _color;
			}
			return collection;
		}

		// float
		collection.float = (_float = 'left') => {
			for(let item of selector){
				item.style.cssFloat = _float;
			}
			return collection;
		}

		// append_text()
		collection.addText = _text => {
			for(let item of selector){
				item.append(_text);
			}
			return collection;
		}

		// replace_text()
		collection.replaceText = _text => {
			for(let item of selector){
				item.innerText = _text;
			}
			return collection;
		}


		// return
		return collection;

	}

	window.A = A;

})();

// end micro library