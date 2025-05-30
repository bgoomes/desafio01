type subTitleProps = {
    subTitle: string;
}

export function SubTitle({ subTitle }: subTitleProps) {
    return(
         <h1 className='text-sm text-gray-400 font-light font-serif '>{ subTitle }</h1>
    )
}