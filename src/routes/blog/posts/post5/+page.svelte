<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The Role of Prime Testing in RSA: Miller-Rabin Basics | RSA BigInt Demo Blog</title>
  <meta name="description" content="Learn why prime numbers are essential for RSA security and how the Miller-Rabin test quickly identifies suitable large primes." />
  <meta property="og:title" content="The Role of Prime Testing in RSA: Miller-Rabin Basics | RSA BigInt Demo Blog" />
  <meta property="og:description" content="Learn why prime numbers are essential for RSA security and how the Miller-Rabin test quickly identifies suitable large primes." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>The Role of Prime Testing in RSA: Miller-Rabin Basics</p>
  </div>

  <article class="prose">
    <h1>The Role of Prime Testing in RSA: Miller-Rabin Basics</h1>
    
    <p class="post-meta">Published: February 18, 2026</p>
    
    <p>The security of RSA depends entirely on the difficulty of factoring the modulus n, which is the product of two large prime numbers. If either prime is composite instead of prime, the key becomes vulnerable to factorization attacks. Therefore, finding and verifying large primes is a critical step in key generation.</p>
    
    <p>Testing primality for numbers with hundreds of digits cannot be done by simple trial division, as that would take far too long. The Miller-Rabin primality test offers a fast probabilistic solution. It determines whether a number is composite with certainty or prime with very high probability after a small number of rounds.</p>
    
    <p>The test works by writing the candidate number minus one as d times two to the power r, then checking random bases against specific modular conditions. If any base fails the conditions, the number is proven composite. If it passes multiple rounds, it is almost certainly prime. For educational purposes, using a fixed small set of bases provides excellent accuracy for numbers up to certain very large sizes.</p>
    
    <h2>Why Probabilistic Testing Suffices</h2>
    <p>The probability of a composite number passing as prime drops exponentially with more rounds. In practice, even five to ten rounds make false positives vanishingly rare, making the method reliable for RSA key generation in demos and many real-world applications.</p>
    
    <h3>Benefits in Browser Contexts</h3>
    <ul>
      <li>Extremely fast compared to deterministic methods for large numbers</li>
      <li>Requires only modular exponentiation, which BigInt handles efficiently</li>
      <li>Allows interactive key generation without long delays</li>
    </ul>
    
    <p>This utility applies a basic version of Miller-Rabin during key creation. You can generate keys repeatedly and see how quickly suitable primes are found, highlighting the elegance of combining probabilistic testing with BigInt arithmetic.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>Is Miller-Rabin always correct?</summary>
      <p>It proves compositeness definitively but only suggests primality with high confidence; more rounds increase certainty.</p>
    </details>
    <details>
      <summary>Why not use deterministic tests?</summary>
      <p>Deterministic tests exist but are slower for very large numbers; probabilistic methods balance speed and security perfectly for most uses.</p>
    </details>
    <details>
      <summary>Can weak primes be generated accidentally?</summary>
      <p>With good randomness and sufficient rounds, the chance is negligible in practice.</p>
    </details>
    
    <p class="italic-note">The next article explains how these mathematical building blocks come together to encrypt real messages in the browser.</p>
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