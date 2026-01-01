import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-page text-heading min-h-screen flex flex-col font-display antialiased selection:bg-primary/20 selection:text-primary">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px]"></div>
            </div>
            <main className="relative z-10 flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-xl border border-border-gray p-6 sm:p-10 flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">view_in_ar</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-heading">
                                Register Your Outlet
                            </h1>
                            <p className="text-body text-sm sm:text-base">
                                Start your free trial - no credit card required
                            </p>
                        </div>
                    </div>
                    <form action="#" className="flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-heading" htmlFor="firstName">First Name</label>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 px-3.5 text-sm transition-all duration-200 outline-none border focus:ring-4" id="firstName" placeholder="Jane" type="text" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-heading" htmlFor="lastName">Last Name</label>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 px-3.5 text-sm transition-all duration-200 outline-none border focus:ring-4" id="lastName" placeholder="Doe" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading" htmlFor="outletName">Outlet Name</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-body material-symbols-outlined text-[20px]">storefront</span>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-10 pr-3.5 text-sm transition-all duration-200 outline-none border focus:ring-4" id="outletName" placeholder="e.g. Fashion Forward Downtown" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading" htmlFor="outletType">Outlet Type</label>
                            <div className="relative">
                                <select className="w-full appearance-none rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-3.5 pr-10 text-sm transition-all duration-200 outline-none border focus:ring-4 cursor-pointer" id="outletType" defaultValue="">
                                    <option disabled value="">Select outlet type</option>
                                    <option value="boutique">Independent Boutique</option>
                                    <option value="chain">Retail Chain</option>
                                    <option value="popup">Pop-up Store</option>
                                    <option value="online">Online Only</option>
                                </select>
                                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-body pointer-events-none material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading" htmlFor="email">Work Email</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-body material-symbols-outlined text-[20px]">mail</span>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-10 pr-3.5 text-sm transition-all duration-200 outline-none border focus:ring-4" id="email" placeholder="name@company.com" type="email" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading" htmlFor="phone">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-body material-symbols-outlined text-[20px]">call</span>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-10 pr-3.5 text-sm transition-all duration-200 outline-none border focus:ring-4" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-heading" htmlFor="city">City</label>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 px-3.5 text-sm transition-all duration-200 outline-none border focus:ring-4" id="city" placeholder="New York" type="text" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-heading" htmlFor="country">Country</label>
                                <div className="relative">
                                    <select className="w-full appearance-none rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-3.5 pr-10 text-sm transition-all duration-200 outline-none border focus:ring-4 cursor-pointer" id="country" defaultValue="">
                                        <option disabled value="">Select country</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-body pointer-events-none material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-body material-symbols-outlined text-[20px]">lock</span>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-10 pr-10 text-sm transition-all duration-200 outline-none border focus:ring-4" id="password" placeholder="Create a password" type="password" />
                                <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-body hover:text-heading focus:outline-none" type="button">
                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading" htmlFor="confirmPassword">Confirm Password</label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-body material-symbols-outlined text-[20px]">lock_reset</span>
                                <input className="w-full rounded-lg border-border-gray bg-page text-heading placeholder:text-body/60 focus:border-primary focus:ring-primary/20 py-2.5 pl-10 pr-10 text-sm transition-all duration-200 outline-none border focus:ring-4" id="confirmPassword" placeholder="Confirm your password" type="password" />
                            </div>
                        </div>
                        <div className="flex items-start gap-3 mt-2">
                            <div className="flex h-5 items-center">
                                <input className="h-4 w-4 rounded border-border-gray text-primary focus:ring-primary/20 cursor-pointer" id="terms" type="checkbox" />
                            </div>
                            <label className="text-sm text-body leading-tight" htmlFor="terms">
                                I agree to the <a className="font-medium text-primary hover:text-primary/80 transition-colors" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:text-primary/80 transition-colors" href="#">Privacy Policy</a>
                            </label>
                        </div>
                        <button className="w-full mt-4 flex justify-center items-center py-3 px-4 rounded-xl shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-blue-600 hover:to-blue-700 text-white font-bold text-sm tracking-wide transition-all duration-200 transform active:scale-[0.98]" type="submit">
                            Create Account
                        </button>
                    </form>
                    <div className="text-center text-sm text-body">
                        Already have an account?
                        <Link className="font-semibold text-primary hover:text-primary/80 transition-colors ml-1" to="/login">Log In</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
