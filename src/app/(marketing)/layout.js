import "../../assets/css/globals.css";
import Script from 'next/script'

export const metadata = {
  title: "Billionaires Kenya",
  //   favicon: VistanaLogo,
  description:
    "Daily News on African Billionaires and Ultra-High Net-Worth Individuals (UHNWIs)",
};

export default function RootLayout({ children }) {
  return (
    /* eslint-disable react/no-unknown-property */
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=PT+Sans:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
      <Script src="https://use.fontawesome.com/09766d6a10.js"></Script>
    </html>
  );
}
