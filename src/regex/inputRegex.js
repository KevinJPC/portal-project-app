/* Regular expressions to validate fields. */
export const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
export const regexPassword =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
export const regexText = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
export const regexNumber = /^\d+$/
