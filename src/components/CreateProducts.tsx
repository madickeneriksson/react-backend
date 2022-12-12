import CreateProductContext, { IProductContext, productContext } from '../context/CreateProductContext';
import { useEffect } from 'react';



interface Props {
  productList: string
  setProductList: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (event: React.FormEvent) => void 
}

 const CreateProducts:React.FC<Props> = ({productList, setProductList, handleSubmit}) => {


  return (


      <form onSubmit={handleSubmit} className="d-grid mb-5">
        <input type="hidden" value={productList} />
        <input value={productList} onChange={(e) => setProductList(e.target.value)} type="text" className="form-controlpy-2 mb-3" placeholder="Enter Products" />
        <input value={productList} onChange={(e) => setProductList(e.target.value)} type="text" className="form-controlpy-2 mb-3" placeholder="Enter Products" />
        <input value={productList} onChange={(e) => setProductList(e.target.value)} type="text" className="form-controlpy-2 mb-3" placeholder="Enter Products" />
        <input value={productList} onChange={(e) => setProductList(e.target.value)} type="text" className="form-controlpy-2 mb-3" placeholder="Enter Products" />
        <input value={productList} onChange={(e) => setProductList(e.target.value)} type="text" className="form-controlpy-2 mb-3" placeholder="Enter Products" />
        <button type="submit" className="btn btn-success"></button>
        
      </form>
    )
  }

export default CreateProducts