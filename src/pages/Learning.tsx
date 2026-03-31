import React, { useState, useEffect, useContext } from 'react';
import { AuthContext, VillageContext } from '../App';
import { PlayCircle, FileText, Award, Lock, CheckCircle, ChevronLeft, Download, Check } from 'lucide-react';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { MOCK_COURSES } from '../data/mockCourses';


type ViewState = 'list' | 'course' | 'quiz' | 'certificate';

export default function Learning() {
  const { user } = useContext(AuthContext);
  const { village } = useContext(VillageContext);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [courses, setCourses] = useState<any[]>(MOCK_COURSES);
  const [view, setView] = useState<ViewState>('list');
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        let fetchedCourses = [];
        if (!querySnapshot.empty) {
          fetchedCourses = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const mockCourse = MOCK_COURSES.find(c => c.id === doc.id || c.title === data.title);
            if (mockCourse) {
              data.thumbnailUrl = mockCourse.thumbnailUrl;
              if (data.modules && mockCourse.modules) {
                data.modules = data.modules.map((mod: any, index: number) => {
                  if (mockCourse.modules[index]) {
                    return { ...mod, videoUrl: mockCourse.modules[index].videoUrl };
                  }
                  return mod;
                });
              }
            }
            return { id: doc.id, ...data };
          });
        } else {
          fetchedCourses = MOCK_COURSES; // Fallback to mock data if Firestore is empty
        }
        
        
        if (village !== 'All') {
          fetchedCourses = fetchedCourses.filter(c => c.village === village);
        }
        if (selectedCategory !== 'All') {
          fetchedCourses = fetchedCourses.filter(c => c.category === selectedCategory);
        }
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        let fallbackCourses = MOCK_COURSES;
        
        if (village !== 'All') {
          fallbackCourses = fallbackCourses.filter(c => c.village === village);
        }
        if (selectedCategory !== 'All') {
          fallbackCourses = fallbackCourses.filter(c => c.category === selectedCategory);
        }
        setCourses(fallbackCourses);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [village, selectedCategory]);
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-emerald-100 p-4 rounded-full mb-4">
          <Lock className="text-emerald-700" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Sign in to access Learning</h2>
        <p className="text-stone-600 max-w-md">
          Please sign in using the button in the top right corner to access educational videos, quizzes, and certifications.
        </p>
      </div>
    );
  }

  const handleStartCourse = (course: any) => {
    setSelectedCourse(course);
    setActiveModuleIndex(0);
    setCompletedModules(new Set());
    setView('course');
  };

  const handleCompleteModule = () => {
    if (!selectedCourse || !selectedCourse.modules) return;
    
    const currentModule = selectedCourse.modules[activeModuleIndex];
    if (currentModule) {
      setCompletedModules(prev => new Set(prev).add(currentModule.id));
    }

    if (activeModuleIndex < selectedCourse.modules.length - 1) {
      setActiveModuleIndex(prev => prev + 1);
    }
  };

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setQuizScore(null);
    setView('quiz');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (!selectedCourse?.quiz?.questions) return;
    
    if (currentQuestionIndex < selectedCourse.quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate score
      let score = 0;
      selectedCourse.quiz.questions.forEach((q: any, i: number) => {
        if (selectedAnswers[i] === q.correctAnswerIndex) {
          score++;
        }
      });
      setQuizScore(score);
    }
  };

  const handleGenerateCertificate = () => {
    setView('certificate');
  };

  const renderList = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">Learning Module (LMS)</h1>
          <p className="text-stone-500 mt-1">Enhance your skills with local and modern knowledge{village !== 'All' ? ` in ${village}` : ''}.</p>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-hide">
        {['All', 'Culture', 'Skill', 'Dance', 'Technology', 'Business', 'Health'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      

      {loading ? (
        <div className="text-center py-12 text-stone-500">Loading courses...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video bg-stone-200 relative">
                <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                  <div className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {course.category || 'General'}
                  </div>
                  {course.village && (
                    <div className="bg-stone-800/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                      {course.village}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{course.title}</h3>
                <p className="text-stone-600 text-sm line-clamp-2 mb-4 flex-1">{course.description}</p>
                <div className="flex items-center text-sm text-stone-500 mb-4 space-x-4">
                  <span className="flex items-center"><PlayCircle size={16} className="mr-1"/> <span>{course.modules?.length || 0} Modules</span></span>
                  <span className="flex items-center"><FileText size={16} className="mr-1"/> <span>{course.quiz?.questions?.length ? '1 Quiz' : 'No Quiz'}</span></span>
                </div>
                <button 
                  onClick={() => handleStartCourse(course)}
                  className="w-full bg-emerald-50 text-emerald-700 font-semibold py-2 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCourse = () => {
    if (!selectedCourse) return null;
    const activeModule = selectedCourse.modules?.[activeModuleIndex];
    const allModulesCompleted = selectedCourse.modules?.every((m: any) => completedModules.has(m.id)) ?? true;

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <button onClick={() => setView('list')} className="flex items-center text-stone-500 hover:text-stone-900">
          <ChevronLeft size={20} className="mr-1" /> <span>Back to Courses</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-black rounded-2xl overflow-hidden aspect-video relative shadow-lg">
              {activeModule ? (
                <iframe 
                  src={activeModule.videoUrl} 
                  title={activeModule.title}
                  className="w-full h-full absolute top-0 left-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-stone-400">No video available</div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900">{activeModule?.title || 'Course Content'}</h2>
              <p className="text-stone-500 mt-1">Module {activeModuleIndex + 1} of {selectedCourse.modules?.length || 0}</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-stone-200">
              <button 
                onClick={() => setActiveModuleIndex(prev => Math.max(0, prev - 1))}
                disabled={activeModuleIndex === 0}
                className="px-4 py-2 text-stone-600 disabled:opacity-50 font-medium"
              >
                Previous
              </button>
              <button 
                onClick={handleCompleteModule}
                disabled={!activeModule}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 flex items-center disabled:opacity-50"
              >
                {activeModule && completedModules.has(activeModule.id) ? (
                  <><CheckCircle size={18} className="mr-2" /> <span>Completed</span></>
                ) : (
                  <span>Mark as Complete</span>
                )}
              </button>
            </div>
          </div>

          {/* Learning Path Sidebar */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm h-fit">
            <h3 className="font-bold text-lg text-stone-900 mb-4">Course Content</h3>
            <div className="space-y-2">
              {selectedCourse.modules?.map((module: any, index: number) => (
                <button 
                  key={module.id}
                  onClick={() => setActiveModuleIndex(index)}
                  className={`w-full text-left p-3 rounded-lg flex items-start transition-colors ${
                    activeModuleIndex === index ? 'bg-emerald-50 border border-emerald-200' : 'hover:bg-stone-50 border border-transparent'
                  }`}
                >
                  <div className="mt-0.5 mr-3">
                    {completedModules.has(module.id) ? (
                      <CheckCircle size={18} className="text-emerald-600" />
                    ) : (
                      <PlayCircle size={18} className={activeModuleIndex === index ? 'text-emerald-600' : 'text-stone-400'} />
                    )}
                  </div>
                  <div>
                    <div className={`font-medium text-sm ${activeModuleIndex === index ? 'text-emerald-900' : 'text-stone-700'}`}>
                      {index + 1}. {module.title}
                    </div>
                    <div className="text-xs text-stone-500 mt-1">{module.duration}</div>
                  </div>
                </button>
              ))}
              {(!selectedCourse.modules || selectedCourse.modules.length === 0) && (
                <div className="text-sm text-stone-500 italic p-2">No modules available yet.</div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-stone-200">
              <button 
                onClick={handleStartQuiz}
                disabled={!allModulesCompleted || !selectedCourse.quiz?.questions?.length}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center ${
                  allModulesCompleted && selectedCourse.quiz?.questions?.length
                    ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-md' 
                    : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                }`}
              >
                <FileText size={18} className="mr-2" />
                <span>Take Final Quiz</span>
              </button>
              {!allModulesCompleted && selectedCourse.quiz?.questions?.length > 0 && (
                <p className="text-xs text-center text-stone-500 mt-2">Complete all modules to unlock the quiz.</p>
              )}
              {(!selectedCourse.quiz || !selectedCourse.quiz.questions || selectedCourse.quiz.questions.length === 0) && (
                <p className="text-xs text-center text-stone-500 mt-2">No quiz available for this course.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (!selectedCourse) return null;

    if (quizScore !== null) {
      const passed = quizScore >= selectedCourse.quiz.questions.length / 2;
      return (
        <div className="max-w-2xl mx-auto text-center py-12 animate-in zoom-in duration-500">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
            {passed ? <Award size={48} /> : <FileText size={48} />}
          </div>
          <h2 className="text-3xl font-bold text-stone-900 mb-2">
            {passed ? 'Congratulations!' : 'Keep Trying!'}
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            You scored {quizScore} out of {selectedCourse.quiz.questions.length}.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setView('course')}
              className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg font-medium hover:bg-stone-50"
            >
              Back to Course
            </button>
            {passed ? (
              <button 
                onClick={handleGenerateCertificate}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 shadow-md flex items-center"
              >
                <Award size={20} className="mr-2" /> <span>Get Certificate</span>
              </button>
            ) : (
              <button 
                onClick={handleStartQuiz}
                className="px-6 py-3 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 shadow-md"
              >
                Retake Quiz
              </button>
            )}
          </div>
        </div>
      );
    }

    const question = selectedCourse.quiz.questions[currentQuestionIndex];

    return (
      <div className="max-w-3xl mx-auto py-8 animate-in fade-in duration-300">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-stone-900">Course Quiz</h2>
            <span className="text-stone-500 font-medium">Question {currentQuestionIndex + 1} of {selectedCourse.quiz.questions.length}</span>
          </div>
          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300" 
              style={{ width: `${((currentQuestionIndex) / selectedCourse.quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <h3 className="text-xl font-medium text-stone-900 mb-6">{question.text}</h3>
          
          <div className="space-y-3">
            {question.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center ${
                  selectedAnswers[currentQuestionIndex] === index 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-stone-200 hover:border-emerald-200 hover:bg-stone-50'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                  selectedAnswers[currentQuestionIndex] === index ? 'border-emerald-500 bg-emerald-500' : 'border-stone-300'
                }`}>
                  {selectedAnswers[currentQuestionIndex] === index && <Check size={14} className="text-white" />}
                </div>
                <span className={`font-medium ${selectedAnswers[currentQuestionIndex] === index ? 'text-emerald-900' : 'text-stone-700'}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="px-8 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestionIndex === selectedCourse.quiz.questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const renderCertificate = () => {
    if (!selectedCourse || !user) return null;

    const handleDownloadPdf = async () => {
      const element = document.getElementById('certificate-container');
      if (!element) {
        console.error('Certificate container element not found.');
        return;
      }
      
      setIsDownloading(true);
      try {
        // Ensure the element is visible and rendered
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const imgData = await htmlToImage.toPng(element, { 
          pixelRatio: 2,
          backgroundColor: '#ffffff',
          style: {
            transform: 'scale(1)',
            transformOrigin: 'top left'
          }
        });
        
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [element.offsetWidth, element.offsetHeight]
        });
        
        pdf.addImage(imgData, 'PNG', 0, 0, element.offsetWidth, element.offsetHeight);
        pdf.save(`${selectedCourse.title}-Certificate.pdf`);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate PDF. Please try again.');
      } finally {
        setIsDownloading(false);
      }
    };

    return (
      <div className="max-w-4xl mx-auto py-8 animate-in fade-in duration-500">
        <button onClick={() => setView('list')} className="flex items-center text-stone-500 hover:text-stone-900 mb-6">
          <ChevronLeft size={20} className="mr-1" /> Back to Courses
        </button>

        <div id="certificate-container" className="bg-white p-12 rounded-3xl border-8 border-double border-stone-200 shadow-xl relative overflow-hidden text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-50 rounded-br-full -z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-50 rounded-tl-full -z-10"></div>
          
          <Award size={64} className="mx-auto text-emerald-600 mb-6" />
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-2">Certificate of Completion</h1>
          <p className="text-lg text-stone-500 uppercase tracking-widest mb-12">This is to certify that</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 border-b-2 border-stone-200 pb-4 inline-block px-12 mb-12 notranslate">
            {user.displayName || user.email?.split('@')[0] || 'Student'}
          </h2>
          
          <p className="text-lg text-stone-600 mb-4">has successfully completed the course</p>
          <h3 className="text-2xl font-bold text-stone-900 mb-8">"{selectedCourse.title}"</h3>
          
          <p className="text-lg font-medium text-stone-700 mb-16 max-w-2xl mx-auto italic">
            Certification behalf of CTUAP in collaboration with State of AP
          </p>
          
          <div className="flex justify-between items-end px-12">
            <div className="text-left">
              <div className="border-b border-stone-400 w-40 mb-2"></div>
              <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Date</p>
              <p className="text-stone-900 font-bold">{new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg transform rotate-12">
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-1">Verified</div>
                <div className="font-serif text-xl notranslate">e-Tribal</div>
              </div>
            </div>
            
            <div className="text-right flex flex-col items-end">
              <div className="h-24 mb-2 flex items-end justify-end">
                {selectedCourse.instructorSignatureUrl ? (
                  <img 
                    src={selectedCourse.instructorSignatureUrl} 
                    alt="Instructor Signature" 
                    className="h-24 w-auto max-w-[200px] object-contain opacity-90"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="h-24 w-40 bg-stone-50 border border-dashed border-stone-200 rounded flex items-center justify-center text-stone-300 text-xs">
                    No Signature
                  </div>
                )}
              </div>
              <div className="border-b-2 border-stone-400 w-48 mb-2"></div>
              <p className="text-sm text-stone-500 font-medium uppercase tracking-wider w-full text-right">Instructor</p>
              <p className="text-stone-900 font-bold w-full text-right notranslate">e-Tribal Academy</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="px-8 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 shadow-md flex items-center disabled:opacity-70 disabled:cursor-not-allowed transition-all"
          >
            <Download size={20} className={`mr-2 ${isDownloading ? 'animate-bounce' : ''}`} /> 
            <span>{isDownloading ? 'Generating PDF...' : 'Download Certificate (PDF)'}</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pb-20">
      {view === 'list' && renderList()}
      {view === 'course' && renderCourse()}
      {view === 'quiz' && renderQuiz()}
      {view === 'certificate' && renderCertificate()}
    </div>
  );
}

