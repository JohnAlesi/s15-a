//Grade converte

function gradeconv(num){
	if (num >= 80) {
		console.log(num + ' your grade is A');
	}

	else if (num >= 75){
		console.log(num + ' your grade is B+');
	}

	else if (num >= 65){
		console.log(num + ' your grade is B');
	}

	else if (num >= 55){
		console.log(num + ' your grade is C+');
	}

	else if (num >= 50){
		console.log(num + ' your grade is C');
	}

	else if (num >= 40){
		console.log(num + ' your grade is D');
	}

	else if (num >=1) {
		console.log(num + ' your grade is F');
	}

	else if (num < 1) {
		console.log(num + ' is invalid please enter 1-100');
	}
}