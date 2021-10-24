function sendEmail(event) {
	console.log('beep boop sending emails');
	// event.preventDefault();
	let sender_name_field = document.getElementById('inp_title');
	let sender_msg_field = document.getElementById('inp_msg');
	let sender_name = sender_name_field.value;
	let sender_msg = sender_msg_field.value;
	Email.send({
		SecureToken: "7e8247b6-325b-4f55-9c02-2ba66da71c9b",
		To: "rishavchakra@gmail.com",
		From: "rishavchakra@gmail.com",
		Subject: "Message from: " + sender_name,
		Body: sender_msg
	}).then(
		message=>alert(message)
	);

	if (sender_msg !== '') {
		console.log(sender_name + ": " + sender_msg);
		grecaptcha.execute();
		console.log()
	} else {
		console.log('Can\'t send empty email');
	}
}

function onSubmit(token) {
	alert('thanks ' + document.getElementById('inp_title').value);
}