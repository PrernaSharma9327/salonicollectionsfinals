import React from 'react';

const Filter = () => {
    const filterSidebarStyle = {
        width: '250px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRight: '1px solid #ddd',
        overflowY: 'auto',
        height: '100vh',
    };

    const headingStyle = {
        fontSize: '18px',
        marginBottom: '20px',
    };

    const filterSectionStyle = {
        marginBottom: '20px',
    };

    const filterSectionHeadingStyle = {
        fontSize: '16px',
        marginBottom: '10px',
    };

    const priceRangeStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const priceRangeInputsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const inputTextStyle = {
        width: '45%',
        padding: '5px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    };

    return (
        <aside style={filterSidebarStyle}>
            <h3 style={headingStyle}>Filters</h3>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Price</h4>
                <div style={priceRangeStyle}>
                    <input type="range" min="0" max="1500" />
                    <div style={priceRangeInputsStyle}>
                        <input type="text" placeholder="Min" style={inputTextStyle} />
                        <input type="text" placeholder="Max" style={inputTextStyle} />
                    </div>
                </div>
            </div>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Brand</h4>
                <label><input type="checkbox" /> Brand 1</label>
                <label><input type="checkbox" /> Brand 2</label>
                <label><input type="checkbox" /> Brand 3</label>
            </div>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Customer Ratings</h4>
                <label><input type="checkbox" /> 4★ & above</label>
                <label><input type="checkbox" /> 3★ & above</label>
            </div>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Offers</h4>
                <label><input type="checkbox" /> Buy More, Save More</label>
                <label><input type="checkbox" /> No Cost EMI</label>
                <label><input type="checkbox" /> Special Price</label>
            </div>
        </aside>
    );
};

export default Filter;
