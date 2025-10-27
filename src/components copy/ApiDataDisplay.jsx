import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  if (error) {
    return (
      <Card className="mt-4">
        <div className="text-red-600 dark:text-red-400">
          Error: {error}
          <Button variant="primary" onClick={fetchData} className="ml-4">
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search input */}
      <Card>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </Card>

      {/* Loading state */}
      {loading && (
        <Card>
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </Card>
      )}

      {/* Data display */}
      {!loading && (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredData.map(post => (
              <Card key={post.id} title={`Post ${post.id}`}>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <Button
              variant="secondary"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </Button>
            <span className="text-gray-600 dark:text-gray-400">
              Page {currentPage}
            </span>
            <Button
              variant="secondary"
              onClick={handleNextPage}
              disabled={filteredData.length < itemsPerPage}
            >
              Next Page
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ApiDataDisplay;