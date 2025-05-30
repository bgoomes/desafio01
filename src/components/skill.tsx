import { skill }from '../data/skill.json'

export function Skill() {
    return (
        <>
            {skill.map((item, index) => (
              <button key={index} className='bg-green-600 text-gray-950 rounded-4xl px-2'>{item.name}</button>
            ))}
        </>
        
    );
}