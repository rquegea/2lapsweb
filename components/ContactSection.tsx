"use client";

export default function ContactSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container-v2 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Contact Info */}
                    <div>
                        <h1
                            className="text-5xl font-medium text-zinc-900 mb-8"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Get in touch
                        </h1>
                        <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                            Have questions about our platform or pricing? We're here to help. Reach out to our team and we'll get back to you shortly.
                        </p>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">Sales Inquiries</h3>
                                <p className="text-zinc-600 mb-1">Interested in a demo or enterprise plan?</p>
                                <a href="mailto:sales@2laps.com" className="text-primary font-medium hover:underline">sales@2laps.com</a>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">Support</h3>
                                <p className="text-zinc-600 mb-1">Need help with your account?</p>
                                <a href="mailto:support@2laps.com" className="text-primary font-medium hover:underline">support@2laps.com</a>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">Global Offices</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="font-semibold text-zinc-900">New York</div>
                                        <div className="text-sm text-zinc-500">123 Broadway, Suite 100<br />New York, NY 10010</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-zinc-900">London</div>
                                        <div className="text-sm text-zinc-500">45 King's Cross Rd<br />London, WC1X 9LP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold text-zinc-900 mb-2">First name</label>
                                    <input type="text" id="first-name" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Jane" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold text-zinc-900 mb-2">Last name</label>
                                    <input type="text" id="last-name" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 mb-2">Work email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="jane@company.com" />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold text-zinc-900 mb-2">Company</label>
                                <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Acme Inc." />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                                Send Message
                            </button>

                            <p className="text-xs text-zinc-500 text-center mt-4">
                                By submitting this form, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
