"use client"

import Link from "next/link"
import { useEffect } from "react"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function ContactPageContent() {
  const { t } = useLanguage()
  const [formState, handleSubmit] = useForm("mnjobqkg")

  // Show success message when form is successfully submitted
  const showSuccess = formState.succeeded

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
              {t.contactTitle}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 max-w-2xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <div className="flex flex-col">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.contactPhone}</h3>
                      <p className="mt-1 text-lg text-slate-900">{t.contactPhoneValue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.contactEmail}</h3>
                      <p className="mt-1 text-lg text-slate-900">{t.contactEmailValue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.contactAddress}</h3>
                      <p className="mt-1 text-slate-900 leading-relaxed">{t.contactAddressValue}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base rounded-xl">
                    <Link href="https://wa.me/85253469889" target="_blank" className="flex items-center justify-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {t.contactWhatsApp}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="flex flex-col">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex-1">
                {showSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {t.contactFormSuccess}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {t.contactFormSuccessDesc}
                    </p>
                    <Button onClick={() => window.location.reload()} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      {t.contactFormTitle}
                    </h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        {t.contactFormName} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder={t.contactFormNamePlaceholder}
                      />
                      <ValidationError prefix="Name" field="name" errors={formState.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        {t.contactFormEmail} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        {t.contactFormPhone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder={t.contactFormPhonePlaceholder}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        {t.contactFormSubject} *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">{t.contactFormSubjectSelect}</option>
                        <option value="Product Inquiry">{t.contactFormSubjectProduct}</option>
                        <option value="Quotation Request">{t.contactFormSubjectQuote}</option>
                        <option value="Catalogue Request">{t.contactFormSubjectCatalogue}</option>
                        <option value="Customization">{t.contactFormSubjectCustom}</option>
                        <option value="Other">{t.contactFormSubjectOther}</option>
                      </select>
                      <ValidationError prefix="Subject" field="subject" errors={formState.errors} />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        {t.contactFormMessage} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        placeholder={t.contactFormMessagePlaceholder}
                      />
                      <ValidationError prefix="Message" field="message" errors={formState.errors} />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={formState.submitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base rounded-xl flex items-center justify-center gap-2"
                    >
                      {formState.submitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          {t.contactFormSending}
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          {t.contactFormSubmit}
                        </>
                      )}
                    </Button>
                    
                    <ValidationError errors={formState.errors} />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
