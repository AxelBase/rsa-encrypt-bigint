<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Simple RSA Encrypt with BigInt</title>
  <meta name="description" content="Understand the terms governing use of this educational RSA BigInt demo — for learning purposes only, not for secure communication." />
  <meta property="og:title" content="Terms and Conditions | Simple RSA Encrypt with BigInt" />
  <meta property="og:description" content="Understand the terms governing use of this educational RSA BigInt demo — for learning purposes only, not for secure communication." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: February 17, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Simple RSA Encrypt with BigInt</strong> web utility (the "Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Tool. These terms may be updated; continued use after changes constitutes acceptance.</p>

    <h2>2. Nature of the Tool</h2>
    <p>The Tool is a <strong>free, educational demonstration</strong> of RSA encryption using JavaScript BigInt. It is provided <strong>as-is</strong> for learning purposes only. It is <strong>not</strong> a secure cryptographic service and must <strong>never</strong> be used to protect real sensitive information.</p>

    <h2>3. No Warranty / Disclaimer of Liability</h2>
    <p>The Tool is offered <strong>without any warranties</strong>, express or implied, including but not limited to fitness for a particular purpose or non-infringement. We disclaim all liability for any damages arising from use or inability to use the Tool, including data loss, security breaches, or incorrect results. RSA operations in this demo use weak randomness (Math.random) and <strong>textbook RSA without padding</strong>, making it vulnerable to attacks. <strong>Use at your own risk</strong>.</p>

    <h2>4. Permitted Use</h2>
    <p>You may use the Tool for personal education, experimentation, and demonstration. You agree <strong>not</strong> to:</p>
    <ul>
      <li>Use it for encrypting real private or confidential data</li>
      <li>Attempt to reverse-engineer, misuse, or overload the client-side functionality</li>
      <li>Claim or represent the Tool as a production-grade cryptographic solution</li>
      <li>Use automated means to generate excessive keys or requests</li>
    </ul>

    <h2>5. Intellectual Property</h2>
    <p>The Tool, its design, layout, and educational content are owned by the creator or licensed appropriately. You may not copy, modify, distribute, or create derivative works except for personal, non-commercial study. Linking to the Tool is permitted and encouraged for educational purposes.</p>

    <h2>6. Third-Party Resources</h2>
    <p>The Tool uses open-source libraries and CDNs (Bootstrap, Bootstrap Icons). Their respective licenses apply. We are not responsible for third-party content or services.</p>

    <h2>7. Termination</h2>
    <p>We may discontinue or restrict access to the Tool at any time without notice or liability. These terms survive termination for provisions related to disclaimers and liability.</p>

    <h2>8. Governing Law</h2>
    <p>These Terms are governed by the laws of Norway. Any disputes shall be resolved exclusively in the courts of Gauteng.</p>

    <h2>9. Contact</h2>
    <p>For questions about these Terms, reach out via the contact information provided on the site (if any).</p>

    <p class="italic-note">This Tool exists solely to help users <strong>understand RSA mathematics</strong> in a browser environment. Thank you for using it responsibly and for educational purposes only.</p>
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