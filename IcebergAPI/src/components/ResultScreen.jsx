// src/screens/ResultScreen.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';   // npm i react-icons
import pb from '../pb';                                 // your PocketBase helper
import icon from '../assets/icon.png';                  // adjust path as needed

export default function ResultScreen() {
  const location  = useLocation();
  const navigate  = useNavigate();
  const query     = new URLSearchParams(location.search).get('query') ?? '';

  // ---------- state ----------
  const [results,   setResults]   = useState([]);
  const [loading,   setLoading]   = useState(false);
  const [errorMsg,  setErrorMsg]  = useState('');
  const [favorites, setFavorites] = useState([]);   // indices of liked cards

  // ---------- fetch once on mount ----------
  useEffect(() => {
    if (!query) return;

    (async () => {
      try {
        setLoading(true);
        const res = await pb.send('/api/result', {
          method : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body   : JSON.stringify({ prompt: query })
        });
        setResults(res.result ?? []);
      } catch (err) {
        console.error(err);
        setErrorMsg('Couldn’t reach the server. Please try again.');
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  // ---------- toggle “favorite” ----------
  const toggleFavorite = async (idx) => {
    // optimistic UI
    setFavorites((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );

    try {
      await pb.send('/api/favorite', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify({
          index: idx,
          apiResultsCache: results          // matches your spec
        })
      });
    } catch (err) {
      console.error(err);
      // roll back if POST fails
      setFavorites((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    }
  };

  // ---------- render ----------
  return (
    <div className="bg-dots text-white min-h-screen flex flex-col items-center py-10">
      {/* top bar */}
      <header className="w-full h-20 fixed top-0 left-0 flex items-center justify-center px-8">
        <img src={icon} alt="Logo" className="absolute left-5 w-12 h-12 rounded" />
        <h1 className="text-2xl font-bold">
          <span className="text-white">Iceberg</span>
          <span className="text-[#54CEFF]">API</span>
        </h1>
        <nav className="absolute right-8 flex gap-6">
          <button onClick={() => navigate('/about')} className="button-underline">About</button>
          <button onClick={() => navigate('/')}       className="button-underline">Home</button>
        </nav>
      </header>

      {/* main block */}
      <main className="mt-28 w-[60rem] px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12">Search Results</h2>

        {loading  && <p className="text-xl">Searching…</p>}
        {errorMsg && <p className="text-red-400">{errorMsg}</p>}
        {!loading && !errorMsg && results.length === 0 && (
          <p>No matches found. Try another search.</p>
        )}

        <section className="flex flex-col gap-8 w-full">
          {results.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#c7dce4] text-gray-900 rounded-lg shadow-md p-6 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-bold">{item.category}</h3>
                <p className="mt-1">{item.description}</p>
              </div>

              <button
                onClick={() => toggleFavorite(idx)}
                className="text-[#54CEFF] hover:text-[#3bb0e0] text-2xl"
                title="Save to favorites"
              >
                {favorites.includes(idx) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
