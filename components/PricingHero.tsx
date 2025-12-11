"use client";

export default function PricingHero() {
    return (
        <section className="bg-[#050A18] text-white py-24">
            <div className="container-v2 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                {/* Left Content */}
                <div className="flex-1 lg:pt-12">
                    <h1
                        className="text-5xl md:text-6xl font-medium leading-[1.1] mb-8"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        Connect with our sales team for scalable pricing
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-xl">
                        We offer flexible subscription options, from enterprise-wide solutions to per-seat pricing, to fit your organization's needs. Whether you're a small team or a global operation, we tailor our plans to maximize your value.
                    </p>

                </div>

                {/* Right Form */}
                <div className="flex-1 w-full max-w-md bg-white rounded-lg p-8 text-zinc-900 shadow-2xl">
                    <div className="mb-8">
                        {/* Abstract Logo/Icon */}
                        <div className="w-12 h-12 rounded-full border-2 border-zinc-900 flex items-center justify-center mb-6">
                            <div className="w-1 h-1 bg-zinc-900 rounded-full mx-0.5"></div>
                            <div className="w-1 h-1 bg-zinc-900 rounded-full mx-0.5"></div>
                            <div className="w-1 h-1 bg-zinc-900 rounded-full mx-0.5"></div>
                        </div>
                        <h3 className="text-2xl font-medium leading-tight">
                            Connect with our sales team for scalable pricing
                        </h3>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">Business Email *</label>
                            <input type="email" className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">Phone *</label>
                            <input type="tel" className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">Role *</label>
                            <select className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors bg-transparent">
                                <option>Select your role</option>
                                <option>Executive</option>
                                <option>Manager</option>
                                <option>Analyst</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">Country *</label>
                            <select className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors bg-transparent">
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Spain</option>
                            </select>
                        </div>

                        <div className="flex items-start gap-3 pt-4">
                            <input type="checkbox" className="mt-1" />
                            <p className="text-xs text-zinc-500">
                                I would like to receive regular updates and communications from 2laps.
                            </p>
                        </div>

                        <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded mt-6 hover:bg-primary-hover transition-colors">
                            Get pricing
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
