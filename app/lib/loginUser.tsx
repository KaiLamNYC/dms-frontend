import axios from "axios";

export default async function loginUser(email: string, password: string) {
	try {
		const response = await axios.post(
			"http://localhost:3001/api/users/sign-in",
			{
				email,
				password,
			},
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to log in");
	}
}
