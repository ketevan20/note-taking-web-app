import { motion } from "motion/react"

const Loader = () => {
    return (
        <motion.div
            className={`rounded-full border-4 border-t-transparent`}
            style={{
                width: 30,
                height: 30,
                borderColor: 'white',
                borderTopColor: 'transparent'
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    )
}

export default Loader