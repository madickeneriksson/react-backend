import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductsDetailsView';
import CategoriesView from './views/CategoriesView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView'
import NotFoundView from './views/NotFoundView';
import  ProductProvider  from './context/ProductContexts'
import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App() {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
    <ProductProvider>
    <Routes>
      <Route path="/" element={<HomeView  />} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="/products" element={<ProductsView   />} />
      <Route path="/products/:name" element={<ProductDetailsView />} />
      <Route path="/categories" element={<CategoriesView />} />
      <Route path="/search" element={<SearchView />} />
      <Route path="/compare" element={<CompareView />} />
      <Route path="/wishlist" element={<WishListView />} />
      <Route path="/shoppingcart" element={<ShoppingCartView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
    </ProductProvider>
    </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;

