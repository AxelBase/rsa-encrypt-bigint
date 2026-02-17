<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What is RSA Encryption? The Basics of Public-Key Cryptography | RSA BigInt Demo Blog</title>
  <meta name="description" content="Learn the fundamentals of RSA encryption, how it uses asymmetric keys for secure communication, and why it remains a cornerstone of modern cryptography." />
  <meta property="og:title" content="What is RSA Encryption? The Basics of Public-Key Cryptography | RSA BigInt Demo Blog" />
  <meta property="og:description" content="Learn the fundamentals of RSA encryption, how it uses asymmetric keys for secure communication, and why it remains a cornerstone of modern cryptography." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>What is RSA Encryption? The Basics of Public-Key Cryptography</p>
  </div>

  <article class="prose">
    <h1>What is RSA Encryption? The Basics of Public-Key Cryptography</h1>
    
    <p class="post-meta">Published: February 10, 2026</p>
    
    <p>RSA encryption is one of the most important inventions in the history of cryptography. Named after its creators Rivest, Shamir, and Adleman, it introduced the concept of asymmetric cryptography in nineteen seventy-seven. Unlike symmetric methods that use the same key for encryption and decryption, RSA relies on a pair of mathematically related keys: a public key that anyone can use to encrypt messages and a private key that only the recipient should know to decrypt them.</p>
    
    <p>The brilliance of RSA lies in its one-way nature. Anyone can encrypt a message using the public key, but only the holder of the private key can decrypt it. This property enables secure communication over insecure channels without ever needing to share a secret key in advance. It forms the foundation for many secure internet protocols used every day.</p>
    
    <h2>Why RSA Matters Today</h2>
    <p>Even with newer algorithms available, RSA continues to play a key role in digital signatures, key exchange, and certificate authorities. Its strength comes from the difficulty of factoring very large composite numbers into their prime factors. When the primes are sufficiently large, reversing the process becomes computationally infeasible with current technology.</p>
    
    <h3>Core Components of RSA</h3>
    <ul>
      <li>A large modulus created by multiplying two secret primes</li>
      <li>A small public exponent that is coprime to a derived value called Euler's totient</li>
      <li>A private exponent calculated to satisfy specific modular arithmetic properties</li>
    </ul>
    
    <p>In practice, messages are converted into numbers smaller than the modulus before encryption. The encrypted result appears random but can be perfectly recovered with the matching private key. This demo utility lets you see the process in action using only the browser's built-in large-number support.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>What makes RSA different from symmetric encryption?</summary>
      <p>RSA uses two keys instead of one, eliminating the need to securely share a key beforehand.</p>
    </details>
    <details>
      <summary>Is RSA still considered secure in two thousand twenty-six?</summary>
      <p>For sufficiently large key sizes like two thousand forty-eight bits or more, yes, although many systems now combine it with hybrid approaches for better performance.</p>
    </details>
    <details>
      <summary>Can anyone encrypt with RSA?</summary>
      <p>Yes, the public key is designed to be freely shared. Only the private key holder can decrypt.</p>
    </details>
    
    <p class="italic-note">Continue exploring the mathematical details in the next articles to understand exactly how these keys are created and used.</p>
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