
try {
	const home__checkboxActive = document.querySelector('.home__checkbox-active')
	const btnBell = document.querySelector('.btn-bell')
	btnBell.disabled = true
	home__checkboxActive.addEventListener('click', ()=> {
		if (home__checkboxActive.checked == true) {
			btnBell.disabled = false
			btnBell.classList.remove('btn-bell--disabled')
		}
		if (home__checkboxActive.checked == false){
			btnBell.classList.add('btn-bell--disabled')
			btnBell.disabled = true
		}
	})
}
catch {

}


try {
	const contacts_myBtn = document.querySelector('.btn_cards')
	const contacts_myForm = document.querySelector('.form')
	const contacts_containerForm = document.querySelector('.container-form')
	const contacts_btnCreate = document.querySelector('.btn')
	
	let i = 0;
	
	contacts_myBtn.addEventListener('click', ()=> {
		if (i===0) {
			contacts_myForm.classList.remove('form-none')
			i++;
		}
			else {
			contacts_containerForm.app(myForm.cloneNode(true))
	}})
}
catch {
	
}

const settingsBtn = document.querySelector('.settings-btn')
const settingsBlock = document.querySelector('.settings')

settingsBtn.addEventListener('click', ()=> {
	if (settingsBlock.classList.contains('settings-open')) {
		settingsBlock.classList.remove('settings-open')
	} else {
		settingsBlock.classList.add('settings-open')
	}
})

const btnEntrance = document.querySelector('.btn-entrance')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const popupFormEntrance = document.querySelector('.popup__form_entrance')
const btnRegistration = document.querySelector('.btn__registration')
const popupFormRegistration = document.querySelector('.popup__form_registration')

btnEntrance.addEventListener('click', ()=> {
	popup.classList.remove('none')
	popupFormRegistration.classList.add('none')
	popupFormEntrance.classList.remove('none')
})
popupClose.addEventListener('click', ()=> {
	popup.classList.add('none')
})
btnRegistration.addEventListener('click', ()=> {
	popupFormRegistration.classList.remove('none')
	popupFormEntrance.classList.add('none')
})

const closeImg = document.querySelector('.open-img img::before')

window.addEventListener('click', (event)=> {
	try {
		let imgName = event.target
	let imgOpen = imgName.closest('.img-card')
	if (imgOpen.classList.contains('open-img')) {
		imgOpen.classList.remove('open-img')
	} else {
		imgOpen.classList.add('open-img')
	}
	}
	catch {}
})

const btnEntranceBusket = document.querySelector('.btn-entrance-busket')
const popupBusket = document.querySelector('.popup_busket')
const popupCloseBusket = document.querySelector('.popup__close_busket')

btnEntranceBusket.addEventListener('click', ()=> {
	popupBusket.classList.remove('none')
})
popupCloseBusket.addEventListener('click', ()=> {
	popupBusket.classList.add('none')
})