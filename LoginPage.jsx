import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and redirect to the homepage
    navigate('/');
  };

  return (
    <main className="flex h-screen bg-background font-body text-on-surface antialiased overflow-hidden w-full">
      {/* Left Side: Branding and Visuals (Split Layout) */}
      <section className="hidden lg:flex lg:w-3/5 bg-primary relative items-center justify-center overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 indigo-grid opacity-10"></div>
        {/* Branding Elements */}
        <div className="relative z-10 p-16 w-full max-w-2xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-secondary p-3 rounded-xl shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl" data-icon="local_shipping">local_shipping</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase">PT Niaga Trans Sentosa</h1>
          </div>
          <div className="space-y-6">
            <h2 className="text-6xl font-extrabold text-white leading-tight">
              The Kinetic <span className="text-secondary">Architect</span> of Supply Chains.
            </h2>
            <p className="text-xl text-primary-fixed opacity-80 leading-relaxed max-w-lg">
              Experience the precision of modern global logistics. Weightless efficiency, robust structural trust.
            </p>
          </div>
          {/* Overlapping Floating Card */}
          <div className="mt-12 bg-white/10 backdrop-blur-xl border border-outline-variant p-8 rounded-2xl shadow-2xl flex items-center gap-6 w-fit">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-slate-200 overflow-hidden">
                <img className="w-full h-full object-cover" alt="portrait of a professional male operations manager in business attire smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq8FlEsFHdLHmzcBCX6F1dFXClB2RvY8kBzJbe_HfFhs4bDkklQz-Suqurqw068s0VABfAORarqIqcEIH2NfjM0k5EKeSxjNRhsKrreNL_4I6q7FdVOjzGRw7BJkcdLpoRo1dh-V8UgIs_nIu5cmr3381mAmljZcMYFMkUYhpYiaIk6UzMYcn2AinlGL_4A4cyI0xoEiHpzuTxhamuUtpH_dBEYA4TyYZPjMZupmrQypgHidbGqCZ7TcY6Mc7gtKJinjJMsaWPWs8"/>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-slate-200 overflow-hidden">
                <img className="w-full h-full object-cover" alt="portrait of a professional female logistics coordinator in corporate environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjxF2NNEFfa7_aWBdiEoM3d2o8Xq13M5fRtUSYx3OAF_mHNmaVKZIPo_gQZzKcvSaljXG25vBZbXx7JHr1SQkoQY_agP9HmI9emQiy6tI_UiAzubdnQkf6aKWvahTkig4kZ6h-Gy54ef6TxpsTBt_Pe2gin2zTjp5_c5RER_ZSddCdfKiz1BYveThTz_d0ZjPQsPKbPKG-dcBgbbRjk2Y7RtrjjvOiU0lc1rLEh3r6v0yiiMxp8qlsMYpZM7WZbfmsIz1hZ_mj0iw"/>
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">Join 2,400+ Partners</div>
              <div className="text-primary-fixed text-sm opacity-70 italic">Reliable. Safe. Kinetic.</div>
            </div>
          </div>
        </div>
        {/* Kinetic Background Element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Right Side: Login Form */}
      <section className="w-full lg:w-2/5 bg-surface-container-lowest flex items-center justify-center p-8 md:p-12 relative overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-secondary text-3xl" data-icon="local_shipping">local_shipping</span>
            <span className="text-xl font-extrabold text-primary tracking-tight uppercase">Niaga Trans Sentosa</span>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-on-surface mb-2 tracking-tight">Welcome Back</h3>
            <p className="text-on-surface-variant font-medium">Please enter your credentials to access the portal.</p>
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-widest" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="mail">mail</span>
                <input className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-surface-container-high focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline font-medium" id="email" placeholder="name@company.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-widest" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
                <input className="w-full pl-12 pr-12 py-4 rounded-xl border-none bg-surface-container-high focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline font-medium" id="password" placeholder="••••••••" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
                  <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary transition-all" type="checkbox" />
                <span className="text-sm font-semibold text-on-surface-variant group-hover:text-primary transition-colors">Remember Me</span>
              </label>
            </div>
            <button className="w-full py-4 mt-6 bg-secondary text-white font-extrabold text-lg rounded-xl shadow-lg hover:shadow-secondary/30 hover:-translate-y-1 active:scale-95 transform transition-all flex items-center justify-center gap-2 group" type="submit">
              Sign In
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-on-surface-variant font-medium">
              Don't have an account? 
              <Link className="text-primary font-bold hover:text-secondary transition-colors ml-1" to="/register">Create Account</Link>
            </p>
          </div>
          {/* Footer-like link within Login Shell */}
          <div className="mt-16 flex items-center justify-center gap-6 text-[10px] font-bold text-outline uppercase tracking-[0.2em]">
            <Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link>
            <div className="w-1 h-1 bg-outline rounded-full"></div>
            <Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link>
          </div>
        </div>
      </section>

      {/* Global Decoration */}
      <div className="fixed top-0 right-0 p-8 lg:p-12 pointer-events-none z-50">
        <div className="bg-surface-container-high/50 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-0.5">Global Network Online</span>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
