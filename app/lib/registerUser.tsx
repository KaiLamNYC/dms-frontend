import axios from "axios";

export default async function registerUser(
	email: string,
	name: string,
	password: string
) {
	try {
		const response = await axios.post(
			"http://localhost:3001/api/users/create-user",
			{
				email,
				name,
				password,
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to register user");
	}
}
