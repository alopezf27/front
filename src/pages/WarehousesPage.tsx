import { useEffect, useState } from "react";
import { api } from "../lib/api";

type Warehouse = { id?: number; code: string; name: string; };

export default function WarehousesPage(){
  const [items, setItems] = useState<Warehouse[]>([]);
  const [form, setForm] = useState<Warehouse>({ code:"", name:"" });

  const load = async()=>{ const {data} = await api.get("/warehouses"); setItems(data); };
  useEffect(()=>{ load(); },[]);

  const save = async()=>{
    await api.post("/warehouses", form);
    setForm({code:"", name:""});
    load();
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Nueva bodega</h2>
        <div className="flex gap-2">
          <input className="border px-2 py-1" placeholder="Código" value={form.code}
            onChange={e=>setForm({...form, code:e.target.value})}/>
          <input className="border px-2 py-1" placeholder="Nombre" value={form.name}
            onChange={e=>setForm({...form, name:e.target.value})}/>
          <button onClick={save} className="px-3 py-1 bg-black text-white rounded">Guardar</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Bodegas</h2>
        <ul className="list-disc pl-5">
          {items.map(w=> <li key={w.id}>{w.code} — {w.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
