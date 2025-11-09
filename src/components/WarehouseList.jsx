import React, { useEffect, useState } from 'react'
import { getWarehouses, createWarehouse } from '../api.js'
import FormRow from './FormRow.jsx'

export default function WarehouseList() {
  const [items, setItems] = useState([])
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function load() {
    setLoading(true); setError('')
    try {
      const data = await getWarehouses()
      setItems(data)
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  async function onCreate(e) {
    e.preventDefault()
    if (!code || !name) return
    await createWarehouse({ id:null, code, name })
    setCode(''); setName('')
    await load()
  }

  return (
    <section>
      <h2>Bodegas</h2>
      <form className="card" onSubmit={onCreate}>
        <FormRow label="Código" name="code" value={code} onChange={setCode} placeholder="WH-01"/>
        <FormRow label="Nombre" name="name" value={name} onChange={setName} placeholder="Central"/>
        <button type="submit">Crear</button>
      </form>

      {loading && <p>Cargando…</p>}
      {error && <p className="error">{error}</p>}

      <div className="card">
        <table>
          <thead><tr><th>ID</th><th>Código</th><th>Nombre</th></tr></thead>
          <tbody>
            {items.map(w => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.code}</td>
                <td>{w.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}