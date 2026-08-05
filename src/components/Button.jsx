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

bg-blue-600
text-white
px-5
py-3
rounded-lg
hover:bg-blue-700
transition

${className}

`}

            {...props}

        >

            {children}

        </button>

    );

}

export default Button;