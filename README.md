This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
## Backend Setup
You will need to setup [Laravel Backend](https://github.com/princevora/email-validator-laravel-backend) . It will be managing the inputs.

copy the `.env.example` file into your environment's file i.g `.env`
generate a environment key with the command `php artisan key:generate`

and start your server with the command `php artisan serve`

## Environment setup
copy the `.env.example` file into your environment's file i.g `.env.local`
and set the `NEXT_PUBLIC_APP_URL` to your backend url

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
