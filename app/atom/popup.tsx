import React from 'react';

interface PopupProps {
    message: string; // You can adjust this type based on your needs
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded shadow-lg">
                <p className="mb-4 text-center">{message}</p>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
