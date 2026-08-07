function Button({

    children,

    type = "button",

    className = "",

    ...props

}) {

    return (

        <button

            type={type}

            className={`

bg-black
text-white
shadow 
hover:shadow-lg 
hover:-translate-y-1 
transition-all px-6 
py-4 
rounded-xl 
font-semibold
px-10

${className}

`}

            {...props}

        >

            {children}

        </button>

    );

}

export default Button;