# Karsaaz QR - QR Code Generator

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLOUDFLARE_SITE_KEY="your-cloudflare-turnstile-site-key"
CLOUDFLARE_SECRET_KEY="your-cloudflare-turnstile-secret-key"
```

## Docker Deployment

### Using Docker Compose (Recommended)

1. Ensure you have Docker and Docker Compose installed
2. Set your environment variables in the `.env` file
3. Run the application:
   ```bash
   docker-compose up -d
   ```
4. The application will be available at `http://localhost:3000`

### Using Docker directly

1. Build the Docker image:
   ```bash
   docker build -t karzaazqr .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env karzaazqr
   ```

### Docker Commands

- Stop the application: `docker-compose down`
- View logs: `docker-compose logs -f`
- Rebuild: `docker-compose up --build`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
