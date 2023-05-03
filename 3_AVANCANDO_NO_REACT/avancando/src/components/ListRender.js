import { useState } from 'react'

export const ListRender = () => {
    const [list] = useState(["Evaldo", "Guilda", "Felipe", "Takashi"])
    const [users] = useState([
        { id: 1, name: "Evaldo", age: 30 },
        { id: 2, name: "Guilda", age: 29 },
        { id: 3, name: "Felipe", age: 28 },
        { id: 4, name: "Takashi", age: 27 },
    ])
    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>

        </div>
    )
}
