import axios from "axios";

export default async function updateUserPass(
	oldPassword: string,
	newPassword: string,
	confirmPassword: string
) {
	try {
		const response = await axios.put(
			"http://localhost:3001/api/users/update-user-password",
			{
				oldPassword,
				newPassword,
				confirmPassword,
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
		throw new Error(`failed to update user info ${error.message}`);
	}
}
