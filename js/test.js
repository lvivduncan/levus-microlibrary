// start

// покласти в константу li усі елементи li зі сторінки
const li = A('li');
li.block();

// зробити селектор з id#first блочним
A('#first').block();

// знайти усі елементи li, зробити їх блочними, червоного кольору і додати до існуючого в них тексту слово 'green'
A('li').block().color('red').addText('green');

// обгорнути перший абзац футера півжирним тегом
A('#footer p:first-child').wrap('strong');

// знайти перший елемнт li, і замінити в ньому текст на 'lorem ipsum ipsum'
A('li:first-child').replaceText('lorem ipsum ipsum');

// знайти останній елемент li та видалити з нього текст
A('li:last-child').replaceText('');

// зробити селектори ul display: flex
A('ul').flex();

// знайти селектор ol, зробити його display: flex і синього кольору
A('ol').flex().color('cyan');

// знайти селектор header, примінити кольір (забути вказати, тому колір чорний) і відмінити обтікання
A('header').color().float('none');

// показати елемент з класом six
A('.six').show();

// сховати елемент з класом five
A('.five').hide();

// знайти селектор header, зробити фон жовтим і додати клас (забути вказати назву класу, тому клас no-name-class)
A('header').bg('yellow').addClass();

// знайти селектор section і очистити його клас
A('section').replaceClass('');

// знайти селектор з id#third і замінити його класи на new-class
A('#third').replaceClass('new-class');

// знайти селектор з класом .one, додати клас .new-one і видалити клас .one
A('.one').addClass('new-one').removeClass('one');

// знайти селектор з класом two і видалити його (клас two)
A('.two').removeClass('two');

// перемикач класів toggle
A('.tree').toggleClass('tree');

// перемикач класів toggle
A('.four').toggleClass('tree');

// event (універсальний метод "on") onclick
A('#wrap').on('click', () => {
	A('#wrap').toggleClass('red');
});
// synonym. для кліків є окремий метод
A('#wrap').click( () => {
	A('#wrap').toggleClass('red');
});

// event onmouseover. і для наведення курсору мишки є окремий метод
A('#footer').hover( () => {
	A('#footer').toggleClass('green');
});

// отримати NodeList (аналог document.querySelector('li'))
const list = A('li').value;

// end