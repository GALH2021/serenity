import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap'; 
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';


function UserProfile() {
    const [error, setError] = useState("");
    const [deleteMsg, setDeleteMsg] = useState("");
    const { currentUser, logout, deleteUser } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        try {
            setError("");
            await logout();
            history.push("/");
            window.location.reload();
        } catch {
            setError("Failed to log out");
        }
    }

    async function handleDeleteUser() {
        try {
            setDeleteMsg("");
            await deleteUser();
        } catch {
            setDeleteMsg("We could not delete your account");
        }
    }

    return (
        <div className="UserProfile">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {deleteMsg && <Alert variant="danger">{deleteMsg}</Alert>}
                    <strong>Email:</strong> {currentUser && currentUser.email}
                    <Link to="/updateProfile" className="btn btn-secondary">
                        Update Profile
                    </Link>
                    <Button className="btn btn-danger" onClick={handleDeleteUser}>
                        Delete Account
                    </Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button 
                    className="btn btn-info"
                    onClick={handleLogout}
                >Logout</Button>
            </div>
        </div>
    );
}

export default UserProfile;