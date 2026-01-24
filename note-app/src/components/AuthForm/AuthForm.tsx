import { Form, Field, Formik, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { infoIcon, logoIcon, showIcon } from "../../icons/Icons";
import * as Yup from 'yup'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../firebase";
import { toast } from "react-toastify";
import CustomToast from "../../toasts/CustomToast";
import { useState } from "react";
import Loader from "../Loader/Loader";

type AuthFormProps = {
    mode: string;
}

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Can't be empty")
        .email('Please enter a valid email address.'),
    password: Yup.string()
        .required("Can't be empty")
        .min(8, "More than 8 characters required")
})

const AuthForm = ({ mode }: AuthFormProps) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const AuthFormParams = mode == 'signIn' ? {
        title: 'Welcome to Note',
        text: 'Please log in to continue',
        authRedirectText: 'No account yet? ',
        authRedirectLabel: 'Sign Up',
        to: '/sign-up',
        buttonText: 'Login'
    } : {
        title: 'Create Your Account',
        text: 'Sign up to start organizing your notes and boost your productivity.',
        authRedirectText: 'Already have an account? ',
        authRedirectLabel: 'Login',
        to: '/',
        buttonText: 'Sign up'
    };

    async function signUp(email: string, password: string) {
        try {
            await createUserWithEmailAndPassword(
                Auth,
                email,
                password
            );
            navigate('/notes');
            toast(({ closeToast }) => (
                <CustomToast message="Account has been created!" closeToast={closeToast} />
            ));
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            let errorMessage = "Something went wrong. Please try again.";

            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "This email is already registered. Try signing in instead.";
            } else if (error.code === 'auth/network-request-failed') {
                errorMessage = "Network error. Please check your internet connection.";
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = "Too many attempts. Please try again later.";
            }

            toast(({ closeToast }) => (
                <CustomToast message={errorMessage} closeToast={closeToast} invalid={true} />
            ));
            setLoading(false);
        }
    }

    async function signIn(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(Auth, email, password);
            navigate('/notes');
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            let errorMessage = "Invalid email or password.";

            if (error.code === 'auth/user-not-found') {
                errorMessage = "No account found with this email.";
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = "Incorrect password. Please try again.";
            } else if (error.code === 'auth/invalid-credential') {
                errorMessage = "Invalid credentials. Please check your email and password.";
            } else if (error.code === 'auth/user-disabled') {
                errorMessage = "This account has been disabled. Contact support.";
            } else if (error.code === 'auth/network-request-failed') {
                errorMessage = "Network error. Check your internet connection.";
            }

            toast(({ closeToast }) => (
                <CustomToast message={errorMessage} closeToast={closeToast} invalid={true} />
            ));
            setLoading(false);
        }
    }

    return (
        <div className="w-full md:w-135 bg-[rgba(255,255,255,1)] border border-[rgba(224,228,234,1)] shadow-[0px_8px_12px_0px_rgba(240,240,240,0.6)] rounded-xl p-12 max-md:px-4 flex flex-col gap-4 text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)] dark:bg-[rgba(14,18,27,1)] dark:border-[rgba(35,37,48,1)] dark:shadow-none">
            <div className="flex items-center justify-center gap-2.5 text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)]">
                <img src="/images/Feather.svg" alt="Feather in logo" />
                {logoIcon}
            </div>

            <div className="text-center">
                <h1 className="text-[24px] font-bold leading-[120%] tracking-[-0.5px] ">{AuthFormParams.title}</h1>
                <p className="text-[rgba(82,88,102,1)] mt-2 dark:text-[rgba(202,207,216,1)]">{AuthFormParams.text}</p>
            </div>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    setLoading(true);
                    mode == 'signUp' ? signUp(values.email, values.password) : signIn(values.email, values.password);
                }}
                validationSchema={schema}
                validateOnBlur={true}
            >
                {({ errors, touched }) => (
                    <Form className="pt-6 flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-1.5">
                            <label htmlFor="email" className="font-medium">Email Address</label>
                            <Field name="email" id="email" type='email' placeholder="email@example.com" className="w-full py-3 px-4 border rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] border-[rgba(202,207,216,1)] dark:border-[rgba(82,88,102,1)]" style={{ borderColor: errors.email && touched.email ? '#dc2626' : '' }} />
                            {errors.email && touched.email && <div className="flex gap-2 items-center text-red-600 text-[12px] font-normal leading-[140%]">{infoIcon} <ErrorMessage component='p' name="email" /></div>}
                        </div>

                        <div className="w-full flex flex-col gap-1.5">
                            <label htmlFor="password" className="font-medium">Password</label>
                            <div className="relative">
                                <Field name="password" id="password" type={`${showPassword ? 'text' : 'password'}`} className={`w-full py-3 pl-4 pr-9 border rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] ${errors.password && touched.password ? 'border-[#dc2626]' : 'border-[rgba(202,207,216,1)] dark:border-[rgba(82,88,102,1)]'}`} />
                                <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute top-[50%] right-4 -translate-y-[50%] cursor-pointer">{showIcon}</button>
                            </div>
                            {mode == "signUp" ? <p className={`flex gap-2 items-center text-[rgba(82,88,102,1)] text-[12px] leading-[140%] ${errors.password && touched.password ? 'text-red-600' : ''}`}>{infoIcon} At least 8 characters</p> : errors.password && touched.password ? <p className="flex gap-2 items-center text-red-600 text-[12px] leading-[140%]">{infoIcon} At least 8 characters</p> : ''}
                        </div>

                        <button type="submit" disabled={loading} className="py-3 px-4 bg-[rgba(51,92,255,1)] rounded-lg text-white flex items-center justify-center">{loading ? <Loader /> : AuthFormParams.buttonText}</button>
                    </Form>
                )}
            </Formik>
            <div className="w-full h-px bg-[rgba(224,228,234,1)] dark:bg-[rgba(35,37,48,1)]"></div>
            <p className="text-[rgba(82,88,102,1)] text-center dark:text-[rgba(202,207,216,1)]">{AuthFormParams.authRedirectText}<Link to={AuthFormParams.to} className="text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)]">{AuthFormParams.authRedirectLabel}</Link></p>
        </div >
    )
}

export default AuthForm