import { useState } from "react";

export default function Footer() {
  const [opened, setOpened] = useState(false);

  return (
    <footer className="mt-10">
      <div className="mx-auto max-w-7xl container-px">
        <div className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {[
                "https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff",
                "https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=ffffff",
                "https://img.icons8.com/?size=100&id=59813&format=png&color=ffffff",
                "https://img.icons8.com/?size=100&id=123922&format=png&color=ffffff"
              ].map((src, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/10 grid place-items-center hover:bg-white/20 transition">
                  <img className="w-5 h-5" src={src} alt="" />
                </a>
              ))}
            </div>

            <p className="text-sm text-slate-300 text-center flex-1">Thanks for visiting. Follow us and get in touch anytime.</p>

            <div className="relative">
              <button className="btn btn-muted" onClick={() => setOpened(!opened)}>Contact</button>
              <div className={`absolute right-0 mt-3 w-64 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-4 shadow-xl transition origin-top-right ${opened ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
                <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
                <p className="text-sm text-slate-300">Phone: 3227682475</p>
                <p className="text-sm text-slate-300">Email: devmauricioy@gmail.com</p>
                <p className="text-sm text-slate-300">NIT: 7777777</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
