import { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { toast } from "sonner";

import iiitdLogo from "@/assets/iiitd_logo-removebg-preview.svg";
import meitLogo from "@/assets/meit_logo-removebg-preview.svg";
import coordinatorPhoto from "@/assets/coordinator.png";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success(
      "Thanks. Your contact details are ready to be wired to a live endpoint."
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact - MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. IIITD &amp; MeitY</title>
        <meta
          name="description"
          content="Contact the MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies. programme team for course, enrollment, and partnership queries."
        />
      </Helmet>

      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />

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
              Have a question about{" "}
              <span className="text-gradient-brand">MultiLevel Capacity Building and Skilling in Industry-aligned Emerging Technologies.?</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Send course, enrollment, or partnership questions and we will
              keep the next step clear.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">

  {/* Left Contact Card */}
  <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
    <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
      Contact Information
    </h2>

    <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--brand-navy)] break-words">
          Programme Office
        </h3>

        <p className="mt-1 text-lg sm:text-2xl text-[color:var(--muted-foreground)]">
          General Queries
        </p>
      </div>

      <img
        src={coordinatorPhoto}
        alt="Programme Office"
        className="h-28 w-28 sm:h-48 sm:w-48 flex-shrink-0 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-lg mx-auto sm:mx-0"
      />
    </div>

    <div className="mt-8 space-y-5">
      <div className="flex items-start gap-3">
        <Mail className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div className="min-w-0">
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Email
          </p>

          <a
            href="mailto:info@example.com"
            className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline break-all"
          >
            info@example.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div>
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Address
          </p>

          <p className="text-base sm:text-xl text-[color:var(--muted-foreground)]">
            IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Contact Card */}
  <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
    <h2 className="font-display text-xl font-semibold text-[color:var(--brand-navy)]">
      Contact Information
    </h2>

    <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-5 text-center sm:text-left">
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--brand-navy)] break-words">
          Prof. Arun Kumar Bashambu
        </h3>

        <p className="mt-1 text-lg sm:text-2xl text-[color:var(--muted-foreground)]">
          Faculty Coordinator
        </p>
      </div>

      <img
        src={coordinatorPhoto}
        alt="Faculty Coordinator"
        className="h-28 w-28 sm:h-48 sm:w-48 flex-shrink-0 rounded-full object-cover border-4 border-[color:var(--brand-teal)] shadow-lg mx-auto sm:mx-0"
      />
    </div>

    <div className="mt-8 space-y-5">
      <div className="flex items-start gap-3">
        <Mail className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div className="min-w-0">
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Email
          </p>

          <a
            href="mailto:arunbashambu@rediffmail.com"
            className="text-base sm:text-xl text-[color:var(--brand-teal)] hover:underline break-all"
          >
            arunbashambu@rediffmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <MapPin className="mt-1 sm:mt-0.5 h-5 w-5 flex-shrink-0 text-[color:var(--brand-teal)]" />

        <div>
          <p className="text-lg sm:text-xl font-semibold text-[color:var(--brand-navy)]">
            Address
          </p>

          <p className="text-base sm:text-xl text-[color:var(--muted-foreground)]">
            IIIT Delhi, Okhla Phase III, Industrial Estate, New Delhi - 110020
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
        </div>
      </section>
    </>
  );
}