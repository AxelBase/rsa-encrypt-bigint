// src/lib/rsa-bigint.js
// All RSA logic in this single file: prime generation, key pair, encryption, helpers.

// Helper: Generate random BigInt with specified bit length
function randomBigInt(bits) {
  let num = 0n;
  for (let i = 0; i < Number(bits); i++) {
    num = (num << 1n) | BigInt(Math.floor(Math.random() * 2));
  }
  return num | (1n << (bits - 1n)); // Ensure it's odd and has exact bit length
}

// Helper: Modular exponentiation (built-in ** works but custom for safety)
function modPow(base, exp, mod) {
  let result = 1n;
  base = base % mod;
  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % mod;
    }
    exp = exp >> 1n;
    base = (base * base) % mod;
  }
  return result;
}

// Helper: Miller-Rabin primality test (basic, with fixed witnesses for demo)
function isPrime(n, k = 5n) {
  if (n <= 1n || n === 4n) return false;
  if (n <= 3n) return true;

  // Write n as d*2^r + 1
  let r = 0n;
  let d = n - 1n;
  while (d % 2n === 0n) {
    d /= 2n;
    r += 1n;
  }

  // Witnesses: for demo, use deterministic small set (good for n < 3,317,044,064,679,887,385,961,981)
  const witnesses = [2n, 3n, 5n, 7n, 11n, 13n, 23n, 29n, 31n, 37n].slice(0, Number(k));

  for (let a of witnesses) {
    if (a >= n) break;
    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) continue;

    let cont = false;
    for (let i = 1n; i < r; i++) {
      x = (x * x) % n;
      if (x === n - 1n) {
        cont = true;
        break;
      }
    }
    if (cont) continue;
    return false;
  }
  return true;
}

// Generate prime of approx bit length
function generatePrime(bits) {
  while (true) {
    let candidate = randomBigInt(bits) | 1n; // Ensure odd
    if (isPrime(candidate)) return candidate;
  }
}

// Helper: Extended Euclidean for GCD and inverse
function egcd(a, b) {
  if (a === 0n) return [b, 0n, 1n];
  const [g, y, x] = egcd(b % a, a);
  return [g, x - (b / a) * y, y];
}

function modInverse(a, m) {
  const [g, x] = egcd(a, m);
  if (g !== 1n) throw new Error('No modular inverse');
  return (x % m + m) % m;
}

// FR-1: Generate key pair
export function generateKeys(bitLength = 1024n) {
  const halfBits = bitLength / 2n;
  const p = generatePrime(halfBits);
  const q = generatePrime(halfBits);
  const n = p * q;
  const phi = (p - 1n) * (q - 1n);
  const e = 65537n; // Common public exponent
  if (egcd(e, phi)[0] !== 1n) throw new Error('e not coprime');
  const d = modInverse(e, phi);
  return { n: n.toString(16), e: e.toString(16), d: d.toString(16) };
}

// Helper: String to BigInt (UTF-8 hex)
function stringToBigInt(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  let hex = '0x';
  for (let byte of bytes) {
    hex += byte.toString(16).padStart(2, '0');
  }
  return BigInt(hex);
}

// FR-2: Encrypt message
export function encrypt(message, nHex, eHex) {
  const n = BigInt('0x' + nHex);
  const e = BigInt('0x' + eHex);
  const msgBigInt = stringToBigInt(message);
  if (msgBigInt >= n) throw new Error('Message too large for key');
  const ciphertext = modPow(msgBigInt, e, n);
  return ciphertext.toString(16);
}