const burgerBtn = document.querySelector('.nav__burger-btn');
const navItems = document.querySelector('.nav__items');

const handleNav = () => {
	burgerBtn.classList.toggle('nav__burger-btn--active');
	navItems.classList.toggle('nav__items--active');

	const allNavItems = navItems.querySelectorAll('.nav__item');
	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			burgerBtn.classList.remove('nav__burger-btn--active');
			navItems.classList.remove('nav__items--active');
		})
	);
};

burgerBtn.addEventListener('click', handleNav);