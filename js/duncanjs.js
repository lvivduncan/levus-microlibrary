// duncanjs 0.1 (синонім -- levus-microlibrary 24-09-19)
(()=>{const A=(_selector)=>{const selector=document.querySelectorAll(_selector);const collection={};collection.block=()=>{for(let item of selector){item.style.display='block'}return collection};collection.flex=()=>{for(let item of selector){item.style.display='flex';for(let i=0;i<=item.children.length;i++){if(item.children[i]!=null){item.children[i].style.flex=1}}}return collection};collection.inlineBlock=()=>{for(let item of selector){item.style.display='inline-block'}return collection};collection.none=()=>{for(let item of selector){item.style.display='none'}return collection};collection.hide=collection.none;collection.show=()=>{for(let item of selector){item.style.display=''}return collection};collection.color=(_color='black')=>{for(let item of selector){item.style.color=_color}return collection};collection.background=(_param='none')=>{for(let item of selector){item.style.background=_param}return collection};collection.bg=collection.background;collection.float=(_float='left')=>{for(let item of selector){item.style.cssFloat=_float}return collection};collection.wrap=(_selector,_class)=>{for(let item of selector){const parent=item.parentNode;const clone=item.cloneNode(true);const wrap=document.createElement(_selector);if(_class!=null){wrap.className=_class}wrap.append(clone);parent.replaceChild(wrap,item)}return collection};collection.addText=_text=>{for(let item of selector){item.append(_text)}return collection};collection.replaceText=_text=>{for(let item of selector){item.innerText=_text}return collection};collection.addClass=(_text='no-name-class')=>{for(let item of selector){item.classList.add(_text)}return collection};collection.removeClass=(_text='')=>{for(let item of selector){item.classList.remove(_text)}return collection};collection.replaceClass=(_text='')=>{for(let item of selector){item.className=_text}return collection};collection.toggleClass=(_text)=>{for(let item of selector){item.classList.toggle(_text)}return collection};collection.on=(_method,_function)=>{for(let item of selector){item.addEventListener(_method,_function)}return collection};collection.click=_function=>{for(let item of selector){item.addEventListener('click',_function)}return collection};collection.hover=_function=>{for(let item of selector){item.addEventListener('mouseover',_function)}return collection};collection.value = selector;return collection};window.A=A})();