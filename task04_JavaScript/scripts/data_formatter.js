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
	let locale = document.getElementById('locale_input').value;

	let splitFormat = splitDateFormat(format);

	let displayFormat = [];
	for(let i = 0; i < splitFormat.length; i++) {
		displayFormat[i] = replaceFormatLetters(splitFormat[i], date, locale);
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

function replaceFormatLetters(formatString, date, locale = 'ru') {
	switch(formatString) {
		case 'yy':
			return Intl.DateTimeFormat(locale, {year: "2-digit"}).format(date);
		case 'yyyy':
			return Intl.DateTimeFormat(locale, {year: "numeric"}).format(date);
		case 'M':
			return Intl.DateTimeFormat(locale, {month: "numeric"}).format(date);
		case 'MM':
			return Intl.DateTimeFormat(locale, {month: "2-digit"}).format(date);
		case 'MMM':
			return Intl.DateTimeFormat(locale, {month: "short"}).format(date);
		case 'MMMM':
			return Intl.DateTimeFormat(locale, {month: "long"}).format(date);
		case 'd':
			return Intl.DateTimeFormat(locale, {day: "numeric"}).format(date);
		case 'dd':
			return Intl.DateTimeFormat(locale, {day: "2-digit"}).format(date);
		case 'H':
			return Intl.DateTimeFormat(locale, {hour: "numeric", hour12: false}).format(date);
		case 'HH':
			return Intl.DateTimeFormat(locale, {hour: "2-digit", hour12: false}).format(date);
		case 'h':
			return Intl.DateTimeFormat(locale, {hour: "numeric", hour12: true}).format(date);
		case 'hh':
			return Intl.DateTimeFormat(locale, {hour: "2-digit", hour12: true}).format(date);
		case 'm':
			return Intl.DateTimeFormat(locale, {minute: "numeric"}).format(date);
		case 'mm':
			return Intl.DateTimeFormat(locale, {minute: "2-digit"}).format(date);
		case 's':
			return Intl.DateTimeFormat(locale, {second: "numeric"}).format(date);
		case 'ss':
			return Intl.DateTimeFormat(locale, {second: "2-digit"}).format(date);
		default:
			return formatString;
	}
}