# Gravity Industries Inc. - Corporate Website

A professional corporate website for Gravity Industries Inc., specializing in consultation services for:
- Construction
- Freight & Logistics
- Medical Equipment
- Electronic Devices

## Features

✅ **Professional Corporate Design**
✅ **Appointment Booking System**
✅ **Contact Information & Forms**
✅ **Service Showcase**
✅ **Testimonials & Case Studies**
✅ **Mobile Responsive**
✅ **SEO Optimized**

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: (PostgreSQL/MongoDB - to be configured)
- **Email**: Nodemailer
- **Form Management**: React Hook Form

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Gravityindustries7/Gravityindustriesinc.com.git
cd Gravityindustriesinc.com

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── api/
│       ├── appointments/   # Appointment API routes
│       ├── contact/        # Contact form API
│       └── email/          # Email service
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Testimonials.tsx    # Client testimonials
│   ├── AppointmentForm.tsx # Booking form
│   └── ContactForm.tsx     # Contact form
├── lib/
│   ├── api.ts              # API utilities
│   └── email.ts            # Email configuration
└── styles/
    └── globals.css         # Global styles
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

## Features in Development

- [ ] Home page with hero section
- [ ] Services page (Construction, Freight, Medical Equipment, Electronic Devices)
- [ ] Appointment booking system with calendar
- [ ] Contact form with validation
- [ ] Admin dashboard for appointments
- [ ] Email notifications
- [ ] Testimonials/Case studies section
- [ ] Blog/Resources section

## Deployment

- **Vercel** (Recommended for Next.js)
- **GitHub Pages**
- **AWS**
- **Self-hosted VPS**

## License

Private - Gravity Industries Inc.

## Contact

For inquiries, contact us through the website contact form.
