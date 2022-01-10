a = [2, 3, 4, 6];
n = 4;
k = 9;

function CountLongestSubarrays(arr, n, k) {
    // Sum of all elements in
    // an array
    let i,
        s = 0;
    for (i = 0; i < n; ++i) {
        s += arr[i];
    }

    // If overall sum is not
    // divisible then return
    // 1, as only one subarray
    // of size n is possible
    if (s % k != 0) {
        return 1;
    } else {
        let ini = 0;

        // Index of the first number
        // not divisible by K
        while (ini < n && arr[ini] % k == 0) {
            ++ini;
        }

        let fin = n - 1;

        // Index of the last number
        // not divisible by K
        while (fin >= 0 && arr[fin] % k == 0) {
            --fin;
        }

        let len,
            sum = 0,
            count = 0;

        // Subarray doesn't exist
        if (ini == n) {
            return -1;
        } else {
            len = Math.max(n - 1 - ini, fin);
        }

        // Sum of the window
        for (i = 0; i < len; i++) {
            sum += arr[i];
        }

        if (sum % k != 0) {
            count++;
        }

        // Calculate the sum of rest of
        // the windows of size len
        for (i = len; i < n; i++) {
            sum = sum + arr[i];
            sum = sum - arr[i - len];

            if (sum % k != 0) {
                count++;
            }
        }
        return count;
    }
}
console.log(CountLongestSubarrays(a, n, k));