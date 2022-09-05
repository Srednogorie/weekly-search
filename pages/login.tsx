import React from "react"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import NavBar from "../components/NavBar"
import {ErrorMessage, Field, Form, Formik} from "formik"
import {useRouter} from "next/router"
import {useIsUserLogged} from "../hooks"

const Login: React.FC = () => {
    const router = useRouter()
    const isLogged = useIsUserLogged()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log(user)
                router.push('/').then()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            });
    }
    return (
        <>
            <NavBar/>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-28 lg:py-0">
                    <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#264653] md:text-2xl">
                                Sign in to your account
                            </h1>
                            <Formik
                                initialValues={{ email: '', password: ''}}
                                validate={values => {
                                    const errors: {email?: string, password?: string} = {}
                                    if (!values.email) {
                                        errors.email = 'Required'
                                    }
                                    return errors;
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                    if (!isLogged) {
                                        handleLogin(values.email, values.password)
                                    }
                                }}
                                validateOnChange={false}
                                validateOnBlur={false}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Your email
                                            </label>
                                            <Field type="email" name="email"
                                                   className="border border-[#e9c46a] text-gray-900 sm:text-sm rounded-lg
                                                   focus:ring-[#e9c46a] focus:border-[#e9c46a] block w-full p-2.5 placeholder:text-[#264653]
                                                   opacity-60" placeholder="name@company.com" />
                                            <ErrorMessage name="email" component="div" />
                                        </div>
                                        <div>
                                            <label htmlFor="password"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <Field type="password" name="password"
                                                   className="border border-[#e9c46a] text-gray-900 sm:text-sm rounded-lg
                                                   focus:ring-[#e9c46a] focus:border-[#e9c46a] block w-full p-2.5 placeholder:text-[#264653]
                                                   opacity-60" placeholder="••••••••"/>
                                            <ErrorMessage name="password" component="div" />
                                        </div>
                                        <button type="submit"
                                                className="w-full text-[#264653] bg-primary-600 hover:bg-primary-700 focus:ring-4
                                                           focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 p
                                                           y-2.5 text-center"
                                                disabled={isSubmitting}>
                                            Sign in
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
