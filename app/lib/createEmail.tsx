import axios from "axios";

export default async function createEmail(
	email: string,
	subject: string,
	password: string,
	intervals: string,
	message: string
) {
	try {
		const response = await axios.post(
			"http://localhost:3001/api/emails/make-email",
			{
				email,
				message,
				subject,
				password,
				intervals,
			},
			{
				headers: {
					"x-access-token": localStorage.getItem("token"),
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to log in");
	}
}
