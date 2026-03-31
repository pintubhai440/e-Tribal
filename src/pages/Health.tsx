import React, { useState, useContext, useMemo } from 'react';
import { AuthContext, VillageContext } from '../App';
import { Video, Activity, FileText, Lock, PlusCircle, Calendar, Clock, User, X, Download, CheckCircle } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { chatWithGemini } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

export default function Health() {
  const { user } = useContext(AuthContext);
  const { village } = useContext(VillageContext);
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [loading, setLoading] = useState(false);

  // Prototyping State
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({ doctor: 'Dr. Sarah Smith (General Physician)', date: '', time: '10:00 AM' });
  const [showAddReportModal, setShowAddReportModal] = useState(false);
  const [newReportData, setNewReportData] = useState({ title: '', date: '', doctor: '' });
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: 'Dr. Sarah Smith', date: '2026-03-25', time: '10:00 AM', type: 'Video Consult', status: 'Upcoming', village: 'Kondakarakam' },
    { id: 2, doctor: 'Dr. Anil Kumar', date: '2026-03-10', time: '02:30 PM', type: 'In-person', status: 'Completed', village: 'Patha Rega' }
  ]);
  const [reports, setReports] = useState([
    { id: 1, title: 'Complete Blood Count (CBC)', date: '2026-03-11', doctor: 'Dr. Anil Kumar', village: 'Kondakarakam' },
    { id: 2, title: 'X-Ray Chest PA View', date: '2026-02-15', doctor: 'Dr. Priya Sharma', village: 'Patha Rega' }
  ]);

  const filteredAppointments = useMemo(() => {
    if (village === 'All') return appointments;
    return appointments.filter(apt => apt.village === village);
  }, [appointments, village]);

  const filteredReports = useMemo(() => {
    if (village === 'All') return reports;
    return reports.filter(report => report.village === village);
  }, [reports, village]);

  const handleSymptomCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim() || !user) return;

    setLoading(true);
    try {
      const prompt = `Act as a helpful medical assistant for a tribal community. A user reports the following symptoms: "${symptoms}". Provide a brief, easy-to-understand preliminary assessment and suggest whether they should consult a doctor. Emphasize that this is not a substitute for professional medical advice.`;
      
      const response = await chatWithGemini(prompt, false, true); // Use fast model
      setDiagnosis(response);

      // Save to Health Records
      await addDoc(collection(db, 'health_records'), {
        userId: user.uid,
        symptoms: symptoms,
        aiDiagnosis: response,
        village: village === 'All' ? 'Kondakarakam' : village,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error checking symptoms:", error);
      setDiagnosis("Sorry, I couldn't analyze the symptoms right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.date) return;
    
    const newAppointment = {
      id: Date.now(),
      doctor: bookingData.doctor.split(' (')[0], // Extract just the name
      date: bookingData.date,
      time: bookingData.time,
      type: 'Video Consult',
      status: 'Upcoming',
      village: village === 'All' ? 'Kondakarakam' : village
    };
    
    setAppointments([newAppointment, ...appointments]);
    setShowBookingModal(false);
    setBookingData({ doctor: 'Dr. Sarah Smith (General Physician)', date: '', time: '10:00 AM' });
  };

  const handleAddReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReportData.title || !newReportData.date) return;
    
    const newReport = {
      id: Date.now(),
      title: newReportData.title,
      date: newReportData.date,
      doctor: newReportData.doctor || 'Self Uploaded',
      village: village === 'All' ? 'Kondakarakam' : village
    };
    
    setReports([newReport, ...reports]);
    setShowAddReportModal(false);
    setNewReportData({ title: '', date: '', doctor: '' });
  };

  const handleDownloadReport = (report: any) => {
    const content = `MEDICAL REPORT\n\nTitle: ${report.title}\nDate: ${report.date}\nDoctor: ${report.doctor}\n\nStatus: Final\n\nDetails:\nThis is a securely generated dummy report for prototyping purposes. All parameters are within normal limits.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.title.replace(/\s+/g, '_')}_${report.date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-rose-100 p-4 rounded-full mb-4">
          <Lock className="text-rose-700" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Sign in to access Health</h2>
        <p className="text-stone-600 max-w-md">
          Please sign in to securely access telemedicine, AI symptom checking, and your health records.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Health Module (Telemedicine)</h1>
        <p className="text-stone-500 mt-1">Access healthcare services and AI symptom checking.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Action Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Video Consult & Appointments */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-100">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-full text-blue-700">
                  <Video size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Telemedicine Consult</h3>
                  <p className="text-stone-600 text-sm">Connect with a doctor remotely.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap shadow-sm"
              >
                Book Appointment
              </button>
            </div>

            <div>
              <h4 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-stone-500" /> <span>My Appointments {village !== 'All' && `(${village})`}</span>
              </h4>
              <div className="space-y-4">
                {filteredAppointments.length === 0 ? (
                  <p className="text-stone-500 italic">No appointments found for {village}.</p>
                ) : (
                  filteredAppointments.map(apt => (
                    <div key={apt.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-stone-200 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-start gap-4 mb-4 sm:mb-0">
                      <div className={`p-3 rounded-full ${apt.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-stone-100 text-stone-500'}`}>
                        {apt.type === 'Video Consult' ? <Video size={20} /> : <User size={20} />}
                      </div>
                      <div>
                        <h5 className="font-bold text-stone-900 notranslate">{apt.doctor}</h5>
                        <div className="flex items-center gap-3 text-sm text-stone-500 mt-1">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {apt.date}</span>
                          <span className="flex items-center gap-1"><Clock size={14} /> {apt.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${apt.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-stone-200 text-stone-700'}`}>
                        {apt.status}
                      </span>
                      {apt.status === 'Upcoming' && (
                        <button className="text-sm text-blue-600 font-medium hover:text-blue-800">Join Call</button>
                      )}
                    </div>
                  </div>
                )))}
              </div>
            </div>
          </div>

          {/* AI Symptom Checker */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-100 p-2 rounded-lg text-rose-700">
                <Activity size={24} />
              </div>
              <h2 className="text-xl font-bold text-stone-900">AI Symptom Check</h2>
            </div>
            <form onSubmit={handleSymptomCheck} className="space-y-4">
              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-stone-700 mb-1">
                  Describe your symptoms
                </label>
                <textarea
                  id="symptoms"
                  rows={4}
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 border"
                  placeholder="E.g., I have a headache and fever since yesterday..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading || !symptoms.trim()}
                className="w-full bg-rose-600 text-white font-semibold py-3 rounded-xl hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Analyzing...' : 'Check Symptoms'}</span>
              </button>
            </form>

            {diagnosis && (
              <div className="mt-6 p-5 bg-rose-50 rounded-xl border border-rose-100">
                <h3 className="text-base font-bold text-rose-900 mb-4 flex items-center gap-2 border-b border-rose-200 pb-2">
                  <Activity size={18} /> <span>AI Preliminary Assessment</span>
                </h3>
                <div className="text-stone-700 text-sm leading-relaxed">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-lg font-bold text-rose-900 mt-4 mb-2" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-base font-bold text-rose-900 mt-4 mb-2" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-sm font-bold text-rose-900 mt-4 mb-2 uppercase tracking-wide" {...props} />,
                      p: ({node, ...props}) => <p className="mb-3" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...props} />,
                      li: ({node, ...props}) => <li className="pl-1" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-stone-900" {...props} />,
                    }}
                  >
                    {diagnosis}
                  </ReactMarkdown>
                </div>
                <p className="text-xs text-rose-600 mt-5 font-medium italic border-t border-rose-200 pt-3">
                  Disclaimer: This is an AI assessment and not professional medical advice. Please consult a doctor for accurate diagnosis.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Medical Reports */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <FileText size={20} className="text-stone-500" /> <span>Lab Reports {village !== 'All' && `(${village})`}</span>
              </h3>
              <button 
                onClick={() => setShowAddReportModal(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors"
                title="Add Report"
              >
                <PlusCircle size={20} />
              </button>
            </div>
            <div className="space-y-3">
              {filteredReports.length === 0 ? (
                <p className="text-stone-500 italic">No reports found for {village}.</p>
              ) : (
                filteredReports.map(report => (
                  <div key={report.id} className="p-3 border border-stone-100 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors flex items-center justify-between group cursor-pointer">
                  <div>
                    <div className="text-sm font-bold text-stone-800 truncate notranslate">{report.title}</div>
                    <div className="text-xs text-stone-500 mt-1">{report.date} • <span className="notranslate">{report.doctor}</span></div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDownloadReport(report); }}
                    className="text-stone-400 group-hover:text-blue-600 transition-colors"
                    title="Download Report"
                  >
                    <Download size={18} />
                  </button>
                </div>
              )))}
            </div>
          </div>

          {/* Health Records */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <Activity size={20} className="text-stone-500" /> <span>Symptom History</span>
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-stone-500 italic">Recent symptom checks are saved here automatically.</p>
              <div className="space-y-3 mt-4">
                <div className="p-3 border border-stone-100 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer">
                  <div className="text-xs text-stone-400 mb-1">Today</div>
                  <div className="text-sm font-medium text-stone-800 truncate">Fever and headache check</div>
                </div>
                <div className="p-3 border border-stone-100 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer">
                  <div className="text-xs text-stone-400 mb-1">Yesterday</div>
                  <div className="text-sm font-medium text-stone-800 truncate">Skin rash consultation</div>
                </div>
                <div className="p-3 border border-stone-100 rounded-lg bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer">
                  <div className="text-xs text-stone-400 mb-1">Last Week</div>
                  <div className="text-sm font-medium text-stone-800 truncate">Routine health checkup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-stone-100">
              <h3 className="text-xl font-bold text-stone-900">Book Appointment</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-stone-400 hover:text-stone-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleBookAppointment} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Select Doctor</label>
                <select 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border bg-white"
                  value={bookingData.doctor}
                  onChange={(e) => setBookingData({...bookingData, doctor: e.target.value})}
                >
                  <option>Dr. Sarah Smith (General Physician)</option>
                  <option>Dr. Anil Kumar (Pediatrician)</option>
                  <option>Dr. Priya Sharma (Dermatologist)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Time</label>
                <select 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border bg-white"
                  value={bookingData.time}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                >
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:30 AM</option>
                  <option>02:00 PM</option>
                  <option>04:30 PM</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Report Modal */}
      {showAddReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-stone-100">
              <h3 className="text-xl font-bold text-stone-900">Add Lab Report</h3>
              <button 
                onClick={() => setShowAddReportModal(false)}
                className="text-stone-400 hover:text-stone-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddReport} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Report Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Blood Test Results"
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  value={newReportData.title}
                  onChange={(e) => setNewReportData({...newReportData, title: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  value={newReportData.date}
                  onChange={(e) => setNewReportData({...newReportData, date: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Doctor / Lab Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g., Dr. Smith or City Lab"
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  value={newReportData.doctor}
                  onChange={(e) => setNewReportData({...newReportData, doctor: e.target.value})}
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Upload Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

