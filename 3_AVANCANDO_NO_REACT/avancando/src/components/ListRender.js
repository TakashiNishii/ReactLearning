import { useState } from 'react'

export const ListRender = () => {
    const [list] = useState(["Evaldo", "Guilda", "Felipe", "Takashi"])
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
