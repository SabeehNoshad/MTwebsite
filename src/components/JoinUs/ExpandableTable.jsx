import React, { useState } from 'react';

const openings = [
    {
        id: 1,
        title: "React Developer",
        location: "Remote/On-site ",
        jobType: "Full-time",
        experience: "2+ years",
        description: `
            We are looking for a skilled React Developer to join our dynamic team. The ideal candidate will have a strong background in front-end development and be proficient in React.js. As a React Developer, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.
        `,
        responsibilities: `
            - Develop and maintain web applications using React.js
            - Optimize components for maximum performance across a vast array of web-capable devices and browsers
            - Collaborate with back-end developers and web designers to improve usability
            - Write well-documented, clean code
            - Troubleshoot interface software and debug application codes
            - Ensure high quality graphic standards and brand consistency
            - Translate designs and wireframes into high-quality code
            - Participate in code reviews and design discussions
        `
    },
    {
        id: 2,
        title: "Mid level IOS Developer",
        location: "Sindh Karachi,Pakistan",
        jobType: "Full-time",
        experience: "1+ years",
        description: `
            We are looking for a skilled React Developer to join our dynamic team. The ideal candidate will have a strong background in front-end development and be proficient in React.js. As a React Developer, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.
        `,
        responsibilities: `
            - Develop and maintain web applications using React.js
            - Optimize components for maximum performance across a vast array of web-capable devices and browsers
            - Collaborate with back-end developers and web designers to improve usability
            - Write well-documented, clean code
            - Troubleshoot interface software and debug application codes
            - Ensure high quality graphic standards and brand consistency
            - Translate designs and wireframes into high-quality code
            - Participate in code reviews and design discussions
        `
    },
    // Add more job listings here
];

const ExpandableTable = () => {
    const [expandedRows, setExpandedRows] = useState([]);

    const handleExpandClick = (id) => {
        setExpandedRows(expandedRows.includes(id) ? expandedRows.filter(rowId => rowId !== id) : [...expandedRows, id]);
    };

    return (
        <div className="w-full">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Title</th>
                        <th className="py-2">Location</th>
                        <th className="py-2">Job Type</th>
                        <th className="py-2">Experience</th>
                        <th className="py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {openings.map(opening => (
                        <React.Fragment key={opening.id}>
                            <tr className="border-t place-items-center" onClick={() => handleExpandClick(opening.id)}>
                                <td className="py-2 px-4">{opening.title}</td>
                                <td className="py-2 px-4" >{opening.location}</td>
                                <td className="py-2 px-4">{opening.jobType}</td>
                                <td className="py-2 px-4">{opening.experience}</td>
                                <td className="py-2">
                                    <button
                                        onClick={() => handleExpandClick(opening.id)}
                                        className="bg-primary text-white py-1 px-4 rounded-full"
                                    >
                                        {expandedRows.includes(opening.id) ? "Close" : "Apply"}
                                    </button>
                                </td>
                            </tr>
                            {expandedRows.includes(opening.id) && (
                                <tr>
                                    <td colSpan="5" className="py-2 px-4 border-b bg-gray-50">
                                        <h2 className="font-bold">Description</h2>
                                        <p className="mb-4">{opening.description}</p>
                                        <h2 className="font-bold">Responsibilities</h2>
                                        <p>{opening.responsibilities}</p>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpandableTable;
