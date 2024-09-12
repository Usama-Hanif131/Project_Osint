import React, { useState } from 'react';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');
    const [results, setResults] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            setError('');
            // Construct the API URL using the user's input
            const url = `https://api.securitytrails.com/v1/domain/${searchQuery}/subdomains?children_only=false&include_inactive=true`;

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    APIKEY: 'CMqMHf7jNUJ56UhZfreHm8Eb-Nzvzihm'
                }
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setResults(data); // Save the results in the state
                })
                .catch(err => {
                    console.error(err);
                    setError('Failed to fetch data from the API.');
                });
        } else {
            setError('Please enter a target.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-center">
                OSINT Search
            </h1>

            <form onSubmit={handleSearch} className="w-full max-w-lg">
                <div className="flex items-center border-b border-gray-300 py-3">
                    <input
                        type="text"
                        placeholder="Enter target here..."
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                    >
                        Search
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>

            {results && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Search Results:</h2>
                    <pre className="bg-gray-100 p-4 rounded">
                        {JSON.stringify(results, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}
