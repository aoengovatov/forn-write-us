import styles from "./App.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { SendAnswerComponent } from "./components/SendAnswerComponent/SendAnswerComponent";

const fieldSchema = yup.object().shape({
    name: yup
        .string()
        .matches(
            /^[А-Я]$/i,
            "Некорректное Имя. Разрешенные символы:" + "буквы (кириллица)"
        )
        .min(1, "Некорректное Имя. Длина должна быть не меньше 1 символа.")
        .max(20, "Некорректное Имя. Длина должна быть не больше 20 символов."),
    surname: yup
        .string()
        .matches(
            /^[А-Я]$/i,
            "Некорректное Имя. Разрешенные символы:" + "буквы (кириллица)"
        )
        .min(1, "Некорректное Имя. Длина должна быть не меньше 1 символа.")
        .max(20, "Некорректное Имя. Длина должна быть не больше 20 символов."),
    email: yup
        .string()
        .matches(
            /^[A-Z0-9_-]+@[A-Z0-9]+.[A-Z]{2,4}$/i,
            "Некорректный email. " +
                "Допустимые символы: латинские буквы, цифры, тире, нижнее подчеркивание."
        ),
    phone: yup
        .string()
        .matches(/^[0-9]/, "Некорректный телефон. Разрешенные символы:" + "цифры")
        .min(8, "Некорректный телефон. Длина должна быть не меньше  8 символов.")
        .max(11, "Некорректный пароль. Длина должна быть не больше 11 символов."),
    message: yup
        .string()
        .matches(
            /^[А-Я]$/i,
            "Некорректное телефон. Разрешенные символы:" +
                "буквы (кирилица, тире, нижнее подчеркивание, точка"
        )
        .min(5, "Некорректное сообщение. Длина должна быть не меньше  5 символов.")
        .max(300, "Некорректное сообщение. Длина должна быть не больше 300 символов."),
});

export const App = () => {
    const { isSendForm, setIsSendForm } = useState(false);
    const submitButtonRef = useRef(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
        },
        resolver: yupResolver(fieldSchema),
    });

    const sendFormData = (formData) => {
        console.log(formData);
        setIsSendForm(true);
    };

    const emailError = errors.email?.message;
    const passwordError = errors.password?.message;
    const password2Error = errors.password2?.message;

    return (
        <>
            {!isSendForm ? (
                <SendAnswerComponent>Ваше сообщение отправлено!</SendAnswerComponent>
            ) : (
                <div className={styles.container}>
                    <div className={styles.title}>Напишите нам!</div>
                    <form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
                        <input
                            className={styles.input}
                            name="name"
                            type="text"
                            placeholder="Имя"
                            {...register("name")}
                        />
                        <input
                            className={styles.input}
                            name="surname"
                            type="text"
                            placeholder="Фамилия"
                            {...register("surname")}
                        />
                        <input
                            className={styles.input}
                            name="email"
                            type="text"
                            placeholder="email"
                            {...register("email")}
                        />
                        <input
                            className={styles.input}
                            name="phone"
                            type="phone"
                            placeholder="Телефон"
                            {...register("phone")}
                        />
                        <textarea
                            className={styles.inputTextarea}
                            name="message"
                            type="textarea"
                            placeholder="Сообщение"
                            maxLength={300}
                            {...register("message")}
                        />
                        <button
                            ref={submitButtonRef}
                            className={styles.button}
                            type="submit"
                        >
                            отправить
                        </button>
                    </form>
                    {emailError && <div className={styles.error}>{emailError}</div>}
                    {passwordError && <div className={styles.error}>{passwordError}</div>}
                    {password2Error && (
                        <div className={styles.error}>{password2Error}</div>
                    )}
                </div>
            )}
        </>
    );
};
