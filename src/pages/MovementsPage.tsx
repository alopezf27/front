import { useState } from "react";
import { api } from "../lib/api";

export default function MovementsPage(){
  const [docId, setDocId] = useState<number | null>(null);
  const [productId, setProductId] = useState(1);
  const [fromWh, setFromWh] = useState<number | undefined>();
  const [toWh, setToWh] = useState<number | undefined>();
  const [type, setType] = useState<'IN'|'OUT'|'TRANSFER'>('IN');
  const [qty, setQty] = useState(1);

  const createDoc = async()=>{
    const {data} = await api.post("/movements", { companyId:1, branchId:1, reference:"WEB" });
    setDocId(data.id);
  };

  const addLine = async()=>{
    if(!docId) return;
    await api.post(`/movements/${docId}/lines`, {
      type, productId, fromWarehouseId: fromWh, toWarehouseId: toWh, unitId:1, quantity: qty
    });
  };

  const post = async()=>{ if(docId) await api.post(`/movements/${docId}/post?user=web`, {}); };

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow flex items-center gap-2">
        <button onClick={createDoc} className="px-3 py-1 bg-black text-white rounded">Nuevo Doc</button>
        <span>ID: {docId ?? '-'}</span>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <div className="flex gap-2 items-center">
          <select value={type} onChange={e=>setType(e.target.value as any)} className="border px-2 py-1">
            <option value="IN">IN</option>
            <option value="OUT">OUT</option>
            <option value="TRANSFER">TRANSFER</option>
          </select>
          <input className="border px-2 py-1 w-24" type="number" value={productId}
            onChange={e=>setProductId(+e.target.value)} placeholder="ProductId"/>
          <input className="border px-2 py-1 w-24" type="number" value={fromWh||''}
            onChange={e=>setFromWh(e.target.value? +e.target.value: undefined)} placeholder="FromWh"/>
          <input className="border px-2 py-1 w-24" type="number" value={toWh||''}
            onChange={e=>setToWh(e.target.value? +e.target.value: undefined)} placeholder="ToWh"/>
          <input className="border px-2 py-1 w-24" type="number" value={qty}
            onChange={e=>setQty(+e.target.value)} placeholder="Qty"/>
          <button onClick={addLine} disabled={!docId}
            className="px-3 py-1 bg-black text-white rounded disabled:opacity-40">Agregar línea</button>
        </div>
        <button onClick={post} disabled={!docId}
          className="px-3 py-1 bg-emerald-600 text-white rounded disabled:opacity-40">Postear</button>
      </div>
    </div>
  );
}
