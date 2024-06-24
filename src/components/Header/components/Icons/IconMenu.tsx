export const IconMenu = ({ className = "" }: {className?: string}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 15"
            width="16"
            height="15"
        >
            <path
                fill="#69707D"
                fillRule="evenodd"
                d="M16 12v3H0v-3h16zm0-6v3H0V6h16zm0-6v3H0V0h16z"
            ></path>
        </svg>
    );
};