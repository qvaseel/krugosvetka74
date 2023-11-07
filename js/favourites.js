window.addEventListener('click', (event)=> {
	let fd = document.querySelector('.kol-card')

	const btn2 = document.querySelector('.btn2')

	function btnAcrive() {
		if (parseInt(fd.innerText) > 0) {
			btn2.classList.add('btn2-active')
			btn2.setAttribute('href', '#')
		}
		if (parseInt(fd.innerText) == 0) {
			btn2.classList.remove('btn2-active')
			btn2.removeAttribute('href', '#')
		}
	}

	const counter = event.target
	if (counter.checked == true) {
		fd.innerText = ++fd.innerText;
		btnAcrive()
	}
	if (counter.checked == false) {
		fd.innerText = --fd.innerText;
		btnAcrive()
	}
})

const kol_sosat = document.querySelectorAll('.sosat').length
document.querySelector('.kol-sosat').innerText = kol_sosat;