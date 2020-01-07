let emailInput = document.querySelector('#email');
let error = document.querySelectorAll('.error')[0];
function validateForm() {
	let split = emailInput.value.split('.');
	if (emailInput.value === '' || emailInput.value.indexOf('@') === -1) {
		event.preventDefault();
		error.style.display = 'block';
	} else if (split[1].indexOf('.') === -1) {
		event.preventDefault();
		error.style.display = 'block';
	}
}
