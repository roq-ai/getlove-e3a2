import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  likes: yup.number().integer().nullable(),
  user_id: yup.string().nullable(),
});
