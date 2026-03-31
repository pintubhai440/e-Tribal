import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Activity, ShoppingBag, Bot, ArrowRight } from 'lucide-react';

export default function Home() {
  const modules = [
    {
      title: 'Learning (LMS)',
      description: 'Access educational videos, quizzes, and earn certifications.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-700',
      link: '/learning',
    },
    {
      title: 'Health (Telemedicine)',
      description: 'Consult doctors via video and use AI symptom checking.',
      icon: Activity,
      color: 'bg-rose-100 text-rose-700',
      link: '/health',
    },
    {
      title: 'E-Commerce Module 1',
      description: 'Buy and sell authentic tribal products from VSP, VZM, and SKL.',
      icon: ShoppingBag,
      color: 'bg-amber-100 text-amber-700',
      link: '/commerce',
    },
    {
      title: 'AI Assistant',
      description: 'Get smart recommendations, crop predictions, and chat support.',
      icon: Bot,
      color: 'bg-emerald-100 text-emerald-700',
      link: '/ai',
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/tribal-art/1920/1080?blur=4')] bg-cover bg-center" />
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Empowering Tribal Communities
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mb-10">
            A digital platform connecting Kondakarakam and Patha Rega villages with education, healthcare, and economic opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/learning"
              className="bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2"
            >
              <span>Start Learning</span> <ArrowRight size={18} />
            </Link>
            <Link
              to="/ai"
              className="bg-emerald-700 text-white border border-emerald-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
            >
              <span>Ask AI Assistant</span> <Bot size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-900">Core Services</h2>
          <p className="text-stone-500 mt-2">Explore the tools built for your community.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.title}
                to={mod.link}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mod.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {mod.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats / Info Section */}
      <section className="bg-stone-100 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-emerald-800 mb-2">2</div>
            <div className="text-stone-600 font-medium">Villages Connected</div>
            <div className="text-sm text-stone-500 mt-1">Kondakarakam & Patha Rega</div>
          </div>
          <div>
            <div className="text-4xl font-black text-emerald-800 mb-2">100%</div>
            <div className="text-stone-600 font-medium">Local Focus</div>
            <div className="text-sm text-stone-500 mt-1">Culturally aligned services</div>
          </div>
          <div>
            <div className="text-4xl font-black text-emerald-800 mb-2">24/7</div>
            <div className="text-stone-600 font-medium">AI Support</div>
            <div className="text-sm text-stone-500 mt-1">Powered by Gemini</div>
          </div>
        </div>
      </section>
    </div>
  );
}
