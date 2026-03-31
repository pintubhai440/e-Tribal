import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserPlus, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VillageContext } from '../App';

export default function Register() {
  const { village } = useContext(VillageContext);
  const [formData, setFormData] = useState({
    name: '',
    sonOfFather: '',
    address: '',
    mobileNumber: '',
    aadharNumber: '',
    email: '',
    village: village === 'All' ? 'Kondakarakam' : village
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, 'registrations'), {
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });
      setSuccess(true);
      setFormData({
        name: '',
        sonOfFather: '',
        address: '',
        mobileNumber: '',
        aadharNumber: '',
        email: '',
        village: village === 'All' ? 'Kondakarakam' : village
      });
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Failed to register. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-xl border border-emerald-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Registration Successful!</h2>
        <p className="text-stone-600 mb-8">
          Thank you for registering with <span className="notranslate">e-Tribal Andhra</span>. Your details have been submitted for review.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center w-full bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
        >
          Go to Home <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
        <div className="bg-emerald-800 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <UserPlus size={32} className="text-emerald-400" />
            <h1 className="text-3xl font-bold">Member Registration</h1>
          </div>
          <p className="text-emerald-100">Join the <span className="notranslate">e-Tribal Andhra</span> community to access exclusive benefits and services.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3 animate-in slide-in-from-top-2">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-stone-700 ml-1">Full Name *</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="sonOfFather" className="text-sm font-semibold text-stone-700 ml-1">Son of (Father's Name) *</label>
              <input
                id="sonOfFather"
                type="text"
                required
                placeholder="Enter father's name"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.sonOfFather}
                onChange={(e) => setFormData({ ...formData, sonOfFather: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="village" className="text-sm font-semibold text-stone-700 ml-1">Village *</label>
              <select
                id="village"
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              >
                <option value="Kondakarakam">Kondakarakam</option>
                <option value="Patha Rega">Patha Rega</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="mobile" className="text-sm font-semibold text-stone-700 ml-1">Mobile Number *</label>
              <input
                id="mobile"
                type="tel"
                required
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-semibold text-stone-700 ml-1">Address *</label>
            <textarea
              id="address"
              required
              rows={3}
              placeholder="Enter your complete address"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="aadhar" className="text-sm font-semibold text-stone-700 ml-1">Aadhar Card Number *</label>
              <input
                id="aadhar"
                type="text"
                required
                pattern="[0-9]{12}"
                title="Aadhar number must be 12 digits"
                placeholder="Enter 12-digit Aadhar number"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.aadharNumber}
                onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value.replace(/\D/g, '').slice(0, 12) })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-stone-700 ml-1">Email Address (Optional)</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-emerald-200'}`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <UserPlus size={20} />
                  Register Now
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-stone-500 mt-4">
            By registering, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}
