"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--navy)" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/silk_hero_texture_1769039275627.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="section-divider mb-8" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--cream)",
            }}
          >
            Contact Us
          </h1>
          <p
            className="text-lg md:text-xl font-light max-w-2xl mx-auto"
            style={{ color: "var(--cream)", opacity: 0.85 }}
          >
            We would love to hear from you. Whether you have a question about
            our collections or need assistance, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Contact Form - Centered */}
            <div className="w-full max-w-2xl mb-24">
              <Card className="border-none shadow-xl bg-white">
                <CardContent className="p-8 md:p-10">
                  <h2
                    className="text-2xl md:text-3xl font-light mb-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "var(--navy)",
                    }}
                  >
                    Send us a Message
                  </h2>
                  <Separator className="w-16 bg-[var(--gold)] mb-8" />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-left"
                          style={{ color: "var(--navy)" }}
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Doe"
                          className="rounded-none border-[var(--border)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-left"
                          style={{ color: "var(--navy)" }}
                        >
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="rounded-none border-[var(--border)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-left"
                        style={{ color: "var(--navy)" }}
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="How can we help?"
                        className="rounded-none border-[var(--border)] focus:border-[var(--gold)] focus:ring-[var(--gold)]"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-left"
                        style={{ color: "var(--navy)" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us more about your inquiry..."
                        className="w-full rounded-none border border-[var(--border)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] p-3 text-sm resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-gold py-6 text-sm tracking-[0.15em] rounded-none"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info - Balanced Grid below */}
            <div className="w-full">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl font-light mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--navy)",
                  }}
                >
                  Get in Touch
                </h2>
                <Separator className="w-16 bg-[var(--gold)] mx-auto mb-8" />
                <p
                  className="text-base font-light mx-auto max-w-2xl"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Reach out through any of the channels below. Our team of specialists is ready to assist you with
                  personalized service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                    >
                      <Phone className="w-6 h-6" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-medium mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Call Us
                      </h3>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        +1 (555) 123-4567
                        <br />
                        Mon - Sat: 10AM - 7PM
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                    >
                      <Mail className="w-6 h-6" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-medium mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Email Us
                      </h3>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        hello@davidae.com
                        <br />
                        support@davidae.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--gold)", opacity: 0.15 }}
                    >
                      <Clock className="w-6 h-6" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-medium mb-2"
                        style={{ color: "var(--navy)" }}
                      >
                        Business Hours
                      </h3>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Mon - Sat: 10AM - 7PM
                        <br />
                        Sun: By Appointment
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
