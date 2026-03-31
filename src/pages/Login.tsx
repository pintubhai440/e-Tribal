import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase';
import { LogIn, Mail, AlertCircle } from 'lucide-react';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-emerald-800 p-10 text-white text-center">
          <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
            <LogIn size={32} className="text-emerald-300" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-emerald-200">Sign in to your <span className="notranslate">e-Tribal</span> account</p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3 animate-in shake duration-300">
              <AlertCircle size={20} className="shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            <p className="text-center text-stone-600 mb-4">
              Access your account using your Google account for a secure and fast experience.
            </p>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-white border-2 border-stone-200 text-stone-700 font-bold py-4 rounded-xl hover:bg-stone-50 transition-all flex items-center justify-center gap-3 shadow-sm group"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-stone-300 border-t-emerald-600 rounded-full animate-spin" />
              ) : (
                <>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
                  <span className="text-lg">Sign in with Google</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-8 text-stone-500 text-sm">
        Don't have an account? <Link to="/register" className="text-emerald-800 font-bold hover:underline">Register here</Link>
      </p>
    </div>
  );
}
