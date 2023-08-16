import axios from "axios";

export default async function deleteEmail(
	emailPassword: string,
	emailID: string
) {
	try {
		const response = await axios.delete(
			`http://localhost:3001/api/emails/delete-email/${emailID}`,

			{
				headers: {
					"x-access-token": localStorage.getItem("token"),
				},
				data: {
					emailPassword,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to create email");
	}
}
