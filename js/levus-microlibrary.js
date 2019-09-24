// duncanjs 0.1 (levus-microlibrary 24-09-19)

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
		};

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
		};

		// display: inline-block
		collection.inlineBlock = () => {
			for(let item of selector){
				item.style.display = 'inline-block';
			}
			return collection;
		};

		// dispay: none
		collection.none = () => {
			for(let item of selector){
				item.style.display = 'none';
			}
			return collection;
		};
		// synonym
		collection.hide = collection.none;

		// show item
		collection.show = () => {
			for(let item of selector){
				item.style.display = '';
			}
			return collection;
		};

		// color: colorName
		collection.color = (_color = 'black') => {
			for(let item of selector){
				item.style.color = _color;
			}
			return collection;
		};

		// background: param
		collection.background = (_param = 'none') => {
			for(let item of selector){
				item.style.background = _param;
			}
			return collection;
		};
		// synonym
		collection.bg = collection.background;

		// float
		collection.float = (_float = 'left') => {
			for(let item of selector){
				item.style.cssFloat = _float;
			}
			return collection;
		};

		// wrapper
		collection.wrap = (_selector, _class) => {
			for(let item of selector){
				const parent = item.parentNode,
					  clone = item.cloneNode(true),
					  wrap = document.createElement(_selector);
				if(_class != null){
					wrap.className = _class;
				}
				wrap.append(clone);
				parent.replaceChild(wrap, item);
			}
			return collection;
		};

		// append text
		collection.addText = _text => {
			for(let item of selector){
				item.append(_text);
			}
			return collection;
		};

		// replace text
		collection.replaceText = _text => {
			for(let item of selector){
				item.innerText = _text;
			}
			return collection;
		};

		// addClass
		collection.addClass = (_text = 'no-name-class') => {
			for(let item of selector){
				item.classList.add(_text);
			}
			return collection;
		};

		// removeClass
		collection.removeClass = (_text = '') => {
			for(let item of selector){
				item.classList.remove(_text);
			}
			return collection;
		};

		// replaceClass
		collection.replaceClass = (_text = '') => {
			for(let item of selector){
				item.className = _text;
			}
			return collection;
		};

		// toggleClass
		collection.toggleClass = (_text) => {
			for(let item of selector){
				item.classList.toggle(_text);
			}
			return collection;
		};

		// addEventListener
		collection.on = (_method, _function) => {
			for(let item of selector){
				item.addEventListener(_method, _function);
			}
			return collection;			
		};

		// addEventListener: click	
		collection.click = _function => {
			for(let item of selector){
				item.addEventListener('click', _function);
			}
			return collection;			
		};

		// addEventListener: onmouseover	
		collection.hover = _function => {
			for(let item of selector){
				item.addEventListener('mouseover', _function);
			}
			return collection;			
		};

		// return NodeList
		collection.value = selector;
		// synonym
		collection.list = selector;

		// return
		return collection;

	};

	window.A = A;

})();

// end micro library