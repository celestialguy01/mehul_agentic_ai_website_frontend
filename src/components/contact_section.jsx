import React from 'react';
import ContactForm from "./contact_form.tsx";
import email from "../assets/logo/email.svg";
import call from "../assets/logo/call.svg";
import linkedin from "../assets/logo/linkedin.svg";
import whatsapp from "../assets/logo/whatsapp.svg";

/**
 * ContactSection
 */
export default function ContactSection({
  heading = 'Let’s collaborate on intelligent experiences',
  contactItems = [
    {
      logoSrc: email,
      logoAlt: 'email',
      detail: 'itsmehul01@gmail.com',
      href: 'mailto:itsmehul01@gmail.com',
    },
    {
      logoSrc: whatsapp,
      logoAlt: 'whatsapp',
      detail: '+91 - 9623394530',
      href: 'https://wa.me/919623394530',
    },
    {
      logoSrc: linkedin,
      logoAlt: 'linkedin',
      detail: '/mehulagarwal01',
      href: 'https://www.linkedin.com/in/mehulagarwal01/',
    },
    {
      logoSrc: call,
      logoAlt: 'phone',
      detail: '+91 - 9623394530',
      href: 'tel:+919623394530',
    },
  ]
  
}) {
  return (
    <section
      id="contact"
      aria-label="Contact"
      data-testid="contact-section"
      className="flex flex-col items-center gap-y-[8px] md:gap-y-[48px] w-full"
    >
      <h2 className="text-center text-h2">{heading}</h2>

      {/* Contact body */}
      <div
        data-testid="contact-body"
        className="
          flex flex-col
          w-full min-w-0
          gap-y-[48px]
          md:flex-row
          md:items-start
          md:gap-x-[100px]
        "
      >
        {/* Left column: Contact form */}
        <div
          data-testid="contact-col-left"
          className="w-full md:basis-[60%] min-w-0"
        >
          <ContactForm data-testid="contact-form" />
        </div>

        {/* Right column: Contact info */}
        <div
          data-testid="contact-col-right"
          aria-label="Contact information"
          className="
            w-full
            md:basis-[40%]
            min-w-0
            flex
            md:items-center
            md:justify-center
          "
        >
          <address
            aria-label="Contact details"
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: 0 }}
          >
            {contactItems.slice(0, 4).map((item, idx) => {
              const key = `contact-row-${idx + 1}`;
              const logoTestId = `logo-${idx + 1}`;
              const detailTestId = `contact-detail-${idx + 1}`;

              return (
                <div
                  key={key}
                  data-testid={key}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  {item.logoSrc ? (
                    <img
                      data-testid={logoTestId}
                      src={item.logoSrc}
                      alt={item.logoAlt || ''}
                      loading="lazy"
                      style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }}
                    />
                  ) : (
                    <div
                      data-testid={logoTestId}
                      aria-hidden
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 6,
                        background: '#e5e7eb',
                        flexShrink: 0
                      }}
                    />
                  )}

                  <div data-testid={detailTestId} className="text-body-1">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                        {item.detail}
                      </a>
                    ) : (
                      <div>{item.detail}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </address>
        </div>
      </div>
    </section>
  );
}
