import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", photo: "", country: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp submit", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="h-28" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:block relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <img src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=1600&auto=format&fit=crop" alt="new account" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h2 className="text-3xl font-bold">Create your account</h2>
              <p className="text-slate-300/90">Join thousands planning smarter trips</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Sign up</h1>
                <button onClick={() => navigate("/")} className="btn btn-muted">Home</button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">Name</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">Country</label>
                    <input type="text" name="country" value={form.country} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="e.g. Colombia" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@email.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">Password</label>
                    <div className="relative">
                      <input type={showPass ? "text" : "password"} name="password" required value={form.password} onChange={handleChange} className="w-full h-12 pr-11 px-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="••••••••" />
                      <button type="button" onClick={() => setShowPass(!showPass)} className="absolute inset-y-0 right-3 flex items-center text-slate-300/80 hover:text-white">{showPass ? "Hide" : "Show"}</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1">Photo URL</label>
                    <input type="url" name="photo" value={form.photo} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="https://..." />
                  </div>
                </div>
                <button type="submit" className="w-full btn btn-solid btn-lg">Create account</button>
                <p className="text-sm text-slate-300 text-center">Already have an account?{" "}
                  <button type="button" className="underline decoration-dotted underline-offset-4 hover:text-white" onClick={() => navigate('/singIn')}>Sign in</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
