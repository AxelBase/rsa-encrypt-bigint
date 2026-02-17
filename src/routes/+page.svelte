<script>
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>Simple RSA Encrypt with BigInt — Educational Browser Demo</title>
  <meta name="description" content="Free client-side RSA encryption demo using JavaScript BigInt. Generate keys and encrypt messages entirely in-browser — educational tool only, not for secure use." />
  <meta name="keywords" content="RSA encryption, BigInt RSA, JavaScript cryptography, textbook RSA, client-side encryption, educational crypto demo" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Simple RSA Encrypt with BigInt — Educational Browser Demo" />
  <meta property="og:description" content="Experience raw RSA encryption in your browser with pure JavaScript BigInt. Generate keys, encrypt messages — all client-side, no server, no tracking." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}/" />
  <meta property="og:image" content="{base}/AxelLab-Logo1.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Simple RSA Encrypt with BigInt — Educational Browser Demo" />
  <meta name="twitter:description" content="Browser-based RSA demo using BigInt — learn public-key crypto math without servers or dependencies." />
</svelte:head>

<div class="container py-5">
  <section class="text-center mb-5" in:fade={{ duration: 1000 }}>
    <h1 class="display-3 fw-bold mb-3">AxelBase <span style="color: var(--brand-orange)">Encrypt</span></h1>
    <p class="lead text-muted mx-auto" style="max-width: 600px;">
      Fancy, secure, and privacy-first RSA utility powered by JavaScript BigInt.
    </p>
  </section>

  <div class="row g-4 justify-content-center">
    <div class="col-md-5" in:fly={{ x: -50, duration: 800, delay: 200 }}>
      <div class="glass-card p-5 h-100 text-center">
        <i class="bi bi-key fs-1 mb-3" style="color: var(--brand-orange)"></i>
        <h3>Key Generation</h3>
        <p class="text-muted small mb-4">Create your unique public and private hex keys instantly.</p>
        <a href="{base}/keys" class="btn btn-bubbly w-100">Open Generator</a>
      </div>
    </div>
    <div class="col-md-5" in:fly={{ x: 50, duration: 800, delay: 400 }}>
      <div class="glass-card p-5 h-100 text-center">
        <i class="bi bi-shield-lock fs-1 mb-3" style="color: var(--brand-orange)"></i>
        <h3>Encryption</h3>
        <p class="text-muted small mb-4">Securely encrypt any text message using a public modulus.</p>
        <a href="{base}/encrypt" class="btn btn-bubbly w-100">Open Encryptor</a>
      </div>
    </div>
  </div>

<section id="about" class="mt-5 pt-5 text-center">
  <div class="glass-card p-5">
    <h2 class="fw-bold">About This Utility</h2>
    <p class="lead text-muted mb-4">A simple, browser-only demonstration of RSA encryption using JavaScript's native BigInt</p>

    <p>This web utility is a lightweight, fully client-side educational tool designed to help users understand the core mathematics and mechanics of RSA — the classic public-key encryption algorithm invented in 1977 by Rivest, Shamir, and Adleman. Everything happens directly in your browser: no servers, no data transmission, no external libraries beyond SvelteKit and Bootstrap for layout. The tool uses JavaScript's built-in BigInt type to handle the enormous integers required for realistic RSA key sizes (default 1024 bits, adjustable up to 2048).</p>

    <p>RSA works by generating a pair of keys: a public key (modulus n and exponent e) that anyone can use to encrypt messages, and a private key (exponent d) that only the owner should know for decryption. The security rests on the computational difficulty of factoring the product of two large prime numbers (p × q = n). This demo intentionally implements **textbook (raw) RSA** — pure modular exponentiation without padding schemes like OAEP or PKCS#1 — to keep the focus on the underlying math rather than production hardening.</p>

    <p>Key features include:</p>
    <ul class="list-unstyled text-start mx-auto" style="max-width: 600px;">
      <li><strong>Key Generation</strong>: Create RSA key pairs using a basic Miller-Rabin primality test to find suitable large primes. The public exponent is fixed at 65537 (common and efficient).</li>
      <li><strong>Encryption Only</strong>: Convert plaintext (UTF-8 encoded) to a BigInt, then compute ciphertext = message^e mod n. Output is shown in hexadecimal.</li>
      <li><strong>Pure Client-Side Execution</strong>: All operations — prime finding, modular arithmetic, exponentiation — run locally. Your keys, messages, and results never leave your device.</li>
      <li><strong>Educational Focus</strong>: Ideal for students, developers, or cryptography enthusiasts who want to see RSA "in the raw" without abstractions.</li>
    </ul>

    <p class="mt-4"><strong>Important Disclaimer</strong>: This is **not** a secure encryption tool. It uses non-cryptographically-secure randomness (Math.random), no message padding, and no protections against known textbook RSA attacks (e.g., chosen-ciphertext, small-message patterns). <strong>Never use this utility for real sensitive data</strong>. For production cryptography, rely on audited libraries such as the Web Crypto API, libsodium, or OpenSSL.</p>

    <p>The project aligns with the growing interest in client-side cryptography education, showing how modern browser capabilities (BigInt since 2017–2019 browser support) make classic algorithms accessible without dependencies. Explore the blog for deeper dives into prime testing, modular exponentiation, BigInt handling, and why textbook RSA remains a powerful teaching aid despite its practical limitations.</p>

    <p class="mt-4 text-muted small">Built as a static site with SvelteKit • Deployed on GitHub Pages • Open for learning since February 2026</p>
  </div>
</section>

<section id="how-to-use" class="mt-5 pt-5 text-center">
  <div class="glass-card p-5">
    <h2 class="fw-bold">How to Use This Utility</h2>
    <p class="lead text-muted mb-4">Three simple pages, zero setup — just your browser</p>

    <p>Getting started is straightforward. The tool has only three main pages: Home (this overview), Keys (generation), and Encrypt (encryption). Navigation uses a top bar for easy access. All actions are performed client-side with no login, no upload, and no persistent storage.</p>

    <h4 class="mt-4">Step 1: Generate RSA Keys</h4>
    <p>Navigate to the "Keys" page (or click the link from Home). Enter a bit length (default 1024; recommended range 512–2048 for demo speed vs realism). Click "Generate Keys". After a few seconds (longer for 2048 bits), you'll see:</p>
    <ul class="list-unstyled text-start mx-auto" style="max-width: 600px;">
      <li><strong>Modulus (n)</strong>: the public modulus in hex (product of two primes)</li>
      <li><strong>Public Exponent (e)</strong>: always 10001 in hex (equals 65537)</li>
      <li><strong>Private Exponent (d)</strong>: the secret value (shown for educational completeness)</li>
    </ul>
    <p>Copy the n and e values — these form the public key you'll use next. The private d is displayed so you can conceptually understand decryption, but this tool does not implement it.</p>

    <h4 class="mt-4">Step 2: Encrypt a Message</h4>
    <p>Go to the "Encrypt" page. Paste the Modulus (n) and Public Exponent (e) from the previous step into the respective fields. Type or paste your plaintext message (any string; UTF-8 encoded internally). Click "Encrypt".</p>
    <p>If everything is valid, a hex-encoded ciphertext appears. This is your encrypted result: message^e mod n. The message must be numerically smaller than n — very long texts may trigger an error.</p>

    <h4 class="mt-4">Tips & Best Practices</h4>
    <ul class="list-unstyled text-start mx-auto" style="max-width: 600px;">
      <li>Start with 1024-bit keys for quick results; increase to 2048 for a more realistic feel (takes longer to generate)</li>
      <li>Copy hex values carefully — avoid extra spaces</li>
      <li>Use short test messages first ("Hello RSA!", your name, etc.)</li>
      <li>Results are copyable from readonly textareas</li>
      <li>Refresh the page to start over — nothing is saved</li>
    </ul>

    <p class="mt-4"><strong>Common Errors & Fixes</strong>: Invalid hex → check for typos. Message too large → shorten it or use bigger keys. Generation slow → normal for larger bits; be patient or reduce size.</p>

    <p>This flow lets you experience the full asymmetric encryption cycle (key gen → public-key encrypt) in under a minute, reinforcing why RSA revolutionized secure communication.</p>
  </div>
</section>

<section id="faq" class="mt-5 pt-5 pb-5">
  <div class="glass-card p-4 p-md-5 border-0">
    <div class="text-center mb-5">
      <h2 class="fw-bold display-6">Frequently <span style="color: var(--brand-orange)">Asked Questions</span></h2>
      <p class="text-muted mx-auto" style="max-width: 600px;">Quick answers to common questions about the mathematics and security of this RSA BigInt demo.</p>
    </div>

    <div class="accordion accordion-flush mx-auto custom-faq" style="max-width: 800px;" id="faqAccordion">

      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            Is this tool secure for real encryption?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-start">
            <div class="alert alert-warning border-0 rounded-4 py-2 small mb-2">
              <i class="bi bi-exclamation-triangle-fill me-2"></i><strong>Educational Demo Only</strong>
            </div>
            This tool uses "textbook RSA" without padding (like OAEP), weak randomness, and no side-channel protections. It is deliberately simplified for learning. <strong>Never encrypt real secrets</strong>—use Web Crypto API or OpenSSL for production.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            Why no decryption feature?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-start">
            To keep the scope focused on the asymmetric encryption process. Decryption requires the private key ($d$), which is provided in the generator for educational transparency but left unimplemented to avoid encouraging insecure data handling.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
            How large should I make the keys?
          </button>
        </h2>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-start">
            Start with **1024 bits** for near-instant generation. Use **2048 bits** to see more realistic enterprise-grade sizes. Note that generation time increases exponentially as bit length grows because finding large primes becomes mathematically harder.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
            Does it collect any data?
          </button>
        </h2>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-start">
            <i class="bi bi-shield-check text-success me-2"></i>Zero. The tool is fully static and client-side. No analytics, no logging, and no server interaction. Your keys and messages exist only in your browser's temporary memory.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
            Why does generation take time?
          </button>
        </h2>
        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-start">
            Finding large random primes via **Miller-Rabin** testing is computationally intensive. Larger bit lengths require the browser to perform thousands of high-precision calculations to ensure a number is prime before it can be used in your RSA keypair.
          </div>
        </div>
      </div>

    </div>

    <div class="mt-5 text-center p-4 rounded-4" style="background: var(--brand-orange-light)">
       <p class="mb-0 text-muted small">
        More questions? Explore the <a href="/blog" class="fw-bold text-decoration-none" style="color: var(--brand-orange)">Insights Blog</a> for deep dives into RSA math.
      </p>
    </div>
  </div>
</section>

<style>
  .custom-faq .accordion-item {
    background: var(--input-bg);
    border: 1px solid var(--glass-border) !important;
    border-radius: 18px !important;
    overflow: hidden;
    transition: var(--transition-smooth);
  }

  .custom-faq .accordion-item:hover {
    transform: translateY(-2px);
    border-color: var(--brand-orange) !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .custom-faq .accordion-button {
    background: transparent;
    color: var(--color-text-main);
    font-weight: 600;
    padding: 1.25rem;
    box-shadow: none !important;
  }

  .custom-faq .accordion-button:not(.collapsed) {
    color: var(--brand-orange);
    background: transparent;
    border-bottom: 1px solid var(--glass-border);
  }

  .custom-faq .accordion-button::after {
    filter: sepia(100%) hue-rotate(330deg) saturate(500%); /* Turns arrow orange */
  }

  .custom-faq .accordion-body {
    color: var(--color-text-muted);
    line-height: 1.6;
    background: rgba(255, 255, 255, 0.02);
  }
</style>

</div>