<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How RSA Key Generation Works with Large Primes | RSA BigInt Demo Blog</title>
  <meta name="description" content="Understand the step-by-step process of RSA key generation, from finding large prime numbers to computing the public and private exponents." />
  <meta property="og:title" content="How RSA Key Generation Works with Large Primes | RSA BigInt Demo Blog" />
  <meta property="og:description" content="Understand the step-by-step process of RSA key generation, from finding large prime numbers to computing the public and private exponents." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How RSA Key Generation Works with Large Primes</p>
  </div>

  <article class="prose">
    <h1>How RSA Key Generation Works with Large Primes</h1>
    
    <p class="post-meta">Published: February 12, 2026</p>
    
    <p>Generating an RSA key pair is the first and most critical step in using the algorithm. The security of the entire system depends on the difficulty of factoring the product of two large prime numbers. The process begins by selecting two distinct large primes, commonly called p and q. These primes should be roughly the same size and chosen randomly to avoid predictability.</p>
    
    <p>Once p and q are selected, the modulus n is calculated by multiplying them together. This n becomes part of both the public and private keys and is the number that must remain hard to factor. Next, Euler's totient function is computed using the formula phi equals p minus one times q minus one. This value represents the count of integers up to n that are coprime with it.</p>
    
    <p>A small public exponent e is then chosen, most commonly sixty-five thousand five hundred thirty-seven. This number must be coprime with phi, meaning their greatest common divisor is one. Finally, the private exponent d is found such that d times e equals one modulo phi. This modular inverse ensures that encryption followed by decryption returns the original message.</p>
    
    <h2>Importance of Prime Quality</h2>
    <p>The strength of RSA rests entirely on the size and randomness of the primes. Small or poorly chosen primes make factoring feasible. Modern standards recommend at least one thousand twenty-four bits total, with two thousand forty-eight bits preferred for long-term security.</p>
    
    <h3>Common Choices in Practice</h3>
    <ul>
      <li>Public exponent of sixty-five thousand five hundred thirty-seven for efficiency</li>
      <li>Balanced prime sizes to avoid attacks that exploit imbalance</li>
      <li>Strong randomness to prevent predictable key generation</li>
    </ul>
    
    <p>In this browser-based demo, you can experiment with different key sizes and observe how the resulting numbers grow exponentially while still allowing fast encryption thanks to clever mathematical shortcuts.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>Why is the public exponent usually small?</summary>
      <p>A small e makes encryption faster, while the private exponent d handles the heavier computation during decryption.</p>
    </details>
    <details>
      <summary>What happens if primes are too close together?</summary>
      <p>It becomes easier to factor n using difference-of-squares techniques, weakening security.</p>
    </details>
    <details>
      <summary>Can the same primes be reused?</summary>
      <p>No, reusing primes across different keys compromises all related keys if one is factored.</p>
    </details>
    
    <p class="italic-note">Next, explore how these keys are actually used to transform messages into secure ciphertext.</p>
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