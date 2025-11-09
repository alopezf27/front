import React, { useState } from 'react'
import ProductList from './components/ProductList.jsx'
import WarehouseList from './components/WarehouseList.jsx'

export default function App() {
  const [tab, setTab] = useState('products')

  return (
    <div className="container">
      <header>
        <h1>Inventario Enterprise</h1>
        <nav>
          <button className={tab==='products'?'active':''} onClick={()=>setTab('products')}>Productos</button>
          <button className={tab==='warehouses'?'active':''} onClick={()=>setTab('warehouses')}>Bodegas</button>
        </nav>
      </header>

      <main>
        {tab==='products' ? <ProductList/> : <WarehouseList/>}
      </main>
      <footer>
        <small>Frontend React (Vite)</small>
      </footer>
    </div>
  )
}