import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COURSES } from "@/config/courses";
import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";

const contactPoints = [
  {
    icon: MessageSquare,
    title: "Enrollment queries",
    body: "Ask about eligibility, course structure, batches, and certificates.",
  },
  {
    icon: Mail,
    title: "Programme support",
    body: "Share your details and the Skillify team can connect the right coordinator.",
  },
  {
    icon: MapPin,
    title: "Institution",
    body: "IIIT Delhi, Okhla Industrial Estate, New Delhi.",
  },
];

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("Thanks. Your contact details are ready to be wired to a live endpoint.");
  };

  return (
    <>
      <Helmet>
        <title>Contact - Skillify IIITD &amp; MEIT</title>
        <meta
          name="description"
          content="Contact the Skillify programme team for course, enrollment, and partnership queries."
        />
      </Helmet>

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.90), oklch(0.99 0.003 240 / 0.98))",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-teal)]">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-[color:var(--brand-navy)] sm:text-5xl">
              Have a question about <span className="text-gradient-brand">Skillify?</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Send course, enrollment, or partnership questions and we will keep the next step clear.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {contactPoints.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[color:var(--border)] bg-white/90 p-5 shadow-sm backdrop-blur"
                >
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-semibold text-[color:var(--brand-navy)]">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-[color:var(--brand-saffron)]/30 bg-[color:var(--brand-saffron)]/10 p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-[color:var(--brand-saffron)]" />
                  <p className="text-sm leading-relaxed text-[color:var(--brand-navy)]">
                    For live contact details, add the official email or phone number and I can wire
                    this form to open a message directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
            Contact Information
          </h2>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
                Faculty Coordinator
              </p>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Dr. XYZ
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
                Email
              </p>
              <a
                href="mailto:skillify@iiitd.ac.in"
                className="text-[color:var(--brand-teal)] hover:underline"
              >
                skillify@iiitd.ac.in
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
                Address
              </p>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                IIIT Delhi, Okhla Industrial Estate, New Delhi - 110020
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Logos section at the end */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.99 0.003 240 / 0.92), oklch(0.99 0.003 240 / 0.88))",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mt-16 border-t border-[color:var(--border)] pt-16">
            <p className="mb-8 text-center text-sm uppercase tracking-widest text-[color:var(--brand-teal)]">
              A partnership between
            </p>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
              <div className="flex h-20 items-center sm:h-24">
                <img src={iiitdLogo} alt="IIIT Delhi" className="h-full w-auto object-contain" />
              </div>
              <span className="font-display text-3xl font-bold text-[color:var(--brand-navy)]">×</span>
              <div className="flex h-16 items-center sm:h-20">
                <img
                  src={meitLogo}
                  alt="Ministry of Electronics and Information Technology"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
