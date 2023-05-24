"use client";

import { createContext, useState } from "react";

export const EmailContext = createContext();

export const EmailProvider = ({ children }: any) => {
	const [emails, setEmails] = useState({});

	return (
		<EmailContext.Provider value={{ emails, setEmails }}>
			{children}
		</EmailContext.Provider>
	);
};
