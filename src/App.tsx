import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, signInWithGoogle, logOut } from './firebase';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Health from './pages/Health';
import Commerce from './pages/Commerce';
import AI from './pages/AI';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Login from './pages/Login';

export const AuthContext = React.createContext<{ user: User | null; loading: boolean }>({ user: null, loading: true });
export const VillageContext = React.createContext<{ village: string; setVillage: (v: string) => void }>({ village: 'All', setVillage: () => {} });

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [village, setVillage] = useState<string>('All');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-emerald-50 text-emerald-800 font-bold text-xl animate-pulse">Loading <span className="notranslate">e-Tribal</span>...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <VillageContext.Provider value={{ village, setVillage }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="learning" element={<Learning />} />
              <Route path="health" element={<Health />} />
              <Route path="commerce" element={<Commerce />} />
              <Route path="ai" element={<AI />} />
              <Route path="admin" element={<Admin />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </VillageContext.Provider>
    </AuthContext.Provider>
  );
}
