import { Helmet } from "react-helmet";
export default function SEO({ title }) {
    return (
        <Helmet>
        <title>Roboway || {title}</title>
        <meta name="description" content="Roboway Technologies brings safety using IOT and AI" />
        <meta name="keywords" content="Community, Technology, Safety Device, Robotics, BD, Bike Device, Security" />
        <meta name="author" content="Roboway Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="apple-mobile-web-app-title" content="Roboway Technologies" />
        <meta name="application-name" content="Roboway Technologies" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Roboway Technologies" />
        <meta property="og:type" content="Safety Tech" />
        <meta property="og:image" content="/metaCover.png" />
        <meta property="og:url" content="http://robowaytech-frontend.vercel.app" />
        <meta name="twitter:card" content="Roboway Technologies" />
        <meta property="og:site_name" content="Roboway Technologies, com." />
        <meta name="twitter:image:alt" content="Roboway Technologies" />
        </Helmet>
    );
}



    // Path: src\pages\components\Navbar.js
// Compare this snippet from src\pages\Signup.js:
//
