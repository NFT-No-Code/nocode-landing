import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Nome é um campo obrigatório."),
  email: yup.string().email().required("E-mail é um campo obrigatório."),
  phone: yup
    .string()
    .matches(
      /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
      {
        message: "Telefone inválido. Deve conter DDD sem espaços e hífen",
        excludeEmptyString: true,
      }
    ),
  enterprise: yup.string().required("Nome da empresa é um campo obrigatório."),
  message: yup.string().required("Mensagem é um campo obrigatório."),
});
