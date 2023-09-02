It enbles 2 parties to generate a shared and secret key for encryption and decryption of their communication.

# 1. Public Key Generation: Both parties agree on prime numnber "p" and a base "g". These number are public.

```
let p = 23; //prime number
let g = 5;  //base
```

# 2. Private Key Selection: Both parties choose a private key. Party1 "Alice" and party2 "Bob".

```
let a = 6;// Alice
let b = 15;// Bob
```

# 3. Public Value Calculation: "Alice" and "Bob" compute their public values using private keys and the base "g". "Alice" computes (A = g^a mod p) and "Bob" computes (B=g^b mod p). These values are exchanged.

```
let A = Math.pow(g,a)%p; // Alice public value
let B = Math.pow(g,b)%p; // Bob public value
```

# 4. Shared Secret Calculation: After exchanging their public values, Alice and Bob compute the shared secret key. Alice computes (s = B^a mod p) and Bob computes (s = A^b mod p).Both calculations result in the same shared secret key "s".

```
let secretAlice = Math.pow(B,a) % p; // Alice's secret key
let secretBob = Math.pow(A,b) % p; // Bob's secret key
```

# NOTE: Diffie-Hellman key exchange algorithm is secure against eavesdroppers, it is vulnerable to man-in-the-middle attacks where an attacker intercepts the public values and sends their own in place, effectively impersonating Alice or Bob. To prevent such attacks, additional authentication methods are typically used in conjunction with the Diffie-Hellman key exchange.
