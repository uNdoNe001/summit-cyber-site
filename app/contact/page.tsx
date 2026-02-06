import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Summit Cyber Group" };

export default function ContactPage() {
  return (
    <div className="py-14">
      <h1 className="hacker text-3xl">Request Scoping</h1>
      <p className="mt-2 text-neutral-300 text-sm">
        We’ll reply with a tailored question set within 1 business day.
      </p>
      <ContactForm />
      <p className="mt-6 text-xs text-neutral-500">
        By submitting, you agree to evidence handling under NDA for scoping. We never store PII beyond what’s needed to contact you.
      </p>
    </div>
  );
}
