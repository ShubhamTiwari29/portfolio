import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/Project'

const ProjectDetails = () => {

    const { id } = useParams();
    const item = data.find((item) => { item.id == Number(id) });
    console.log(item);
    return (
        <div>
            <h1>testing</h1>
        </div>
    )
}

export default ProjectDetails
