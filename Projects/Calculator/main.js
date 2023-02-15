let result = document.getElementById('result');

function insert(num) {
	result.value = result.value + num;
}

function clearDisplay() {
	result.value = "";
}

function back() {
	result.value = result.value.slice(0, -1);
}

function calculate() {
	result.value = eval(result.value);
}

function insert(char) {
	if(result.value == '0') {
		result.value = char;
	} else {
		result.value += char;
	}
}

function insert(char) {
	if(result.value == '0') {
		result.value = char;
	} else {
		result.value += char;
	}
}

function insert(char) {
	if(result.value == '0') {
		result.value = char;
	} else {
		result.value += char;
	}
}

function insert(char) {
	if(result.value == '0') {
		result.value = char;
	} else {
		result.value += char;
	}
}
