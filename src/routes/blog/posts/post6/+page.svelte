<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>RSA Encryption in Practice: From Text to Ciphertext | RSA BigInt Demo Blog</title>
  <meta name="description" content="See the complete process of converting plaintext to ciphertext using RSA in a browser environment, step by step." />
  <meta property="og:title" content="RSA Encryption in Practice: From Text to Ciphertext | RSA BigInt Demo Blog" />
  <meta property="og:description" content="See the complete process of converting plaintext to ciphertext using RSA in a browser environment, step by step." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>RSA Encryption in Practice: From Text to Ciphertext</p>
  </div>

  <article class="prose">
    <h1>RSA Encryption in Practice: From Text to Ciphertext</h1>
    
    <p class="post-meta">Published: February 20, 2026</p>
    
    <p>Encrypting a message with RSA involves several straightforward but powerful steps. First, the plaintext string is transformed into a single large integer. This is typically done by encoding the text as bytes using a standard like UTF-eight, then interpreting those bytes as a base-two hundred fifty-six number. The resulting integer must be smaller than the modulus n to ensure correct recovery.</p>
    
    <p>Once converted, the message integer is raised to the power of the public exponent e, and the result is taken modulo n. This produces the ciphertext, another large integer usually displayed in hexadecimal for readability. Because modular exponentiation is used, the operation remains efficient despite the enormous sizes involved.</p>
    
    <p>The ciphertext appears completely random and unrelated to the original message. Only the holder of the matching private exponent d can reverse the process by raising the ciphertext to the power d modulo n, recovering the exact original integer, which is then decoded back to text.</p>
    
    <h2>Textbook vs Real-World RSA</h2>
    <p>This demo uses textbook RSA, meaning raw modular exponentiation without additional padding or randomization. While educational and perfect for understanding the math, real systems add padding to prevent attacks that exploit patterns in short or predictable messages.</p>
    
    <h3>Key Observations in Use</h3>
    <ul>
      <li>Message length is limited by the key size</li>
      <li>Encryption is fast due to small public exponent</li>
      <li>Output is always roughly the same length as the modulus</li>
    </ul>
    
    <p>In the utility, you provide n and e from generated keys, type a message, and instantly see the hexadecimal ciphertext. This hands-on approach helps build intuition about how asymmetric encryption protects data in transit.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>What happens if the message is too large?</summary>
      <p>The encryption fails or produces incorrect results; the message must always be numerically smaller than n.</p>
    </details>
    <details>
      <summary>Why show ciphertext in hex?</summary>
      <p>Hexadecimal is compact and human-readable for large integers, making it easy to copy and verify.</p>
    </details>
    <details>
      <summary>Is the process reversible?</summary>
      <p>Yes, applying the private key reverses encryption exactly, proving the mathematical correctness.</p>
    </details>
    
    <p class="italic-note">The final article discusses why this raw form of RSA is ideal for learning despite not being production-ready.</p>
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