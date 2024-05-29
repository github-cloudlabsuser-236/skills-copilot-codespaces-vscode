def prime(n):
    """
    Return a list of the prime numbers less than n.
    """
    if n < 2:
        return []
    primes = [2]
    for i in range(3, n):
        for p in primes:
            if i % p == 0:
                break
        else:
            primes.append(i)
    return primes