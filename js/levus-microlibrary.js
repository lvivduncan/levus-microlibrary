// duncanjs 0.2 (levus-microlibrary, start: 24-09-19)

(() => {
	
	const A = (_selector) => {
		// NodeList
		const selector = document.querySelectorAll(_selector);

		// колекція, яку буде повертати функція після обробки
		const collection = {};

		// display: block
		collection.block = () => {
			for(const item of selector){
				item.style.display = 'block';
			}
			return collection;
		};

		// display: flex
		collection.flex = () => {
			for(const item of selector){
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
			for(const item of selector){
				item.style.display = 'inline-block';
			}
			return collection;
		};

		// dispay: none
		collection.none = _num => {

			console.log(_num)

			// for(const item of selector){
			// 	if(_num === null){
			// 		item.style.display = 'none';
			// 	} else {
			// 		item[_num].style.display = 'none';
			// 	}
			// }

			if(_num === null){
				for(const item of selector){
					item.style.display = 'none';
				}				
			} else {
				selector[_num].style.display = 'none';
			}

			return collection;
		};
		// synonym
		collection.hide = collection.none;

		// show item
		collection.show = () => {
			for(const item of selector){
				item.style.display = '';
			}
			return collection;
		};

		// color: colorName
		collection.color = (_color = 'black') => {
			for(const item of selector){
				item.style.color = _color;
			}
			return collection;
		};

		// background: param
		collection.background = (_param = 'none') => {
			for(const item of selector){
				item.style.background = _param;
			}
			return collection;
		};
		// synonym
		collection.bg = collection.background;

		// float
		collection.float = (_float = 'left') => {
			for(const item of selector){
				item.style.cssFloat = _float;
			}
			return collection;
		};

		// wrapper
		collection.wrap = (_selector, _class) => {
			for(const item of selector){
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
			for(const item of selector){
				item.append(_text);
			}
			return collection;
		};

		// replace text
		collection.replaceText = _text => {
			for(const item of selector){
				item.innerText = _text;
			}
			return collection;
		};

		// addClass
		collection.addClass = (_text = 'no-name-class') => {
			for(const item of selector){
				item.classList.add(_text);
			}
			return collection;
		};

		// removeClass
		collection.removeClass = (_text = '') => {
			for(const item of selector){
				item.classList.remove(_text);
			}
			return collection;
		};

		// replaceClass
		collection.replaceClass = (_text = '') => {
			for(const item of selector){
				item.className = _text;
			}
			return collection;
		};

		// toggleClass
		collection.toggleClass = _text => {
			for(const item of selector){
				item.classList.toggle(_text);
			}
			return collection;
		};

		// addEventListener
		collection.on = (_method, _function) => {
			for(const item of selector){
				item.addEventListener(_method, _function);
			}
			return collection;			
		};

		// addEventListener: click	
		collection.click = _function => {
			for(const item of selector){
				item.addEventListener('click', _function);
			}
			return collection;			
		};

		// addEventListener: onmouseover	
		collection.hover = _function => {
			for(const item of selector){
				item.addEventListener('mouseover', _function);
			}
			return collection;			
		};

		// set width
		collection.setWidth = (_width = 'auto') => {
			for(const item of selector){
				if(_width === 'auto'){
					item.style.width = _width;
				} else {
					item.style.width = _width + 'px';
				}
			}
			return collection;
		};		

		// set height
		collection.setHeight = (_height = 'auto') => {
			for(const item of selector){
				if(_width === 'auto'){
					item.style.height = _height;
				} else {
					item.style.height = _height + 'px';
				}
			}
			return collection;
		};	

		// get width
		collection.getWidth = () => {
			for(const item of selector){
				item.clientWidth;
				// if(item.length > 1){

				// } else{
				// 	item.clientWidth;
				// }
			}
			return collection;
		};	



		// return NodeList
		collection.list = selector;

		// return element
		collection.element = selector[0];
		// synonym
		collection.el = selector[0];


// TODO
// addNode
//
// position


		// return
		return collection;

	};

	window.A = A;

})();

// end micro library