import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COURSES } from "@/config/courses";

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
          content="Contact the Skillify IIITD and MEIT programme team for course, enrollment, and partnership queries."
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

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[var(--shadow-navy)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[color:var(--brand-navy)]">
                  Full name
                  <Input required name="name" placeholder="Your name" className="h-11 bg-white" />
                </label>
                <label className="space-y-2 text-sm font-medium text-[color:var(--brand-navy)]">
                  Email
                  <Input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 bg-white"
                  />
                </label>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[color:var(--brand-navy)]">
                  Phone
                  <Input name="phone" type="tel" placeholder="+91" className="h-11 bg-white" />
                </label>
                <label className="space-y-2 text-sm font-medium text-[color:var(--brand-navy)]">
                  Interest
                  <select
                    name="course"
                    className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 block space-y-2 text-sm font-medium text-[color:var(--brand-navy)]">
                Message
                <Textarea
                  required
                  name="message"
                  placeholder="Tell us what you need help with"
                  className="min-h-36 bg-white"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  className="h-11 rounded-full bg-[image:var(--gradient-brand)] px-6 font-semibold text-white shadow-[var(--shadow-navy)] transition-transform hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
                <Link
                  to="/courses"
                  className="text-sm font-semibold text-[color:var(--brand-teal)] hover:text-[color:var(--brand-navy)]"
                >
                  Browse courses
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
