
import CreateProducts from '../components/CreateProducts';
import ProductProvider from '../context/CreateProductContext';
import UpdateProduct from '../components/UpdateProduct';
import ProductList from '../components/ProductList';
import MainMenuSection from '../sections/MainMenuSection';

function CreateProductsWiew() {
  return (
    <ProductProvider>
      
        < MainMenuSection />
        <div className="container mt-5">
        < CreateProducts/>
        <UpdateProduct />
        <ProductList />


      </div>

    </ProductProvider>
  
  );
}

export default CreateProductsWiew;