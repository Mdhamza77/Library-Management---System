export const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  return emailRegex.test(email);
};

export const passwordValidator = (password) => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@!?$%^&*-]).{8,}$/;
  return passwordRegex.test(password);
};

export const textArea = (text) => {
  const textRegex = /^\s*(?:\S\s*){10,100}$/ ;
  return textRegex.test(text)
}