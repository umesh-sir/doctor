import React, { useState } from 'react';

interface TableComponentProps {
    data: Record<string, any>[]; // Array of objects representing the table rows
    headerMapping: Record<string, string>; // Mapping of header names to display names
    onRowDoubleClick?: (rowData: Record<string, any>) => void; // Optional callback for double-clicking a row
    onButtonClick?: (rowData: Record<string, any>) => void; // Optional callback for button click
    buttonname?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({
    data,
    headerMapping,
    onRowDoubleClick,
    onButtonClick,
    buttonname,
}) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    if (!data || data.length === 0) {
        return <div className='flex justify-center items-center text-xl font-bold h-[400px]'>There is no data found</div>;
    }

    // Extract headers from headerMapping
    const headers = Object.keys(headerMapping);

    const handleRowDoubleClick = (rowData: Record<string, any>) => {
        if (onRowDoubleClick) {
            onRowDoubleClick(rowData);
        }
    };

    // Filter data based on search query
    const filteredData = data.filter((row) =>
        headers.some((header) => 
            String(row[header]).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Debugging logs
    console.log("Search Query:", searchQuery);
    console.log("Filtered Data:", filteredData);

    return (
        <div className="relative overflow-hidden" style={{ height: '400px' }}>
            <div className="flex lg:justify-end w-full md:justify-end sticky top-0 bg-white p-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 px-2 py-1"
                />
            </div>
            <div className="overflow-x-auto" style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                <table className="min-w-full border-collapse border border-gray-200" style={{ whiteSpace: 'nowrap' }}>
                    <thead className="sticky top-0 bg-gray-100">
                        <tr className="hover:cursor-pointer">
                            {headers.map((header) => (
                                <th key={header} className="border border-gray-300 px-4 py-2">
                                    {headerMapping[header]}
                                </th>
                            ))}
                            {onButtonClick && <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-slate-300 hover:cursor-pointer"
                                onDoubleClick={() => handleRowDoubleClick(row)}
                            >
                                {headers.map((header) => (
                                    <td key={header} className="border border-gray-300 px-4 py-2">
                                        {row[header]}
                                    </td>
                                ))}
                                {onButtonClick && (
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded"
                                            onClick={() => onButtonClick(row)}
                                        >
                                            {buttonname}
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableComponent;
