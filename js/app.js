let form = document.querySelector('#emailForm');
let emailInput = document.querySelector('#email');
let error = document.querySelectorAll('.error')[0];
// console.log(emailInput);

function validateForm() {
	if (
		emailInput.value === '' ||
		emailInput.value.indexOf('@') === -1 ||
		emailInput.value.indexOf('.') === -1
	) {
		event.preventDefault();
		error.style.display = 'block';
	} else {
		submitmessage.style.display = 'block';
	}
}
