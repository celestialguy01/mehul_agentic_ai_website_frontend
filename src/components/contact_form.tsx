import React, { useId, useRef, useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type ContactFormProps = {
  onSubmit: (data: ContactFormData) => Promise<void> | void;
  disabled?: boolean;
  className?: string; // passthrough for spacing/gaps to contact column
  inputClass?: string;
  labelClass?: string;
  fieldWrapperClass?: string;
  buttonClass?: string;
  gapToContactColumn?: string; // e.g. "lg:ml-12 xl:ml-16"
};

// UI_Design_Styler tokens (defaults)
const DEFAULT_INPUT =
  "w-full h-12 rounded-[10px] bg-[#FFFFFF] border border-[#E5E7EB] " +
  "text-body text-[14px] text-[#1A1A1A] placeholder-[#9CA3AF] " +
  "px-4 transition duration-200 ease-out outline-none " +
  "focus:border-[#5A4FCF] focus:ring-2 focus:ring-[#C1A1FF]/40";
const DEFAULT_LABEL =
  "text-h text-[15px] md:text-[16px] text-[#374151] mb-2";
const DEFAULT_FIELD_WRAPPER = "mt-4 flex flex-col";
const DEFAULT_BUTTON =
  "inline-flex items-center justify-center h-12 rounded-[10px] " +
  "px-6 text-h text-[16px] bg-[#000000] text-white " +
  "mx-auto btn-interaction  bg-[#000000] text-white hover:bg-[#111111] rounded-[10px] px-4 py-2";
const DEFAULT_FORM = "grid grid-cols-1";

function validate(values: ContactFormData) {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  return errors;
}

export default function ContactForm({
  onSubmit,
  disabled = false,
  className,
  inputClass,
  labelClass,
  fieldWrapperClass,
  buttonClass,
  gapToContactColumn,
}: ContactFormProps) {
  const uid = useId();
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const companyId = `${uid}-company`;
  const messageId = `${uid}-message`;

  const nameErrId = `${nameId}-error`;
  const emailErrId = `${emailId}-error`;
  const messageErrId = `${messageId}-error`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [pending, setPending] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const isDisabled = disabled || pending;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDisabled) return;

    const values: ContactFormData = {
      name,
      email,
      company: company || undefined,
      message,
    };

    const v = validate(values);
    setErrors(v);

    if (Object.keys(v).length > 0) {
      // focus first invalid
      if (v.name) nameRef.current?.focus();
      else if (v.email) emailRef.current?.focus();
      else if (v.message) messageRef.current?.focus();
      return;
    }

    try {
      setPending(true);
      await onSubmit(values);
      // clear on success
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setErrors({});
    } finally {
      setPending(false);
    }
  }

  const formClass = [DEFAULT_FORM, gapToContactColumn, className].filter(Boolean).join(' ');
  const labelToken = labelClass || DEFAULT_LABEL;
  const inputToken = inputClass || DEFAULT_INPUT;
  const wrapperToken = fieldWrapperClass || DEFAULT_FIELD_WRAPPER;
  const buttonToken = buttonClass || DEFAULT_BUTTON;

  return (
    <form className={formClass} onSubmit={handleSubmit} noValidate aria-busy={pending} aria-label="Contact form">
      {/* Name */}
      <div className={wrapperToken}>
        <label htmlFor={nameId} className={labelToken}>
          Name
        </label>
        <input
          id={nameId}
          ref={nameRef}
          name="name"
          type="text"
          autoComplete="name"
          className={inputToken}
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? nameErrId : undefined}
          disabled={isDisabled}
        />
        {errors.name && (
          <p id={nameErrId} className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className={wrapperToken}>
        <label htmlFor={emailId} className={labelToken}>
          Email
        </label>
        <input
          id={emailId}
          ref={emailRef}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          className={inputToken}
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? emailErrId : undefined}
          disabled={isDisabled}
        />
        {errors.email && (
          <p id={emailErrId} className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Company / Organization (optional) */}
      <div className={wrapperToken}>
        <label htmlFor={companyId} className={labelToken}>
          Company / Organization <span className="text-[#6B7280] font-normal">(optional)</span>
        </label>
        <input
          id={companyId}
          ref={companyRef}
          name="company"
          type="text"
          autoComplete="organization"
          className={inputToken}
          placeholder="Your company (optional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          aria-required="false"
          aria-invalid={false}
          disabled={isDisabled}
        />
      </div>

      {/* Message */}
      <div className={[wrapperToken, 'mb-0'].join(' ')}>
        <label htmlFor={messageId} className={labelToken}>
          Message
        </label>
        <textarea
          id={messageId}
          ref={messageRef}
          name="message"
          className={`py-3 resize-y ${inputToken} min-h-[120px]`}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? messageErrId : undefined}
          disabled={isDisabled}
        />
        {errors.message && (
          <p id={messageErrId} className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button (acts as visual anchor). Last input -> button spacing 32px */}
      <div className="flex justify-center mt-8">
        <button type="submit" className={buttonToken} disabled={isDisabled} aria-label="Send message">
          Send message
        </button>
      </div>
    </form>
  );
}