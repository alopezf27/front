import { useEffect, useState } from "react";
import { api } from "../lib/api";

type Product = { id?: number; sku: string; name: string; };

export default function ProductsPage(){
  const [items, setItems] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({ sku:"", name:"" });

  const load = async()=>{ const {data} = await api.get("/products"); setItems(data); };
  useEffect(()=>{ load(); },[]);

  const save = async()=>{
    await api.post("/products", form);
    setForm({sku:"", name:""});
    load();
  };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-semibold mb-2">Nuevo producto</h2>
        <div className="flex gap-2">
          <input className="border px-2 py-1" placeholder="SKU" value={form.sku}
            onChange={e=>setForm({...form, sku:e.target.value})}/>
          <input className="border px-2 py-1" placeholder="Nombre" value={form.name}
            onChange={e=>setForm({...form, name:e.target.value})}/>
          <button onClick={save} className="px-3 py-1 bg-black text-white rounded">Guardar</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Productos</h2>
        <table className="w-full text-sm">
          <thead><tr><th className="text-left">ID</th><th>SKU</th><th>Nombre</th></tr></thead>
          <tbody>
            {items.map(p=> (
              <tr key={p.id} className="border-t">
                <td>{p.id}</td><td>{p.sku}</td><td>{p.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
