import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, addDoc, deleteDoc, doc, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { AuthContext, VillageContext } from '../App';
import { ShoppingBag, Plus, Search, MapPin, X, Trash2, CheckCircle } from 'lucide-react';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Commerce() {
  const { user } = useContext(AuthContext);
  const { village } = useContext(VillageContext);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', imageUrl: '', village: 'Kondakarakam' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purchasingProduct, setPurchasingProduct] = useState<any | null>(null);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to make a purchase.");
      return;
    }
    setIsPurchasing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseSuccess(true);
    }, 1500);
  };

  const handleListProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsSubmitting(true);
    try {
      const productData = {
        name: newProduct.name,
        description: newProduct.description,
        price: Number(newProduct.price),
        sellerId: user.uid,
        imageUrl: newProduct.imageUrl || `https://picsum.photos/seed/${Date.now()}/400/400`,
        village: newProduct.village,
        createdAt: new Date().toISOString()
      };
      const docRef = await addDoc(collection(db, 'products'), productData);
      
      if (village === 'All' || village === newProduct.village) {
        setProducts([{ id: docRef.id, ...productData }, ...products]);
      }
      
      setIsModalOpen(false);
      setNewProduct({ name: '', description: '', price: '', imageUrl: '', village: 'Kondakarakam' });
    } catch (error) {
      console.error("Error adding product: ", error);
      handleFirestoreError(error, OperationType.CREATE, 'products');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProduct = async () => {
    if (!productToDelete) return;
    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, 'products', productToDelete));
      setProducts(products.filter(p => p.id !== productToDelete));
      setProductToDelete(null);
    } catch (error) {
      console.error("Error deleting product: ", error);
      handleFirestoreError(error, OperationType.DELETE, `products/${productToDelete}`);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let q;
        if (village === 'All') {
          q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        } else {
          q = query(collection(db, 'products'), where('village', '==', village), orderBy('createdAt', 'desc'));
        }
        
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) }));
        
        const mockProducts = [
          // Kondakarakam Products (10)
          { id: 'p1', name: 'Hand-woven Savara Shawl', price: 1200, description: 'Traditional shawl with unique geometric patterns from Srikakulam.', imageUrl: 'https://picsum.photos/seed/shawl/400/400', village: 'Kondakarakam' },
          { id: 'p3', name: 'Bamboo Storage Baskets', price: 350, description: 'Eco-friendly and durable baskets handcrafted in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/basket/400/400', village: 'Kondakarakam' },
          { id: 'p5', name: 'Wild Hill Honey', price: 300, description: 'Pure, wild honey collected from the hills of Paderu.', imageUrl: 'https://picsum.photos/seed/honey/400/400', village: 'Kondakarakam' },
          { id: 'p7', name: 'Organic Long Pepper', price: 150, description: 'Rare spice harvested from the tribal agency areas of Srikakulam.', imageUrl: 'https://picsum.photos/seed/pepper/400/400', village: 'Kondakarakam' },
          { id: 'p9', name: 'Hand-carved Wooden Spoons', price: 180, description: 'Kitchen utensils carved from local sustainable wood in Vizianagaram.', imageUrl: 'https://picsum.photos/seed/wood/400/400', village: 'Kondakarakam' },
          { id: 'p11', name: 'Organic Turmeric Powder', price: 250, description: 'High curcumin turmeric grown naturally in the agency tracts.', imageUrl: 'https://picsum.photos/seed/turmeric/400/400', village: 'Kondakarakam' },
          { id: 'p13', name: 'Terracotta Cooking Pots', price: 400, description: 'Traditional clay cookware for authentic tribal recipes.', imageUrl: 'https://picsum.photos/seed/terracotta/400/400', village: 'Kondakarakam' },
          { id: 'p15', name: 'Forest Tamarind', price: 120, description: 'Deseeded natural tamarind collected from deep forest areas.', imageUrl: 'https://picsum.photos/seed/tamarind/400/400', village: 'Kondakarakam' },
          { id: 'p17', name: 'Medicinal Aloe Vera Soap', price: 80, description: 'Handmade tribal soap using forest aloe vera and natural oils.', imageUrl: 'https://picsum.photos/seed/soap/400/400', village: 'Kondakarakam' },
          { id: 'p19', name: 'Dried Amla (Gooseberry)', price: 200, description: 'Sun-dried wild amla, rich in Vitamin C and antioxidants.', imageUrl: 'https://picsum.photos/seed/amla/400/400', village: 'Kondakarakam' },
          
          // Patha Rega Products (10)
          { id: 'p2', name: 'Araku Valley Organic Coffee', price: 450, description: 'Premium organic coffee beans harvested by local farmers in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/coffee/400/400', village: 'Patha Rega' },
          { id: 'p4', name: 'Tribal Beaded Jewelry', price: 200, description: 'Colorful and authentic beaded necklaces made by Savara women.', imageUrl: 'https://picsum.photos/seed/jewelry/400/400', village: 'Patha Rega' },
          { id: 'p6', name: 'Traditional Clay Cookware', price: 550, description: 'Hand-molded clay pots for authentic tribal cooking from Vizianagaram.', imageUrl: 'https://picsum.photos/seed/clay/400/400', village: 'Patha Rega' },
          { id: 'p8', name: 'Tribal Wall Art (Savara)', price: 2500, description: 'Authentic wall painting on canvas depicting tribal life in Visakhapatnam.', imageUrl: 'https://picsum.photos/seed/art/400/400', village: 'Patha Rega' },
          { id: 'p10', name: 'Natural Dye Cotton Fabric', price: 800, description: 'Hand-spun cotton fabric dyed with natural extracts from Srikakulam.', imageUrl: 'https://picsum.photos/seed/fabric/400/400', village: 'Patha Rega' },
          { id: 'p12', name: 'Organic Black Pepper', price: 600, description: 'Locally grown, sun-dried black pepper from the Araku hills.', imageUrl: 'https://picsum.photos/seed/blackpepper/400/400', village: 'Patha Rega' },
          { id: 'p14', name: 'Organic Finger Millet (Ragi)', price: 90, description: 'Nutritious local grain cultivated using traditional farming methods.', imageUrl: 'https://picsum.photos/seed/ragi/400/400', village: 'Patha Rega' },
          { id: 'p16', name: 'Forest Beeswax Candles', price: 150, description: 'Natural lighting made from pure forest beeswax.', imageUrl: 'https://picsum.photos/seed/beeswax/400/400', village: 'Patha Rega' },
          { id: 'p18', name: 'Tribal Silver Anklets', price: 3500, description: 'Traditional heavy silver anklets worn by tribal women.', imageUrl: 'https://picsum.photos/seed/silver/400/400', village: 'Patha Rega' },
          { id: 'p20', name: 'Woven Palm Leaf Mats', price: 250, description: 'Traditional floor mats woven from dried palm leaves.', imageUrl: 'https://picsum.photos/seed/mat/400/400', village: 'Patha Rega' },
        ];
        
        let filteredMock = mockProducts;
        if (village !== 'All') {
          filteredMock = mockProducts.filter(p => p.village === village);
        }
        
        // Combine DB products and mock products, avoiding duplicates if seeded
        const dbProductNames = new Set(productsData.map(p => p.name));
        const uniqueMockProducts = filteredMock.filter(p => !dbProductNames.has(p.name));
        
        setProducts([...productsData, ...uniqueMockProducts]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [village]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">E-Commerce Module 1</h1>
          <p className="text-stone-500 mt-1">Authentic tribal products from {village === 'All' ? 'Visakhapatnam, Vizianagaram, and Srikakulam' : village}.</p>
        </div>
        {user && (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Plus size={18} /> <span>List Product</span>
          </button>
        )}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input
            type="text"
            placeholder={`Search tribal products in ${village === 'All' ? 'all villages' : village}...`}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-amber-500 shadow-sm"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-3 bg-white border border-stone-200 rounded-xl font-medium text-stone-700 hover:bg-stone-50 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
            <MapPin size={18} /> <span>{village === 'All' ? 'VSP-VZM-SKL' : village}</span>
          </button>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center gap-4">
        <div className="bg-amber-100 p-3 rounded-xl text-amber-700 shrink-0">
          <CheckCircle size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-amber-900">Tribal Only Marketplace</h3>
          <p className="text-amber-700 text-sm">This module exclusively features tribal people and authentic tribal items from the {village === 'All' ? 'Visakhapatnam, Vizianagaram, and Srikakulam regions' : village}.</p>
        </div>
        {user && (
          <Link 
            to="/admin" 
            className="hidden sm:block bg-amber-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-amber-700 transition-colors"
          >
            ADMIN: SEED DB
          </Link>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12 text-stone-500">Loading products...</div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow group">
              <div className="aspect-square bg-stone-100 relative overflow-hidden">
                <img
                  src={product.imageUrl || `https://picsum.photos/seed/${product.id}/400/400`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md shadow-sm z-10 flex flex-col gap-1">
                  <span>Tribal Authentic</span>
                  {product.village && <span className="bg-emerald-800 px-1 rounded">{product.village}</span>}
                </div>
                {user && user.uid === product.sellerId && (
                  <button
                    onClick={() => setProductToDelete(product.id)}
                    className="absolute top-3 right-3 bg-white/90 text-red-600 p-2 rounded-full hover:bg-red-50 hover:text-red-700 transition-colors shadow-sm z-10"
                    title="Delete Product"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-stone-900 truncate pr-2">{product.name}</h3>
                  <span className="text-amber-700 font-bold whitespace-nowrap">₹{product.price}</span>
                </div>
                <p className="text-stone-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                <button 
                  onClick={() => setPurchasingProduct(product)}
                  className="w-full bg-stone-900 text-white font-semibold py-2.5 rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} /> <span>Buy Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 border-dashed">
          <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
            <ShoppingBag size={32} />
          </div>
          <h3 className="text-lg font-bold text-stone-900 mb-1">No products found</h3>
          <p className="text-stone-500 max-w-sm mx-auto">
            There are currently no products listed in {village === 'All' ? 'the marketplace' : village}. Be the first to list an item!
          </p>
        </div>
      )}

      {/* List Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-stone-900">List a Product</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleListProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border"
                  placeholder="e.g., Wild Forest Honey"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Village</label>
                <select
                  required
                  value={newProduct.village}
                  onChange={(e) => setNewProduct({ ...newProduct, village: e.target.value })}
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border"
                >
                  <option value="Kondakarakam">Kondakarakam</option>
                  <option value="Patha Rega">Patha Rega</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Description</label>
                <textarea
                  required
                  rows={3}
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border"
                  placeholder="Describe your product..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Price (₹)</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border"
                  placeholder="e.g., 300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Image URL (Optional)</label>
                <input
                  type="url"
                  value={newProduct.imageUrl}
                  onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border"
                  placeholder="https://..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white font-semibold py-3 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 flex justify-center"
              >
                {isSubmitting ? 'Listing...' : 'List Product'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={32} />
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Delete Product</h2>
            <p className="text-stone-500 mb-6">
              Are you sure you want to delete this product? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setProductToDelete(null)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 bg-stone-100 text-stone-700 font-semibold rounded-xl hover:bg-stone-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProduct}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Purchase Modal */}
      {purchasingProduct && !purchaseSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-stone-900">Checkout</h2>
              <button onClick={() => setPurchasingProduct(null)} className="text-stone-400 hover:text-stone-600">
                <X size={24} />
              </button>
            </div>
            <div className="flex items-center gap-4 mb-6 p-4 bg-stone-50 rounded-xl border border-stone-100">
              <img 
                src={purchasingProduct.imageUrl || `https://picsum.photos/seed/${purchasingProduct.id}/400/400`} 
                alt={purchasingProduct.name} 
                className="w-16 h-16 object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-bold text-stone-900">{purchasingProduct.name}</h3>
                <p className="text-amber-700 font-bold">₹{purchasingProduct.price}</p>
              </div>
            </div>
            <form onSubmit={handlePurchase} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Delivery Address</label>
                <textarea 
                  required 
                  rows={3} 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3 border" 
                  placeholder="Enter your full address..." 
                />
              </div>
              <button 
                type="submit" 
                disabled={isPurchasing} 
                className="w-full bg-stone-900 text-white font-semibold py-3 rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-50 flex justify-center"
              >
                {isPurchasing ? 'Processing...' : `Pay ₹${purchasingProduct.price}`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Purchase Success Modal */}
      {purchaseSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Order Confirmed!</h2>
            <p className="text-stone-500 mb-6">Your order has been placed successfully. The seller will contact you soon.</p>
            <button 
              onClick={() => { setPurchaseSuccess(false); setPurchasingProduct(null); }} 
              className="w-full px-4 py-2.5 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
