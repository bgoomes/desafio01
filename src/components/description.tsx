type descriptionProps = {
   description: string;
}

export function Description({description }:descriptionProps) {
    return(
         <h1 className='text-sm text-gray-400 font-light font-serif italic '>{description }</h1>
    )
}