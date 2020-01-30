
let cards = document.querySelectorAll('.servicemaniette');

function toggleOpen(){
	let cardhide = this.querySelector('.servicemaniettehide')
	let cardshow = this.querySelector('.servicemanietteshow')
	cardshow.classList.replace('servicemanietteshow','servicemaniettehide')
	cardhide.classList.replace('servicemaniettehide','servicemanietteshow')
	
}

cards.forEach(card => card.addEventListener('click',toggleOpen))
