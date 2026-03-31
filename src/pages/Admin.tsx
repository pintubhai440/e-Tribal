import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs, deleteDoc, doc, query, orderBy, addDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext, VillageContext } from '../App';
import { Shield, ShoppingBag, Activity, BookOpen, Trash2, Users, AlertCircle, Edit, Plus, Download } from 'lucide-react';

export default function Admin() {
  const { user } = useContext(AuthContext);
  const { village } = useContext(VillageContext);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'commerce' | 'health' | 'learning' | 'registrations'>('dashboard');
  
  // Data states
  const [products, setProducts] = useState<any[]>([]);
  const [healthRecords, setHealthRecords] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modals state
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<any>(null);
  const [courseFormData, setCourseFormData] = useState({ 
    title: '', 
    description: '', 
    thumbnailUrl: '', 
    videoUrl: '', 
    instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
    village: 'Kondakarakam'
  });

  useEffect(() => {
    if (!user) return;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch Products
        let productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        if (village !== 'All') {
          productsQuery = query(collection(db, 'products'), where('village', '==', village), orderBy('createdAt', 'desc'));
        }
        const productsSnapshot = await getDocs(productsQuery);
        const productsData = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Automatic Seeding if empty and user is admin
        if (productsData.length === 0 && user && village === 'All') {
          console.log("Database empty, seeding initial products...");
          const initialProducts = [
            { name: 'Hand-woven Savara Shawl', price: 1200, description: 'Traditional shawl with unique geometric patterns from Srikakulam.', imageUrl: 'https://picsum.photos/seed/shawl/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Kondakarakam' },
            { name: 'Araku Valley Organic Coffee', price: 450, description: 'Premium organic coffee beans harvested by local farmers in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/coffee/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Patha Rega' },
            { name: 'Bamboo Storage Baskets', price: 350, description: 'Eco-friendly and durable baskets handcrafted in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/basket/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Kondakarakam' },
            { name: 'Tribal Beaded Jewelry', price: 200, description: 'Colorful and authentic beaded necklaces made by Savara women.', imageUrl: 'https://picsum.photos/seed/jewelry/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Patha Rega' },
            { name: 'Wild Hill Honey', price: 300, description: 'Pure, wild honey collected from the hills of Paderu.', imageUrl: 'https://picsum.photos/seed/honey/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Kondakarakam' },
            { name: 'Traditional Clay Cookware', price: 550, description: 'Hand-molded clay pots for authentic tribal cooking from Vizianagaram.', imageUrl: 'https://picsum.photos/seed/clay/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Patha Rega' },
            { name: 'Organic Long Pepper', price: 150, description: 'Rare spice harvested from the tribal agency areas of Srikakulam.', imageUrl: 'https://picsum.photos/seed/pepper/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Kondakarakam' },
            { name: 'Tribal Wall Art (Savara)', price: 2500, description: 'Authentic wall painting on canvas depicting tribal life in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/art/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Patha Rega' },
            { name: 'Hand-carved Wooden Spoons', price: 180, description: 'Kitchen utensils carved from local sustainable wood in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/wood/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Kondakarakam' },
            { name: 'Natural Dye Cotton Fabric', price: 800, description: 'Hand-spun cotton fabric dyed with natural extracts from Srikakulam.', imageUrl: 'https://picsum.photos/seed/fabric/400/400', sellerId: user?.uid, createdAt: new Date().toISOString(), village: 'Patha Rega' },
          ];

          for (const product of initialProducts) {
            await addDoc(collection(db, 'products'), product);
          }
          
          // Re-fetch after seeding
          const refreshedSnapshot = await getDocs(productsQuery);
          setProducts(refreshedSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else if (productsData.length === 0) {
          // Fallback for non-admin or if seeding is skipped
          const fallbackProducts = [
            { id: 'p1', name: 'Hand-woven Savara Shawl', price: 1200, description: 'Traditional shawl with unique geometric patterns from Srikakulam.', imageUrl: 'https://picsum.photos/seed/shawl/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Kondakarakam' },
            { id: 'p2', name: 'Araku Valley Organic Coffee', price: 450, description: 'Premium organic coffee beans harvested by local farmers in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/coffee/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Patha Rega' },
            { id: 'p3', name: 'Bamboo Storage Baskets', price: 350, description: 'Eco-friendly and durable baskets handcrafted in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/basket/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Kondakarakam' },
            { id: 'p4', name: 'Tribal Beaded Jewelry', price: 200, description: 'Colorful and authentic beaded necklaces made by Savara women.', imageUrl: 'https://picsum.photos/seed/jewelry/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Patha Rega' },
            { id: 'p5', name: 'Wild Hill Honey', price: 300, description: 'Pure, wild honey collected from the hills of Paderu.', imageUrl: 'https://picsum.photos/seed/honey/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Kondakarakam' },
            { id: 'p6', name: 'Traditional Clay Cookware', price: 550, description: 'Hand-molded clay pots for authentic tribal cooking from Vizianagaram.', imageUrl: 'https://picsum.photos/seed/clay/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Patha Rega' },
            { id: 'p7', name: 'Organic Long Pepper', price: 150, description: 'Rare spice harvested from the tribal agency areas of Srikakulam.', imageUrl: 'https://picsum.photos/seed/pepper/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Kondakarakam' },
            { id: 'p8', name: 'Tribal Wall Art (Savara)', price: 2500, description: 'Authentic wall painting on canvas depicting tribal life in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/art/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Patha Rega' },
            { id: 'p9', name: 'Hand-carved Wooden Spoons', price: 180, description: 'Kitchen utensils carved from local sustainable wood in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/wood/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Kondakarakam' },
            { id: 'p10', name: 'Natural Dye Cotton Fabric', price: 800, description: 'Hand-spun cotton fabric dyed with natural extracts from Srikakulam.', imageUrl: 'https://picsum.photos/seed/fabric/400/400', createdAt: new Date().toISOString(), isFallback: true, village: 'Patha Rega' },
          ];
          setProducts(village === 'All' ? fallbackProducts : fallbackProducts.filter(p => p.village === village));
        } else {
          setProducts(productsData);
        }

        // Fetch Health Records
        let healthQuery = query(collection(db, 'health_records'), orderBy('createdAt', 'desc'));
        if (village !== 'All') {
          healthQuery = query(collection(db, 'health_records'), where('village', '==', village), orderBy('createdAt', 'desc'));
        }
        const healthSnapshot = await getDocs(healthQuery);
        setHealthRecords(healthSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch Courses
        let coursesQuery = query(collection(db, 'courses'));
        if (village !== 'All') {
          coursesQuery = query(collection(db, 'courses'), where('village', '==', village));
        }
        const coursesSnapshot = await getDocs(coursesQuery);
        setCourses(coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch Registrations
        const registrationsQuery = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
        const registrationsSnapshot = await getDocs(registrationsQuery);
        let fetchedRegistrations = registrationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as any[];
        
        if (village !== 'All') {
          if (village === 'Kondakarakam') {
            // Show Kondakarakam, Tribal Colony Kondakarakam, and any legacy records with missing/empty village
            fetchedRegistrations = fetchedRegistrations.filter(r => 
              !r.village || 
              r.village === '-' || 
              r.village === '' || 
              r.village === 'Kondakarakam' || 
              r.village === 'Tribal Colony Kondakarakam'
            );
          } else if (village === 'Patha Rega') {
            fetchedRegistrations = fetchedRegistrations.filter(r => 
              r.village === 'Patha Rega' || 
              r.village === 'Tribal colony Path rega' ||
              r.village === 'Tribal Colony Patha Rega'
            );
          } else {
            fetchedRegistrations = fetchedRegistrations.filter(r => r.village === village);
          }
        }
        setRegistrations(fetchedRegistrations);
        
      } catch (err: any) {
        console.error("Error fetching admin data:", err);
        if (err.message && err.message.includes('Missing or insufficient permissions')) {
          setError("You do not have administrator privileges to view this data.");
        } else {
          setError("Failed to load admin data. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, village]);

  const handleSeedProducts = async () => {
    if (!window.confirm('This will add 20 initial tribal products to the marketplace. Continue?')) return;
    setLoading(true);
    try {
      const initialProducts = [
        // Kondakarakam Products (10)
        { name: 'Hand-woven Savara Shawl', price: 1200, description: 'Traditional shawl with unique geometric patterns from Srikakulam.', imageUrl: 'https://picsum.photos/seed/shawl/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Bamboo Storage Baskets', price: 350, description: 'Eco-friendly and durable baskets handcrafted in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/basket/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Wild Hill Honey', price: 300, description: 'Pure, wild honey collected from the hills of Paderu.', imageUrl: 'https://picsum.photos/seed/honey/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Organic Long Pepper', price: 150, description: 'Rare spice harvested from the tribal agency areas of Srikakulam.', imageUrl: 'https://picsum.photos/seed/pepper/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Hand-carved Wooden Spoons', price: 180, description: 'Kitchen utensils carved from local sustainable wood in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/wood/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Organic Turmeric Powder', price: 250, description: 'High curcumin turmeric grown naturally in the agency tracts.', imageUrl: 'https://picsum.photos/seed/turmeric/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Terracotta Cooking Pots', price: 400, description: 'Traditional clay cookware for authentic tribal recipes.', imageUrl: 'https://picsum.photos/seed/terracotta/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Forest Tamarind', price: 120, description: 'Deseeded natural tamarind collected from deep forest areas.', imageUrl: 'https://picsum.photos/seed/tamarind/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Medicinal Aloe Vera Soap', price: 80, description: 'Handmade tribal soap using forest aloe vera and natural oils.', imageUrl: 'https://picsum.photos/seed/soap/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Dried Amla (Gooseberry)', price: 200, description: 'Sun-dried wild amla, rich in Vitamin C and antioxidants.', imageUrl: 'https://picsum.photos/seed/amla/400/400', village: 'Kondakarakam', sellerId: user?.uid, createdAt: new Date().toISOString() },
        
        // Patha Rega Products (10)
        { name: 'Araku Valley Organic Coffee', price: 450, description: 'Premium organic coffee beans harvested by local farmers in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/coffee/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Tribal Beaded Jewelry', price: 200, description: 'Colorful and authentic beaded necklaces made by Savara women.', imageUrl: 'https://picsum.photos/seed/jewelry/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Traditional Clay Cookware', price: 550, description: 'Hand-molded clay pots for authentic tribal cooking from Vizianagaram.', imageUrl: 'https://picsum.photos/seed/clay/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Tribal Wall Art (Savara)', price: 2500, description: 'Authentic wall painting on canvas depicting tribal life in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/art/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Natural Dye Cotton Fabric', price: 800, description: 'Hand-spun cotton fabric dyed with natural extracts from Srikakulam.', imageUrl: 'https://picsum.photos/seed/fabric/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Organic Black Pepper', price: 600, description: 'Locally grown, sun-dried black pepper from the Araku hills.', imageUrl: 'https://picsum.photos/seed/blackpepper/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Organic Finger Millet (Ragi)', price: 90, description: 'Nutritious local grain cultivated using traditional farming methods.', imageUrl: 'https://picsum.photos/seed/ragi/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Forest Beeswax Candles', price: 150, description: 'Natural lighting made from pure forest beeswax.', imageUrl: 'https://picsum.photos/seed/beeswax/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Tribal Silver Anklets', price: 3500, description: 'Traditional heavy silver anklets worn by tribal women.', imageUrl: 'https://picsum.photos/seed/silver/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
        { name: 'Woven Palm Leaf Mats', price: 250, description: 'Traditional floor mats woven from dried palm leaves.', imageUrl: 'https://picsum.photos/seed/mat/400/400', village: 'Patha Rega', sellerId: user?.uid, createdAt: new Date().toISOString() },
      ];

      for (const product of initialProducts) {
        await addDoc(collection(db, 'products'), product);
      }
      
      // Refresh products list
      const productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
      const productsSnapshot = await getDocs(productsQuery);
      setProducts(productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      
      alert("Marketplace seeded successfully!");
    } catch (error) {
      console.error("Error seeding products:", error);
      alert("Failed to seed products.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await deleteDoc(doc(db, 'products', productId));
      setProducts(products.filter(p => p.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  const handleDeleteHealthRecord = async (recordId: string) => {
    if (!window.confirm('Are you sure you want to delete this health record?')) return;
    try {
      await deleteDoc(doc(db, 'health_records', recordId));
      setHealthRecords(healthRecords.filter(r => r.id !== recordId));
    } catch (error) {
      console.error("Error deleting health record:", error);
      alert("Failed to delete health record.");
    }
  };

  const handleSaveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const courseData = {
        title: courseFormData.title,
        description: courseFormData.description,
        thumbnailUrl: courseFormData.thumbnailUrl,
        instructorSignatureUrl: courseFormData.instructorSignatureUrl,
        category: 'General',
        village: courseFormData.village,
        modules: [
          { id: 'm1', title: 'Main Module', videoUrl: courseFormData.videoUrl, duration: '10:00' }
        ],
        quiz: { questions: [] }
      };

      if (editingCourse) {
        await updateDoc(doc(db, 'courses', editingCourse.id), courseData);
        setCourses(courses.map(c => c.id === editingCourse.id ? { ...c, ...courseData } : c));
      } else {
        const docRef = await addDoc(collection(db, 'courses'), courseData);
        setCourses([...courses, { id: docRef.id, ...courseData }]);
      }
      setShowCourseModal(false);
      setEditingCourse(null);
      setCourseFormData({ 
        title: '', 
        description: '', 
        thumbnailUrl: '', 
        videoUrl: '', 
        instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
        village: 'Kondakarakam'
      });
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Failed to save course.");
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteDoc(doc(db, 'courses', courseId));
      setCourses(courses.filter(c => c.id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course.");
    }
  };

  const handleDeleteRegistration = async (regId: string) => {
    if (!window.confirm('Are you sure you want to delete this registration?')) return;
    try {
      await deleteDoc(doc(db, 'registrations', regId));
      setRegistrations(registrations.filter(r => r.id !== regId));
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("Failed to delete registration.");
    }
  };

  const exportRegistrationsToCSV = () => {
    if (registrations.length === 0) return;
    
    const headers = ['Date', 'Name', 'Village', 'Son of Father', 'Address', 'Mobile Number', 'Aadhar Number', 'Email', 'Status'];
    const csvContent = [
      headers.join(','),
      ...registrations.map(reg => {
        return [
          new Date(reg.createdAt).toLocaleDateString(),
          `"${reg.name || ''}"`,
          `"${reg.village || ''}"`,
          `"${reg.sonOfFather || ''}"`,
          `"${reg.address || ''}"`,
          `"${reg.mobileNumber || ''}"`,
          `"${reg.aadharNumber || ''}"`,
          `"${reg.email || ''}"`,
          `"${reg.status || ''}"`
        ].join(',');
      })
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const importBatch = async () => {
    const newData = [
      { name: "Yaswanth Moida", sonOfFather: "Ramana", mobileNumber: "9121006475", aadharNumber: "552722460347" },
      { name: "Rohit Moida", sonOfFather: "Ramana", mobileNumber: "9121006475", aadharNumber: "933571005041" },
      { name: "Ramalaxhmi Moida", sonOfFather: "Ramu", mobileNumber: "9121006475", aadharNumber: "934434143052" },
      { name: "Ramana Moida", sonOfFather: "Satyam", mobileNumber: "9121006475", aadharNumber: "481639580090" },
      { name: "Tejeswani Laveti", sonOfFather: "chandrasekhar", mobileNumber: "9100212068", aadharNumber: "536297583836" },
      { name: "Dhanush laveti", sonOfFather: "chandrasekhar", mobileNumber: "9100212068", aadharNumber: "869832982088" },
      { name: "Narasamma chodipilli", sonOfFather: "Raja rao", mobileNumber: "9491447252", aadharNumber: "863568931008" },
      { name: "Raja Rao chodipilli", sonOfFather: "Guruvulu", mobileNumber: "9491447252", aadharNumber: "483269042341" },
      { name: "Nukalamma Somula", sonOfFather: "Appili", mobileNumber: "8374249211", aadharNumber: "322249410480" },
      { name: "Seethamma Naidapu", sonOfFather: "Ramu", mobileNumber: "7993311190", aadharNumber: "979149010359" },
      { name: "Latchanna Naidapu", sonOfFather: "Ramana dora", mobileNumber: "7993311190", aadharNumber: "470816306108" },
      { name: "Sankar Lakkidapu", sonOfFather: "Latchanna", mobileNumber: "7893423229", aadharNumber: "667200360527" },
      { name: "Paiduraju kuda", sonOfFather: "adviya", mobileNumber: "", aadharNumber: "568472112808" },
      { name: "Paiduraju Kotaparti", sonOfFather: "Bangarayya", mobileNumber: "9542876321", aadharNumber: "786148312061" },
      { name: "Pydirahu Lakidapu", sonOfFather: "Pentaya", mobileNumber: "9490241665", aadharNumber: "690751315088" },
      { name: "Kantamma Lakidapu", sonOfFather: "Simhachalam", mobileNumber: "9392067901", aadharNumber: "611595864136" },
      { name: "Yamini Lakidapu", sonOfFather: "Potayya", mobileNumber: "9392067901", aadharNumber: "570618355328" },
      { name: "Potayya Lakidapu", sonOfFather: "Parsayya", mobileNumber: "9392067901", aadharNumber: "422696719196" },
      { name: "parsayya Lakidapu", sonOfFather: "Potayya", mobileNumber: "9392067901", aadharNumber: "963138563854" },
      { name: "Chinapyditalli Lakidapu", sonOfFather: "Ramaswamy", mobileNumber: "", aadharNumber: "607096560893" },
      { name: "Chinamma Lakidapu", sonOfFather: "Appanna", mobileNumber: "", aadharNumber: "647629278276" },
      { name: "Kondamma Lakidapu", sonOfFather: "Paidithalli", mobileNumber: "8688807035", aadharNumber: "366314175361" },
      { name: "Satyanarayana Lakidapu", sonOfFather: "Yerraya", mobileNumber: "8688807035", aadharNumber: "440280716003" },
      { name: "Rammya Mapadana", sonOfFather: "veeraraju", mobileNumber: "7207111819", aadharNumber: "678602933558" },
      { name: "Vaarshika Lakidapu", sonOfFather: "Satyanarayan", mobileNumber: "7207111819", aadharNumber: "641613908148" },
      { name: "Chinnamma Tatipoodi", sonOfFather: "Ramulu", mobileNumber: "7093161433", aadharNumber: "241265461953" },
      { name: "Lakshmi Manchala", sonOfFather: "Suryarao", mobileNumber: "7093161433", aadharNumber: "250530192563" },
      { name: "Santhi Manchala", sonOfFather: "ramulu", mobileNumber: "9398851758", aadharNumber: "842248938142" },
      { name: "Surya rao manchala", sonOfFather: "ramuluapadu", mobileNumber: "9398851758", aadharNumber: "941828330793" },
      { name: "Prasad Manchala", sonOfFather: "Lakshamman rao", mobileNumber: "7386015033", aadharNumber: "554392602183" },
      { name: "Krishna Manchala", sonOfFather: "Seetharam", mobileNumber: "7386015033", aadharNumber: "366122673306" },
      { name: "Lasya Manchala", sonOfFather: "Krishna", mobileNumber: "7386015033", aadharNumber: "587871388012" },
      { name: "Sravani Manchala", sonOfFather: "bangarappadu", mobileNumber: "7386015033", aadharNumber: "709440411471" },
      { name: "Atchanna Thatipudi", sonOfFather: "ganganna dora", mobileNumber: "9959388136", aadharNumber: "749675625011" },
      { name: "Ganganna dora thatipudi", sonOfFather: "atchhanna", mobileNumber: "7801043986", aadharNumber: "840360856280" },
      { name: "Suramma Thatipudi", sonOfFather: "pudidora", mobileNumber: "7801043986", aadharNumber: "436039970316" }
    ];

    setLoading(true);
    try {
      // Get existing registrations to check for duplicates
      const existingSnapshot = await getDocs(collection(db, 'registrations'));
      const existingDocsByAadhar = new Map();
      const existingDocsByNameAndFather = new Map();
      
      existingSnapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.aadharNumber) {
          existingDocsByAadhar.set(data.aadharNumber, doc.id);
        }
        if (data.name && data.sonOfFather) {
          existingDocsByNameAndFather.set(`${data.name.toLowerCase().trim()}_${data.sonOfFather.toLowerCase().trim()}`, doc.id);
        }
      });
      
      let addedCount = 0;
      let updatedCount = 0;
      
      for (const item of newData) {
        let docId = null;
        
        if (item.aadharNumber && existingDocsByAadhar.has(item.aadharNumber)) {
          docId = existingDocsByAadhar.get(item.aadharNumber);
        } else if (!item.aadharNumber && existingDocsByNameAndFather.has(`${item.name.toLowerCase().trim()}_${item.sonOfFather.toLowerCase().trim()}`)) {
          docId = existingDocsByNameAndFather.get(`${item.name.toLowerCase().trim()}_${item.sonOfFather.toLowerCase().trim()}`);
        }

        if (docId) {
          // If it exists, update it to fix any corrupted data (like wrong village/date)
          await updateDoc(doc(db, 'registrations', docId), {
            name: item.name,
            sonOfFather: item.sonOfFather,
            address: "Tribal colony Path rega",
            mobileNumber: item.mobileNumber,
            village: "Tribal colony Path rega",
            createdAt: "2026-03-27T10:00:00Z"
          });
          updatedCount++;
        } else {
          // Add new record
          await addDoc(collection(db, 'registrations'), {
            name: item.name,
            sonOfFather: item.sonOfFather,
            address: "Tribal colony Path rega",
            mobileNumber: item.mobileNumber,
            aadharNumber: item.aadharNumber,
            email: "",
            status: "pending",
            village: "Tribal colony Path rega",
            createdAt: "2026-03-27T10:00:00Z"
          });
          addedCount++;
        }
      }
      
      alert(`Batch processed successfully! Added ${addedCount} new records, updated ${updatedCount} existing records.`);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Error importing batch");
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <Shield className="text-red-700" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Admin Access Required</h2>
        <p className="text-stone-600 max-w-md">
          Please sign in to access the administrator panel.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <AlertCircle className="text-red-700" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Access Denied</h2>
        <p className="text-stone-600 max-w-md">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-stone-900 flex items-center gap-3">
          <Shield className="text-emerald-700" size={32} />
          Admin Dashboard
        </h1>
        <p className="text-stone-500 mt-1">Manage <span className="notranslate">e-Tribal</span> platform content and records.</p>
      </div>

      {/* Admin Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-4">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
            activeTab === 'dashboard' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <Activity size={18} /> <span>Overview</span>
        </button>
        <button
          onClick={() => setActiveTab('commerce')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
            activeTab === 'commerce' ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <ShoppingBag size={18} /> <span>E-Commerce</span>
        </button>
        <button
          onClick={() => setActiveTab('health')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
            activeTab === 'health' ? 'bg-rose-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <Activity size={18} /> <span>Health Records</span>
        </button>
        <button
          onClick={() => setActiveTab('learning')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
            activeTab === 'learning' ? 'bg-blue-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <BookOpen size={18} /> <span>Learning</span>
        </button>
        <button
          onClick={() => setActiveTab('registrations')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
            activeTab === 'registrations' ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <Users size={18} /> <span>Registrations</span>
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-stone-500">Loading admin data...</div>
      ) : (
        <div className="mt-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="bg-amber-100 p-4 rounded-xl text-amber-700">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Products</p>
                  <p className="text-3xl font-bold text-stone-900">{products.length}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="bg-rose-100 p-4 rounded-xl text-rose-700">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Health</p>
                  <p className="text-3xl font-bold text-stone-900">{healthRecords.length}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-xl text-blue-700">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Courses</p>
                  <p className="text-3xl font-bold text-stone-900">{courses.length}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="bg-emerald-100 p-4 rounded-xl text-emerald-700">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Registrations</p>
                  <p className="text-3xl font-bold text-stone-900">{registrations.length}</p>
                </div>
              </div>
            </div>
          )}

          {/* Commerce Tab */}
          {activeTab === 'commerce' && (
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-stone-900">Manage Products</h2>
                <button 
                  onClick={handleSeedProducts}
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 flex items-center gap-2"
                >
                  <Plus size={18} /> <span>Seed Marketplace</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 text-stone-500 text-sm uppercase tracking-wider">
                      <th className="p-4 font-medium">Product</th>
                      <th className="p-4 font-medium">Village</th>
                      <th className="p-4 font-medium">Price</th>
                      <th className="p-4 font-medium">Seller ID</th>
                      <th className="p-4 font-medium">Date Listed</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {products.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-stone-500">No products found.</td>
                      </tr>
                    ) : (
                      products.map(product => (
                        <tr key={product.id} className="hover:bg-stone-50 transition-colors">
                          <td className="p-4 flex items-center gap-3">
                            <img src={product.imageUrl || `https://picsum.photos/seed/${product.id}/100/100`} alt={product.name} className="w-10 h-10 rounded object-cover" referrerPolicy="no-referrer" />
                            <div className="flex flex-col">
                              <span className="font-medium text-stone-900">{product.name}</span>
                              {product.isFallback && (
                                <span className="text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider w-fit mt-1">
                                  Mock Data
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="p-4 text-stone-600 notranslate">{product.village || '-'}</td>
                          <td className="p-4 text-stone-600">₹{product.price}</td>
                          <td className="p-4 text-stone-500 text-sm truncate max-w-[150px]">{product.sellerId || 'System Fallback'}</td>
                          <td className="p-4 text-stone-500 text-sm">{new Date(product.createdAt).toLocaleDateString()}</td>
                          <td className="p-4 text-right">
                            <button 
                              onClick={() => {
                                if (product.isFallback) {
                                  alert("This is a fallback product. Use 'Seed Marketplace' to add real products to the database that you can manage.");
                                  return;
                                }
                                handleDeleteProduct(product.id);
                              }}
                              className={`p-2 rounded-lg transition-colors ${product.isFallback ? 'text-stone-300 cursor-not-allowed' : 'text-red-500 hover:bg-red-50'}`}
                              title={product.isFallback ? "Cannot delete fallback product" : "Delete Product"}
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Health Tab */}
          {activeTab === 'health' && (
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-stone-900">Health Records (AI Symptom Checks)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 text-stone-500 text-sm uppercase tracking-wider">
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">User ID</th>
                      <th className="p-4 font-medium">Village</th>
                      <th className="p-4 font-medium">Reported Symptoms</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {healthRecords.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-stone-500">No health records found.</td>
                      </tr>
                    ) : (
                      healthRecords.map(record => (
                        <tr key={record.id} className="hover:bg-stone-50 transition-colors">
                          <td className="p-4 text-stone-500 text-sm whitespace-nowrap">{new Date(record.createdAt).toLocaleDateString()}</td>
                          <td className="p-4 text-stone-500 text-sm truncate max-w-[100px]">{record.userId}</td>
                          <td className="p-4 text-stone-600 notranslate">{record.village || '-'}</td>
                          <td className="p-4">
                            <p className="text-stone-900 font-medium line-clamp-1">{record.symptoms}</p>
                            <p className="text-stone-500 text-xs line-clamp-1 mt-1">{record.aiDiagnosis}</p>
                          </td>
                          <td className="p-4 text-right">
                            <button 
                              onClick={() => handleDeleteHealthRecord(record.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Learning Tab */}
          {activeTab === 'learning' && (
            <div className="space-y-8">
              {/* Courses Section */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-stone-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-stone-900">Manage Courses</h2>
                  <button 
                    onClick={() => {
                      setEditingCourse(null);
                      setCourseFormData({ 
                        title: '', 
                        description: '', 
                        thumbnailUrl: '', 
                        videoUrl: '', 
                        instructorSignatureUrl: 'https://lh3.googleusercontent.com/d/1yac9x_xMYwsIoBPdLkiKxA5lVZLmCe7_',
                        village: village === 'All' ? 'Kondakarakam' : village
                      });
                      setShowCourseModal(true);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Plus size={18} /> <span>Add Course</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-stone-50 text-stone-500 text-sm uppercase tracking-wider">
                        <th className="p-4 font-medium">Course</th>
                        <th className="p-4 font-medium">Village</th>
                        <th className="p-4 font-medium">Video Link</th>
                        <th className="p-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {courses.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-stone-500">No courses found. Add one to get started.</td>
                        </tr>
                      ) : (
                        courses.map(course => (
                          <tr key={course.id} className="hover:bg-stone-50 transition-colors">
                            <td className="p-4 flex items-center gap-3">
                              <img src={course.thumbnailUrl || `https://picsum.photos/seed/${course.id}/100/100`} alt={course.title} className="w-16 h-10 rounded object-cover" referrerPolicy="no-referrer" />
                              <div>
                                <span className="font-medium text-stone-900 block">{course.title}</span>
                                <span className="text-xs text-stone-500 line-clamp-1 max-w-xs">{course.description}</span>
                              </div>
                            </td>
                            <td className="p-4 text-stone-600 notranslate">{course.village || '-'}</td>
                            <td className="p-4 text-stone-500 text-sm truncate max-w-[200px]">
                              {course.modules?.[0]?.videoUrl || 'No video'}
                            </td>
                            <td className="p-4 text-right">
                              <button 
                                onClick={() => {
                                  setEditingCourse(course);
                                  setCourseFormData({
                                    title: course.title,
                                    description: course.description,
                                    thumbnailUrl: course.thumbnailUrl,
                                    videoUrl: course.modules?.[0]?.videoUrl || '',
                                    instructorSignatureUrl: course.instructorSignatureUrl || '',
                                    village: course.village || 'Kondakarakam'
                                  });
                                  setShowCourseModal(true);
                                }}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2"
                                title="Edit Course"
                              >
                                <Edit size={18} />
                              </button>
                              <button 
                                onClick={() => handleDeleteCourse(course.id)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete Course"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* Registrations Tab */}
          {activeTab === 'registrations' && (
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-stone-900">Member Registrations</h2>
                <div className="flex gap-2">
                  <button
                    onClick={importBatch}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Plus size={18} />
                    Import Batch
                  </button>
                  <button
                    onClick={exportRegistrationsToCSV}
                    disabled={registrations.length === 0}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download size={18} />
                    Export CSV
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 text-stone-500 text-sm uppercase tracking-wider">
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Name</th>
                      <th className="p-4 font-medium">Village</th>
                      <th className="p-4 font-medium">Son of</th>
                      <th className="p-4 font-medium">Mobile</th>
                      <th className="p-4 font-medium">Aadhar</th>
                      <th className="p-4 font-medium">Email</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {registrations.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-stone-500">No registrations found.</td>
                      </tr>
                    ) : (
                      registrations.map(reg => (
                        <tr key={reg.id} className="hover:bg-stone-50 transition-colors">
                          <td className="p-4 text-stone-500 text-sm whitespace-nowrap">{new Date(reg.createdAt).toLocaleDateString()}</td>
                          <td className="p-4 font-medium text-stone-900 notranslate">{reg.name}</td>
                          <td className="p-4 text-stone-600 notranslate">{reg.village || '-'}</td>
                          <td className="p-4 text-stone-600 notranslate">{reg.sonOfFather}</td>
                          <td className="p-4 text-stone-600">{reg.mobileNumber}</td>
                          <td className="p-4 text-stone-600 font-mono text-xs">{reg.aadharNumber}</td>
                          <td className="p-4 text-stone-500 text-sm">{reg.email || '-'}</td>
                          <td className="p-4 text-right">
                            <button 
                              onClick={() => handleDeleteRegistration(reg.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Registration"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Course Modal */}
      {showCourseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-stone-900">{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
              <button onClick={() => setShowCourseModal(false)} className="text-stone-400 hover:text-stone-600">
                <AlertCircle size={24} /> {/* Using AlertCircle as close icon placeholder if X is not imported, wait let's just use text */}
                Close
              </button>
            </div>
            <form onSubmit={handleSaveCourse} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Course Title</label>
                <input 
                  type="text" required
                  className="w-full rounded-xl border-stone-300 shadow-sm p-3 border"
                  value={courseFormData.title}
                  onChange={e => setCourseFormData({...courseFormData, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Description</label>
                <textarea 
                  required rows={2}
                  className="w-full rounded-xl border-stone-300 shadow-sm p-3 border"
                  value={courseFormData.description}
                  onChange={e => setCourseFormData({...courseFormData, description: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Image URL (Thumbnail)</label>
                <input 
                  type="url" required
                  className="w-full rounded-xl border-stone-300 shadow-sm p-3 border"
                  value={courseFormData.thumbnailUrl}
                  onChange={e => setCourseFormData({...courseFormData, thumbnailUrl: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Video Link (Embed URL)</label>
                <input 
                  type="url" required
                  placeholder="https://www.youtube.com/embed/..."
                  className="w-full rounded-xl border-stone-300 shadow-sm p-3 border"
                  value={courseFormData.videoUrl}
                  onChange={e => setCourseFormData({...courseFormData, videoUrl: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Instructor Signature URL</label>
                <input 
                  type="url"
                  placeholder="URL to signature image"
                  className="w-full rounded-xl border-stone-300 shadow-sm p-3 border"
                  value={courseFormData.instructorSignatureUrl}
                  onChange={e => setCourseFormData({...courseFormData, instructorSignatureUrl: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Village</label>
                <select 
                  className="w-full rounded-xl border-stone-300 shadow-sm p-3 border bg-white"
                  value={courseFormData.village}
                  onChange={e => setCourseFormData({...courseFormData, village: e.target.value})}
                >
                  <option value="Kondakarakam">Kondakarakam</option>
                  <option value="Patha Rega">Patha Rega</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700">
                {editingCourse ? 'Update Course' : 'Create Course'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
