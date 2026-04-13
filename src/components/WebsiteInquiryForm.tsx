import { type FormEvent, useState } from "react";
import { useLeadFormSubmission } from "@/hooks/useLeadFormSubmission";
import { cn } from "@/lib/utils";

const monthlyVolumeRangeOptions = ["1K-5K", "5K-20K", "20K-50K", "50K+"] as const;

const monthlyVolumeGroups = [
  {
    key: "a4",
    title: "A4",
    description: "Regular office prints, invoices, reports, and everyday business pages.",
  },
  {
    key: "a3",
    title: "A3 / A3+",
    description: "Larger documents, drawings, posters, presentations, and higher-coverage jobs.",
  },
  {
    key: "speciality",
    title: "Photo Paper / Speciality Paper",
    description: "Photo paper, art paper, sticker media, textured sheets, and custom paper jobs.",
  },
] as const;

const currentMachineTypeOptions = ["Inkjet", "Laser", "Copier", "Not using"] as const;
const currentBrandOptions = ["HP", "Canon", "Epson", "Konica", "Other"] as const;
const requirementTypeOptions = ["Purchase", "Rental (MPS - only for corporate)"] as const;

const usageTypeOptions = [
  "Office",
  "Print Shop / Photocopy Centre",
  "Corporate / MSME",
  "Education / Publication",
  "Other",
] as const;

const buyingTimelineOptions = ["Immediate", "Within 1 Month", "1-3 Months", "Just Exploring"] as const;

const whyChooseUsPoints = [
  "Trusted by 300+ Businesses",
  "Same-day Demo / Delivery Available in Mumbai",
  "Strong Service & Support Team",
] as const;

const inquiryRequiredFields = [
  "name",
  "phone_number",
  "current_machine_type",
  "current_brand",
  "requirement_type",
  "usage_type",
  "buying_timeline",
  "business_location",
] as const;

type InquiryRequiredField = (typeof inquiryRequiredFields)[number];

const inquiryRequiredFieldMessages: Record<InquiryRequiredField, string> = {
  name: "Please enter your name.",
  phone_number: "Please enter a valid 10-digit phone number.",
  current_machine_type: "Please select the current machine type.",
  current_brand: "Please select the current brand.",
  requirement_type: "Please select requirement type.",
  usage_type: "Please select usage type.",
  buying_timeline: "Please select buying timeline.",
  business_location: "Please enter city, location, or pincode.",
};

const phoneNumberPattern = /^\d{10}$/;

type WebsiteInquiryFormProps = {
  sectionId?: string;
  className?: string;
  containerClassName?: string;
  formId?: string;
  formName?: string;
  successMessage?: string;
};

const defaultMapFields = (fields: Record<string, string>) => ({
  name: fields.name,
  monthly_volume_a4_color: fields.monthly_volume_a4_color,
  monthly_volume_a4_monochrome: fields.monthly_volume_a4_monochrome,
  monthly_volume_a3_color: fields.monthly_volume_a3_color,
  monthly_volume_a3_monochrome: fields.monthly_volume_a3_monochrome,
  monthly_volume_speciality_color: fields.monthly_volume_speciality_color,
  monthly_volume_speciality_monochrome: fields.monthly_volume_speciality_monochrome,
  phone_number: fields.phone_number,
  current_machine_type: fields.current_machine_type,
  current_brand: fields.current_brand,
  requirement_type: fields.requirement_type,
  usage_type: fields.usage_type,
  usage_type_other: fields.usage_type_other,
  buying_timeline: fields.buying_timeline,
  business_location: fields.business_location,
  message: fields.message,
});

const WebsiteInquiryForm = ({
  sectionId,
  className,
  containerClassName,
  formId = "website-inquiry-form",
  formName = "Website Inquiry Form",
  successMessage = "Your request has been sent. Our team will get in touch soon.",
}: WebsiteInquiryFormProps) => {
  const { isSubmitting, handleSubmit } = useLeadFormSubmission({
    formId,
    formName,
    successMessage,
    mapFields: defaultMapFields,
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<InquiryRequiredField, string>>>({});

  const validateRequiredField = (field: InquiryRequiredField, value: string) => {
    if (!value) {
      return inquiryRequiredFieldMessages[field];
    }

    if (field === "phone_number" && !phoneNumberPattern.test(value)) {
      return inquiryRequiredFieldMessages.phone_number;
    }

    return "";
  };

  const validateInquiryForm = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const errors: Partial<Record<InquiryRequiredField, string>> = {};

    inquiryRequiredFields.forEach((field) => {
      const rawValue = String(data.get(field) || "").trim();
      const value = field === "phone_number" ? rawValue.replace(/\D/g, "") : rawValue;
      const errorMessage = validateRequiredField(field, value);

      if (errorMessage) {
        errors[field] = errorMessage;
      }
    });

    return errors;
  };

  const handleFormInput = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) {
      return;
    }

    const targetName = target.name;

    if (!inquiryRequiredFields.includes(targetName as InquiryRequiredField)) {
      return;
    }

    const field = targetName as InquiryRequiredField;

    if (field === "phone_number" && target instanceof HTMLInputElement) {
      const onlyDigits = target.value.replace(/\D/g, "").slice(0, 10);
      target.value = onlyDigits;
    }

    const normalizedValue = field === "phone_number" ? target.value.replace(/\D/g, "") : target.value.trim();
    const errorMessage = validateRequiredField(field, normalizedValue);

    setFormErrors((prev) => {
      const next = { ...prev };

      if (errorMessage) {
        next[field] = errorMessage;
      } else {
        delete next[field];
      }

      return next;
    });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const errors = validateInquiryForm(form);

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setFormErrors(errors);

      const firstInvalidField = inquiryRequiredFields.find((field) => errors[field]);
      const firstInvalidElement = firstInvalidField
        ? (form.elements.namedItem(firstInvalidField) as HTMLElement | null)
        : null;

      firstInvalidElement?.focus();
      return;
    }

    setFormErrors({});
    await handleSubmit(event);
  };

  const fieldClassName = (field: InquiryRequiredField) =>
    `mt-2 w-full rounded-lg border bg-background px-3 py-2 text-sm ${
      formErrors[field] ? "border-destructive focus:ring-destructive" : "border-input"
    }`;

  return (
    <section id={sectionId} className={cn("section-padding pt-8 md:pt-10 lg:pt-12", className)}>
      <div className={cn("container mx-auto mt-8 max-w-5xl md:mt-10", containerClassName)}>
        <form
          onSubmit={handleFormSubmit}
          onInput={handleFormInput}
          noValidate
          className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-7"
        >
          <div className="rounded-2xl border border-border bg-[linear-gradient(120deg,#ffffff_0%,#f6f9ff_100%)] p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Website Inquiry Form</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">
              Talk to our experts for the right solution & best pricing
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Focused consultation for Epson WorkForce and Konica Minolta requirements.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-highlight/20 bg-white px-3 py-1 text-xs font-semibold text-navy">
                Epson WorkForce
              </span>
              <span className="rounded-full border border-highlight/20 bg-white px-3 py-1 text-xs font-semibold text-navy">
                Konica Minolta
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-background p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Section 1</p>
                <h4 className="mt-1 font-display text-xl font-bold text-navy">Quick Lead Capture</h4>
              </div>
              <p className="text-xs font-semibold text-muted-foreground">Required fields marked with *</p>
            </div>
            {Object.keys(formErrors).length > 0 ? (
              <p className="mt-3 rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">
                Please correct the highlighted fields before submitting.
              </p>
            ) : null}

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-navy">Name *</label>
                <input
                  name="name"
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? "website-inquiry-error-name" : undefined}
                  className={fieldClassName("name")}
                  required
                />
                {formErrors.name ? (
                  <p id="website-inquiry-error-name" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Phone Number *</label>
                <input
                  name="phone_number"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="\d{10}"
                  placeholder="Enter mobile number"
                  aria-invalid={Boolean(formErrors.phone_number)}
                  aria-describedby={formErrors.phone_number ? "website-inquiry-error-phone" : undefined}
                  className={fieldClassName("phone_number")}
                  required
                />
                {formErrors.phone_number ? (
                  <p id="website-inquiry-error-phone" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.phone_number}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Monthly Print Volume</p>
              <div className="mt-3 grid gap-3 lg:grid-cols-3">
                {monthlyVolumeGroups.map((group) => (
                  <div key={group.key} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-display text-xl font-bold text-navy">{group.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{group.description}</p>
                    <div className="mt-4 grid gap-3">
                      <div>
                        <label className="text-xs font-semibold text-navy">Color</label>
                        <select
                          name={`monthly_volume_${group.key}_color`}
                          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select range</option>
                          {monthlyVolumeRangeOptions.map((option) => (
                            <option key={`${group.key}-color-${option}`} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-navy">Monochrome</label>
                        <select
                          name={`monthly_volume_${group.key}_monochrome`}
                          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select range</option>
                          {monthlyVolumeRangeOptions.map((option) => (
                            <option key={`${group.key}-mono-${option}`} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <details open className="mt-5 rounded-2xl border border-border bg-background p-5">
            <summary className="cursor-pointer list-none">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Section 2</p>
              <h4 className="mt-1 font-display text-xl font-bold text-navy">Detailed Requirements</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your current setup and buying intent to get a precise recommendation.
              </p>
            </summary>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Current Setup</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Current Machine Type *</label>
                <select
                  name="current_machine_type"
                  aria-invalid={Boolean(formErrors.current_machine_type)}
                  aria-describedby={formErrors.current_machine_type ? "website-inquiry-error-machine-type" : undefined}
                  className={fieldClassName("current_machine_type")}
                  required
                >
                  <option value="">Select current machine</option>
                  {currentMachineTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.current_machine_type ? (
                  <p id="website-inquiry-error-machine-type" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.current_machine_type}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Current Brand *</label>
                <select
                  name="current_brand"
                  aria-invalid={Boolean(formErrors.current_brand)}
                  aria-describedby={formErrors.current_brand ? "website-inquiry-error-brand" : undefined}
                  className={fieldClassName("current_brand")}
                  required
                >
                  <option value="">Select current brand</option>
                  {currentBrandOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.current_brand ? (
                  <p id="website-inquiry-error-brand" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.current_brand}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Requirement Details</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Requirement Type *</label>
                <select
                  name="requirement_type"
                  aria-invalid={Boolean(formErrors.requirement_type)}
                  aria-describedby={formErrors.requirement_type ? "website-inquiry-error-requirement-type" : undefined}
                  className={fieldClassName("requirement_type")}
                  required
                >
                  <option value="">Select requirement type</option>
                  {requirementTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.requirement_type ? (
                  <p id="website-inquiry-error-requirement-type" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.requirement_type}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Usage Type *</label>
                <select
                  name="usage_type"
                  aria-invalid={Boolean(formErrors.usage_type)}
                  aria-describedby={formErrors.usage_type ? "website-inquiry-error-usage-type" : undefined}
                  className={fieldClassName("usage_type")}
                  required
                >
                  <option value="">Select usage type</option>
                  {usageTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.usage_type ? (
                  <p id="website-inquiry-error-usage-type" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.usage_type}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Buying Timeline *</label>
                <select
                  name="buying_timeline"
                  aria-invalid={Boolean(formErrors.buying_timeline)}
                  aria-describedby={formErrors.buying_timeline ? "website-inquiry-error-buying-timeline" : undefined}
                  className={fieldClassName("buying_timeline")}
                  required
                >
                  <option value="">Select buying timeline</option>
                  {buyingTimelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.buying_timeline ? (
                  <p id="website-inquiry-error-buying-timeline" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.buying_timeline}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-navy">Other (Mention)</label>
                <input
                  name="usage_type_other"
                  placeholder="Mention only if you selected Other"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Additional Fields</p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-navy">City / Location / Pincode *</label>
                <input
                  name="business_location"
                  placeholder="Mumbai, MMR, Boisar, Khopoli, Navi Mumbai, 400001, etc."
                  aria-invalid={Boolean(formErrors.business_location)}
                  aria-describedby={formErrors.business_location ? "website-inquiry-error-location" : undefined}
                  className={fieldClassName("business_location")}
                  required
                />
                {formErrors.business_location ? (
                  <p id="website-inquiry-error-location" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.business_location}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-navy">Message / Specific Requirement</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share your print requirement (optional)"
                  className="mt-2 min-h-[92px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>
          </details>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Get Best Price & Demo"}
            </button>
            <a
              href="https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20help%20with%20a%20printer%20requirement."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-widest text-navy transition hover:border-highlight hover:text-highlight"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-5 rounded-2xl border border-highlight/20 bg-[#fff8eb] p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why Choose Us?</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {whyChooseUsPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white bg-white/90 p-3 text-sm font-medium text-navy">
                  {point}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-navy">
              Reduce Your Printing Cost by Up to 25% - Get Free Consultation
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WebsiteInquiryForm;
