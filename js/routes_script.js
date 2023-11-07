try {
	const selectBtn = document.querySelector('.select')
	const range = document.querySelector('.range')
	
	selectBtn.addEventListener('click', ()=> {
		if (range.classList.contains('none')) {
			range.classList.remove('none')
		}else {
			range.classList.add('none')
		}
	})
	
}
catch {

}

const slideValue = document.querySelector('.sliderValue span')
const inputSlider = document.querySelector('.field input')

inputSlider.oninput = (()=> {
	let value = inputSlider.value
	slideValue.textContent = value
	slideValue.style.left = (value/100)+"%"
})