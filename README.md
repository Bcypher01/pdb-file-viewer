This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# PDB Uploader and Viewer

This is a **Next.js** project that allows users to upload and visualize Protein Data Bank (PDB) files using the **NGL Viewer** library. It is designed with a modern **dark theme** and utilizes **Tailwind CSS** for styling.

## Features

- **File Upload**: Users can upload `.pdb` files to view 3D molecular structures.
- **3D Visualization**: Renders molecular structures interactively using the NGL Viewer.
- **Responsive Design**: Optimized for various screen sizes with Tailwind CSS.
- **Dark Theme**: Provides a visually appealing interface suitable for scientific applications.

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

## Project Structure

- **`components/FileUploader.js`**: Handles file selection and reading of PDB files.
- **`components/PdbViewer.js`**: Integrates the NGL Viewer library to render 3D molecular structures.
- **`pages/index.js`**: Combines the components and defines the main layout and logic of the app.
- **`tailwind.config.js`**: Configures Tailwind CSS for styling.

## Technology Stack

- **Next.js**: Framework for building React applications.
- **NGL Viewer**: Library for interactive 3D visualization of molecular structures.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
