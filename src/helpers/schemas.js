import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .max(30)
    .matches(/^(?!.*([A-Za-z])\1{3,})[A-Za-zА-Яа-я0-9\s]+$/, "Invalid input")
    .required(),
  description: Yup.string()
    .trim()
    .max(520)
    .matches(/^(?!.*([A-Z])\1{3,})[A-Za-z\s\-,.!?@#$%^&*()]+$/, "Invalid input")
    .required(),
  date: Yup.date().min(new Date()).required(),
  time: Yup.string().required(),
  location: Yup.string()
    .trim()
    .max(20)
    .matches(/^(?!.*([A-Za-z])\1{3,})[A-Za-zА-Яа-я\s]+$/, "Invalid input")
    .required(),
  category: Yup.string()
    .trim()
    .matches(/(Art|Music|Business|Conference|Workshop|Party|Sport)/)
    .required(),
  picture: Yup.string().trim().url().required(),
  priority: Yup.number().required(),
});
