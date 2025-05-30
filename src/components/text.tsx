type titleProps = {
    text: string;
}

export function Title({ text }: titleProps) {
    return(
         <h1 className='text-2xl text-white font-bold '>{text}</h1>
    )
}