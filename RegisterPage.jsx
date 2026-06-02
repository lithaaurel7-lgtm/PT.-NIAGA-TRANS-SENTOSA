import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration and redirect to the homepage
        navigate('/');
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-surface font-body text-on-surface selection:bg-secondary/30">
            {/* Structural Grid Background */}
            <div className="absolute inset-0 kinetic-grid pointer-events-none"></div>
            
            {/* Background Gradient Accents */}
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
            
            <div className="relative w-full max-w-5xl flex flex-col md:flex-row bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant">
                
                {/* Left Panel: Branding & Identity */}
                <div className="hidden md:flex md:w-5/12 bg-primary p-12 flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img alt="Kinetic architectural lines of a modern logistics warehouse hub" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBza3tu1H72qnJdXvDRe_-f7bWJ-MeKC1L5muhyN7wsop5hT51UIeZMS2hGbxTvpJFH0GbgkknBkOrj_A9cVlBp1Q0JjEHmwPeh2y_99Pire-wHVlGcOqldh9e-c0t-_AdJujahOl5juKh3Hz4dFvD_Jmu6CLcOhh5Ci24rkxxsL0Cr6sufVe7LXcguX6YymQo0Sw2LoZ2MSRERBMiHkqkoXKtHIBQgkkQ9VKslvyR4YgGlORWMlNikuqCGIieb2SdfZWc0rQp941A"/>
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-none mb-2">PT Niaga Trans Sentosa</h1>
                        <p className="text-primary-fixed-dim font-medium text-sm tracking-widest uppercase">Silakan membuat akun anda</p>
                    </div>
                    <div className="relative z-10">
                        <blockquote className="text-white text-2xl font-bold leading-tight mb-6">
                            Seamlessly connecting <span className="text-secondary">global commerce</span> through precision engineering.
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-white" data-icon="local_shipping">local_shipping</span>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">PT Niaga Trans Sentosa</p>
                                <p className="text-primary-fixed-dim text-xs">Global Network Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Panel: Registration Form */}
                <div className="w-full md:w-7/12 p-8 md:p-16 bg-white z-10">
                    <div className="mb-10">
                        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Create Account</h2>
                        <p className="text-outline text-lg">Join the network at <span className="text-primary font-semibold">PT Niaga Trans Sentosa</span>.</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleRegister}>
                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="person">person</span>
                                <input className="w-full pl-12 pr-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-secondary/50 text-on-surface placeholder:text-outline/60 transition-all focus:outline-none" placeholder="John Doe" type="text"/>
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="mail">mail</span>
                                <input className="w-full pl-12 pr-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-secondary/50 text-on-surface placeholder:text-outline/60 transition-all focus:outline-none" placeholder="john@niagatrans.com" type="email"/>
                            </div>
                        </div>
                        
                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
                                <input className="w-full pl-12 pr-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-secondary/50 text-on-surface placeholder:text-outline/60 transition-all focus:outline-none" placeholder="••••••••" type="password"/>
                            </div>
                        </div>
                        
                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-3 py-2">
                            <div className="flex items-center h-5">
                                <input className="w-5 h-5 text-secondary border-outline rounded focus:ring-secondary focus:ring-offset-0" type="checkbox"/>
                            </div>
                            <label className="text-sm text-on-surface-variant">
                                I agree to the <Link className="text-primary font-bold hover:underline" to="#">Terms and Conditions</Link> and the Privacy Policy of PT Niaga Trans Sentosa.
                            </label>
                        </div>
                        
                        {/* Action Button */}
                        <div className="pt-4 space-y-6">
                            <button className="w-full bg-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                                <span>Register</span>
                                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                            </button>
                            <div className="text-center">
                                <p className="text-on-surface-variant text-sm">
                                    Already part of the fleet? 
                                    <Link className="text-primary font-extrabold hover:text-secondary transition-colors ml-1 uppercase tracking-tight" to="/login">Login here</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;
