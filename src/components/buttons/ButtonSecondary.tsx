import React from 'react';

interface Props{
    onClick: () => void,
    label: string,
    Icon?: React.FC,
    large?: boolean,
    full?: boolean,
    disabled?: boolean
}


export function ButtonSecondary({label, Icon, large, full, disabled, onClick}:Props) {
    return(
        <button className={`
            ${large ? 'px-16 h-12' : 'px-6 h-10'}
            ${full ? 'w-full': 'w-fit'}
            bg-transparent text-secondary-pure 
            hover:bg-secondary-pure/10 
            active:bg-secondary-light active:text-white 
            disabled:opacity-40
            flex items-center justify-center
            gap-2
            font-paragraph1 
            rounded-[4px]
            transition-all
        `}
            disabled={disabled}
            onClick={() => onClick()}
        >
            {Icon && <Icon />}
            {label}
        </button>
    )
}