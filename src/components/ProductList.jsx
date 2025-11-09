import React, { useEffect, useState } from 'react'
import { getProducts, createProduct } from '../api.js'
import FormRow from './FormRow.jsx'

export default function ProductList() {
  const [items, setItems] = useState([])
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function load() {
    setLoading(true); setError('')
    try {
      const data = await getProducts()
      setItems(data)
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  async function onCreate(e) {
    e.preventDefault()
    if (!sku || !name) return
    await createProduct({ id:null, sku, name })
    setSku(''); setName('')
    await load()
  }

  return (
    <section>
      <h2>Productos</h2>
      <form className="card" onSubmit={onCreate}>
        <FormRow label="SKU" name="sku" value={sku} onChange={setSku} placeholder="P-001"/>
        <FormRow label="Nombre" name="name" value={name} onChange={setName} placeholder="Producto demo"/>
        <button type="submit">Crear</button>
      </form>

      {loading && <p>Cargando…</p>}
      {error && <p className="error">{error}</p>}

      <div className="card">
        <table>
          <thead><tr><th>ID</th><th>SKU</th><th>Nombre</th></tr></thead>
          <tbody>
            {items.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.sku}</td>
                <td>{p.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}