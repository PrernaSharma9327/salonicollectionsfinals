import React from 'react';

const Sidebar = () => {
    const sidebarStyle = {
        backgroundColor: '#d1c4e9',
        padding: '20px',
        width: '250px',
        borderRight: '1px solid #ddd',
    };

    const headingStyle = {
        marginBottom: '20px',
    };

    return (
        <aside style={sidebarStyle}>
            <h2 style={headingStyle}>Hello, user_name</h2>
        </aside>
    );
}

export default Sidebar;
