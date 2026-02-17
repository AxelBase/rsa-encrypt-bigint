<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Simple RSA Encrypt with BigInt</title>
  <meta name="description" content="Read how this client-side RSA encryption demo protects your privacy with zero data collection and no server interaction." />
  <meta property="og:title" content="Privacy Policy | Simple RSA Encrypt with BigInt" />
  <meta property="og:description" content="Read how this client-side RSA encryption demo protects your privacy with zero data collection and no server interaction." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: February 17, 2026</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Simple RSA Encrypt with BigInt</strong> web utility, a purely educational, client-side demonstration tool for RSA encryption using JavaScript BigInt. This Privacy Policy explains our practices regarding any information related to your use of the tool. Because the application runs <strong>entirely in your browser</strong> and is <strong>stateless with no backend</strong>, <strong>we collect, store, transmit, or process zero personal data or user content</strong>. This policy is provided for transparency and to affirm our commitment to maximum privacy.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>We do not collect any information from you, including:</p>
    <ul>
      <li><strong>Personal Identifiable Information</strong> — names, email addresses, IP addresses, or any identifiers</li>
      <li><strong>Usage or Technical Data</strong> — browser type, device details, operating system, or timestamps</li>
      <li><strong>Input Content</strong> — plaintext messages, generated keys, ciphertexts, or any numbers you enter or produce</li>
      <li><strong>Analytics or Tracking Data</strong> — no cookies, pixels, beacons, or third-party analytics scripts are used</li>
    </ul>
    <p>All operations — key generation, encryption, and display — occur <strong>exclusively on your device</strong>. Nothing is ever sent to us or any third party.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use this utility:</p>
    <ul>
      <li>All RSA mathematics and BigInt computations happen locally via JavaScript</li>
      <li>No server requests are made at any point</li>
      <li>Browser temporary memory may hold your inputs during the session, but this is cleared on page refresh or close</li>
      <li>Any copy-to-clipboard or manual saving of keys/ciphertext is handled by your browser only</li>
    </ul>
    <p>This design guarantees <strong>complete data isolation</strong> and makes the tool suitable for educational experimentation without privacy concerns.</p>

    <h2>4. Third-Party Services and CDNs</h2>
    <p>The site uses Bootstrap and Bootstrap Icons via public CDNs for styling. These CDNs may log standard HTTP request metadata (e.g., IP address) when fetching resources, but we have <strong>no control over or access to</strong> that data. No tracking scripts or analytics are embedded.</p>

    <h2>5. Cookies and Similar Technologies</h2>
    <p>We <strong>do not use cookies</strong>, localStorage, sessionStorage, or any persistent client-side storage for tracking purposes. The application remains fully stateless.</p>

    <h2>6. Security Disclaimer</h2>
    <p>While we collect no data, <strong>this is not a production cryptographic tool</strong>. It uses weak randomness (Math.random) and textbook RSA without padding. We recommend using secure, audited libraries for any real encryption needs. Security of your device and browser is your responsibility.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed to children under 13. We do not knowingly collect data from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may revise this Privacy Policy occasionally. Updates will appear here with a new effective date. Continued use constitutes acceptance of changes.</p>

    <p class="italic-note">This utility is built on a <strong>zero-data-collection</strong> model. Your privacy is protected by design — thank you for using it responsibly for educational purposes only.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
    margin: 0 auto;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: var(--color-text-muted);
  }

  .breadcrumbs a {
    color: var(--brand-orange);
    text-decoration: none;
    transition: var(--transition-smooth);
  }

  .breadcrumbs a:hover {
    color: var(--brand-orange-hover);
    text-decoration: underline;
  }

  .breadcrumbs span,
  .breadcrumbs p {
    margin: 0;
    color: var(--color-text-muted);
  }

  .prose {
    line-height: 1.8;
    color: var(--color-text-main);
  }

  .prose .post-meta {
    color: var(--color-text-muted);
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
    font-style: italic;
  }

  .prose h1 {
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text-main);
    line-height: 1.2;
  }

  .prose h2 {
    font-size: 1.9rem;
    font-weight: 600;
    margin: 3rem 0 1rem;
    color: var(--color-text-main);
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.6rem;
  }

  .prose p {
    margin-bottom: 1.4rem;
    font-size: 1.05rem;
  }

  .prose ul {
    list-style: none;
    padding-left: 1.8rem;
    margin-bottom: 1.6rem;
  }

  .prose ul li {
    position: relative;
    margin-bottom: 0.8rem;
    padding-left: 1.4rem;
  }

  .prose ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--brand-orange);
    font-weight: 600;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3.5rem;
    font-size: 1.05rem;
    padding: 1.2rem;
    border-top: 1px dashed var(--glass-border);
  }

  @media (max-width: 768px) {
    .prose h1 {
      font-size: 2.2rem;
    }
    .prose h2 {
      font-size: 1.7rem;
    }
  }
</style>