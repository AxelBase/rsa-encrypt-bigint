<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Limitations and Educational Value of Textbook RSA | RSA BigInt Demo Blog</title>
  <meta name="description" content="Understand the trade-offs of raw textbook RSA, its vulnerabilities, and why it remains an excellent teaching tool for cryptography basics." />
  <meta property="og:title" content="Limitations and Educational Value of Textbook RSA | RSA BigInt Demo Blog" />
  <meta property="og:description" content="Understand the trade-offs of raw textbook RSA, its vulnerabilities, and why it remains an excellent teaching tool for cryptography basics." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Limitations and Educational Value of Textbook RSA</p>
  </div>

  <article class="prose">
    <h1>Limitations and Educational Value of Textbook RSA</h1>
    
    <p class="post-meta">Published: February 22, 2026</p>
    
    <p>Textbook RSA refers to the basic version using pure modular exponentiation without padding, randomization, or hybrid encryption. While mathematically elegant, it has known limitations that make it unsuitable for protecting real sensitive data. The most significant issue is its deterministic nature: the same message encrypted with the same public key always produces the same ciphertext. This allows attackers to recognize repeated messages or exploit patterns through chosen-ciphertext attacks.</p>
    
    <p>Short messages are especially vulnerable because they may fall into ranges where algebraic relationships reveal information. Without padding schemes like OAEP, which add randomness and structure, textbook RSA leaks partial information about the plaintext in some scenarios. Modern cryptography therefore always combines RSA with secure padding and often uses it only for key exchange rather than direct message encryption.</p>
    
    <p>Despite these weaknesses, textbook RSA is unmatched for teaching purposes. It clearly illustrates the core principles: asymmetric keys, modular arithmetic, prime factorization difficulty, and the elegance of public-key cryptography. By removing extra layers, learners can focus purely on the mathematics without distraction.</p>
    
    <h2>Educational Strengths</h2>
    <p>Seeing raw encryption and the exact reversal process builds deep understanding. Experimenting with small keys reveals why larger sizes are necessary, and observing BigInt handling large numbers shows how browser technology supports cryptographic concepts directly.</p>
    
    <h3>When to Use Textbook RSA</h3>
    <ul>
      <li>Learning and demonstrations only</li>
      <li>Understanding foundational algorithms</li>
      <li>Testing mathematical properties in controlled settings</li>
    </ul>
    
    <p>This utility intentionally uses textbook RSA to maximize clarity. It warns users of its demo-only nature and encourages further study of secure real-world variants, helping bridge basic theory to practical cryptography.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>Why not add padding here?</summary>
      <p>Padding would obscure the pure mathematics; the goal is transparent education rather than security.</p>
    </details>
    <details>
      <summary>Can textbook RSA be secure in any case?</summary>
      <p>Only for very specific non-sensitive uses with large random messages; generally no for real protection.</p>
    </details>
    <details>
      <summary>What should I use for actual encryption?</summary>
      <p>Modern protocols like TLS use hybrid systems with secure padding, elliptic curves, or post-quantum alternatives.</p>
    </details>
    
    <p class="italic-note">Thank you for exploring RSA through this series. Return to the demo to experiment and reinforce these concepts hands-on.</p>
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

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    margin-bottom: 1.2rem;
    overflow: hidden;
    transition: var(--transition-smooth);
  }

  .prose details[open] {
    box-shadow: var(--glass-shadow);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    padding: 1.2rem 1.5rem;
    color: var(--color-text-main);
    list-style: none;
    background: linear-gradient(to right, transparent, var(--brand-orange-light));
    transition: var(--transition-smooth);
  }

  .prose summary:hover {
    background: linear-gradient(to right, transparent, rgba(216, 75, 32, 0.15));
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 1rem;
    color: var(--brand-orange);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details[open] summary {
    background: linear-gradient(to right, var(--brand-orange-light), transparent);
  }

  .prose details p {
    margin: 0;
    padding: 0 1.5rem 1.5rem;
    color: var(--color-text-muted);
    border-left: 3px solid var(--brand-orange);
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