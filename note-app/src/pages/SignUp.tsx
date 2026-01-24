import AuthForm from "../components/AuthForm/AuthForm"

const SignUp = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[rgba(243,245,248,1)] flex items-center justify-center p-4 dark:bg-[rgba(43,48,59,1)] serif:font-serif monospace:font-['Source_Code_Pro'] sans-serif:font-[Inter]">
        <AuthForm mode="signUp"/>
    </div>
  )
}

export default SignUp