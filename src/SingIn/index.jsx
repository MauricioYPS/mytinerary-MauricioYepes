import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="h-28" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:block relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="travel" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h2 className="text-3xl font-bold">Welcome back</h2>
              <p className="text-slate-300/90">Plan your next adventure with MyTinerary</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Sign in</h1>
                <button onClick={() => navigate("/")} className="btn btn-muted">Home</button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-300/70" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 22.5 17.25V8.67l-9.53 5.635a2.25 2.25 0 0 1-2.44 0L1.5 8.67Z"/>
                        <path d="M22.5 6.75v-.008A2.25 2.25 0 0 0 20.25 4.5H3.75A2.25 2.25 0 0 0 1.5 6.742V6.75l10.03 5.926a.75.75 0 0 0 .78 0L22.5 6.75Z"/>
                      </svg>
                    </span>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-300/70" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 1.5A5.25 5.25 0 0 0 6.75 6.75V9H6a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 18 9h-.75V6.75A5.25 5.25 0 0 0 12 1.5Zm-3.75 7.5V6.75a3.75 3.75 0 1 1 7.5 0V9h-7.5Z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <input type={showPass ? "text" : "password"} name="password" required value={form.password} onChange={handleChange} className="w-full h-12 pl-11 pr-11 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="••••••••" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute inset-y-0 right-3 flex items-center text-slate-300/80 hover:text-white">{showPass ? "Hide" : "Show"}</button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                    <input type="checkbox" className="h-4 w-4 rounded bg-white/10 border-white/20" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">Forgot password?</a>
                </div>
                <button type="submit" className="w-full btn btn-solid btn-lg">Sign in</button>
                <p className="text-sm text-slate-300 text-center">Don&apos;t have an account?{" "}
                  <button type="button" className="underline decoration-dotted underline-offset-4 hover:text-white" onClick={() => navigate('/singUp')}>Create one</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
