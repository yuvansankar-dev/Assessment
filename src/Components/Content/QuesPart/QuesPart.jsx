import React from 'react'

export default function QuesPart({ data, setData, count }) {
    const checkSelected = (e) => {
        if (!e.target.checked) {
            setData(pre => {
                pre[count].selectedAns = pre[count].selectedAns.filter((selected) => selected !== e.target.value);
                return { ...pre }
            })
        }
        else {
            setData(pre => {
                pre[count].selectedAns.push(e.target.value);
                return { ...pre }
            })
        }
        console.log(e)
    }
    return (
        <div>
            <h2>{data.question}</h2>
            {data.options.map((option) =>
                <>
                    <input type="checkbox" name={option} checked={data.selectedAns.includes(option)} value={option} onChange={checkSelected} />
                    <label htmlFor={option}>{option}</label></>
            )}
        </div>
    )
}
