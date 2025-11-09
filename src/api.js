const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

export async function getProducts() {
  const r = await fetch(`${API_URL}/api/products`)
  if (!r.ok) throw new Error('Error cargando productos')
  return r.json()
}

export async function createProduct(data) {
  const r = await fetch(`${API_URL}/api/products`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(data)
  })
  if (!r.ok) throw new Error('Error creando producto')
  return r.json()
}

export async function getWarehouses() {
  const r = await fetch(`${API_URL}/api/warehouses`)
  if (!r.ok) throw new Error('Error cargando bodegas')
  return r.json()
}

export async function createWarehouse(data) {
  const r = await fetch(`${API_URL}/api/warehouses`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(data)
  })
  if (!r.ok) throw new Error('Error creando bodega')
  return r.json()
}