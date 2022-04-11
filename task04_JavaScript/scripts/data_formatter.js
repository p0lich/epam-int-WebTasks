let dateSpecifiers = ['yy', 'yyyy', 'M', 'MM', 'MMM', 'MMMM', 'd', 'dd', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss'];

let dateFormats = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	],
	monthShortNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	]
};

function formatDate() {
    let date = new Date(document.getElementById('date_input').value);
	let format = document.getElementById('format_input').value;

	let splitFormat = splitDateFormat(format);

	let displayFormat = [];
	for(let i = 0; i < splitFormat.length; i++) {
		displayFormat[i] = replaceFormatLetters(splitFormat[i], date);
	}

	let a = date.getHours();

	document.getElementById('date_output').value = displayFormat.join('');
}

function splitDateFormat(format) {
	let tempCounter = 0;
	let temp = '';

	let index = 0;
	let result = [];

	let charSet = 'yMdHhms';

	for(let i = 0; i < format.length; i++) {
		if(charSet.indexOf(format[i]) >= 0) {
			if(tempCounter == 0 || format[i] == temp[tempCounter-1]) {
				temp += format[i];
				tempCounter++;
			}

			if(format[i+1] != temp[tempCounter-1]) {
				result[index] = temp;
				index++;
				temp = '';
				tempCounter = 0;
			}
		} else {
			result[index] = format[i];
			index++;
		}
	}

	return result;
}

function replaceFormatLetters(format, date) {
	switch(format) {
		case 'yy':
			return date.getFullYear() % 100;
		case 'yyyy':
			return date.getFullYear();
		case 'M':
			return date.getMonth();
		case 'MM':
			return date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
		case 'MMM':
			return dateFormats.monthShortNames[date.getMonth() - 1];
		case 'MMMM':
			return dateFormats.monthNames[date.getMonth() - 1];
		case 'd':
			return date.getDate();
		case 'dd':
			return date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		case 'H':
			return date.getHours();
		case 'HH':
			return date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		case 'h':
			return date.getHours();
		case 'hh':
			return date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		case 'm':
			return date.getMinutes();
		case 'mm':
			return date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		case 's':
			return date.getSeconds();
		case 'ss':
			return date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		default:
			return format;
	}
}