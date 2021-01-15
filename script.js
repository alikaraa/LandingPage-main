const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');
const error = document.querySelector('.error');

submitBtn.addEventListener('click', checkEmail);

// first check for a valid email
// change the error depending on if there is a value or not
function checkEmail(e) {
	e.preventDefault();
	const email = emailInput.value;
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const valid = re.test(String(email).toLowerCase());
	if (email == '') {
		error.classList.remove('hidden');
		error.textContent = 'Oops! Please add your email';
	} else {
		error.textContent = 'Oops! Please check your email';
		displayOrHideError(valid);
	}
}

// hide or display the error message
function displayOrHideError(valid) {
	valid ? error.classList.add('hidden') : error.classList.remove('hidden');
}

//hide the error message when loading the page
error.classList.add('hidden');
