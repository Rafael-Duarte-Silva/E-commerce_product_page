export const IconMinus = ({ className = "" }: {className?: string}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 12 4"
            width="12"
            height="4"
        >
            <defs>
                <path
                    id="a"
                    d="M11.357 3.332A.641.641 0 0012 2.69V.643A.641.641 0 0011.357 0H.643A.641.641 0 000 .643v2.046c0 .357.287.643.643.643h10.714z"
                ></path>
            </defs>
            <use fill="#FF7E1B" xlinkHref="#a"></use>
        </svg>
    );
};