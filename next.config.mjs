/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: false,
  async redirects() {
    return [
      // WordPress default page — redirect to home
      {
        source: "/sample-page",
        destination: "/",
        permanent: true,
      },
      // Catch WordPress trailing-slash URLs and common WP paths
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/xmlrpc.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hemstad",
        destination: "/hemstadning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
