function sendEmail(event) {
	console.log('beep boop sending emails');
	// event.preventDefault();
	let sender_name_field = document.getElementById('inp_title');
	let sender_msg_field = document.getElementById('inp_msg');
	let sender_name = sender_name_field.value;
	let sender_msg = sender_msg_field.value;

	// TODO: Make a new email and add it to the SMTP token instead of spamming my personal
	//! Note for DALI: The contact form works, but (as of right now) I don't have a way to cap
	//! the number of emails sent, and they all go to my personal inbox.
	//! If I receive more than 300 messages in a day, either the service will stop or I'll be billed.
	//! Please don't send too many messages :)
	if (sender_msg !== '') {
		console.log(sender_name + ": " + sender_msg);
		Email.send({
			SecureToken: "7e8247b6-325b-4f55-9c02-2ba66da71c9b",
			To: "rishavchakra@gmail.com",
			From: "rishavchakra@gmail.com",
			Subject: "WEBSITE Message from: " + sender_name,
			Body: sender_msg
		}).then(
			message=>console.log(message)
		);
		sender_name_field.value = '';
		sender_msg_field.value = '';

		// grecaptcha.execute();
	} else {
		console.log('Can\'t send empty email');
	}
}

function onSubmit(token) {
	alert('Thanks ' + document.getElementById('inp_title').value + '!');
}