<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Modular Exponentiation in RSA Encryption | RSA BigInt Demo Blog</title>
  <meta name="description" content="Dive into modular exponentiation, the heart of RSA encryption, and why efficient computation is essential when working with huge numbers." />
  <meta property="og:title" content="Understanding Modular Exponentiation in RSA Encryption | RSA BigInt Demo Blog" />
  <meta property="og:description" content="Dive into modular exponentiation, the heart of RSA encryption, and why efficient computation is essential when working with huge numbers." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding Modular Exponentiation in RSA Encryption</p>
  </div>

  <article class="prose">
    <h1>Understanding Modular Exponentiation in RSA Encryption</h1>
    
    <p class="post-meta">Published: February 14, 2026</p>
    
    <p>At the core of RSA encryption lies a single powerful operation: raising a number to a very large power and then taking the remainder with respect to another large number. This is called modular exponentiation. In RSA, a plaintext message is first converted to a number smaller than the modulus n, then raised to the power of the public exponent e, and finally reduced modulo n to produce the ciphertext.</p>
    
    <p>Direct calculation of such large exponents would be impossibly slow. For example, raising a number to the power of sixty-five thousand five hundred thirty-seven directly would require billions of multiplications. Instead, efficient algorithms like square-and-multiply reduce the number of operations dramatically. This method repeatedly squares the base and multiplies only when the corresponding bit in the exponent is set.</p>
    
    <p>The beauty of modular arithmetic is that intermediate results are always kept smaller than n by taking the remainder at each step. This prevents numbers from growing uncontrollably and makes the entire process feasible even on everyday devices.</p>
    
    <h2>Why Efficiency Matters</h2>
    <p>Encryption must be fast enough for real-time use, while decryption can afford to be slower since it happens less frequently. The choice of a small public exponent optimizes exactly this trade-off. Decryption uses the much larger private exponent, but the same efficient algorithm keeps it practical.</p>
    
    <h3>Key Properties in Action</h3>
    <ul>
      <li>Modular reduction keeps values manageable</li>
      <li>Square-and-multiply cuts operations to logarithmic time</li>
      <li>Correct inverse exponents guarantee perfect decryption</li>
    </ul>
    
    <p>This demo shows the result of modular exponentiation directly in the browser. You can encrypt short messages and watch how quickly the output appears, even with keys of one thousand twenty-four bits or more. The mathematics ensures that only the correct private key can reverse the operation reliably.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>Why not just multiply repeatedly?</summary>
      <p>Repeated multiplication would take far too long for large exponents; square-and-multiply reduces steps to roughly twice the bit length of the exponent.</p>
    </details>
    <details>
      <summary>Does the message size affect speed?</summary>
      <p>No, speed depends mainly on the exponent and modulus size, not the message length, since the message is reduced modulo n first.</p>
    </details>
    <details>
      <summary>Can modular exponentiation be parallelized?</summary>
      <p>Partially, but the sequential nature of square-and-multiply limits full parallelism in most implementations.</p>
    </details>
    
    <p class="italic-note">In upcoming posts we will see how JavaScript handles these enormous numbers natively and why that matters for educational tools.</p>
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