export const IconPlus = ({ className = "" }: {className?: string}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 12 12"
            width="12"
            height="12"
        >
            <defs>
                <path
                    id="b"
                    d="M12 7.023V4.977a.641.641 0 00-.643-.643h-3.69V.643A.641.641 0 007.022 0H4.977a.641.641 0 00-.643.643v3.69H.643A.641.641 0 000 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 00.643-.643v-3.69h3.691A.641.641 0 0012 7.022z"
                ></path>
            </defs>
            <use fill="#FF7E1B" xlinkHref="#b"></use>
        </svg>
    );
};