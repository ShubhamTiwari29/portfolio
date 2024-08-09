import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import AdminHeader from '../../components/AdminComponents/AdminHeader'
import ProjectEntry from './ProjectEntry'
import AdminMessage from './AdminMessage'



const AdminDashboard = () => {
    return (
        <div>

            <AdminHeader />
            <Routes>
                <Route path="/" element={<ProjectEntry />} />
                <Route path="messages" element={<AdminMessage />} />
            </Routes>

        </div>
    )
}

export default AdminDashboard;
