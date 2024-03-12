import React from 'react'

const ExamTable = ({data}) => {
    return (
        <table>
            <tbody>
                {data.map((person, index) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ExamTable
