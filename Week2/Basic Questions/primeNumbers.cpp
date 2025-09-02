#include <iostream>
using namespace std;

bool isPrime(int n)
{
    for (int i = 2; i <= n / 2; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

void printPrime(int n)
{
    for (int i = 1; i <= n; i++)
    {
        if (isPrime(i))
        {
            cout << i << endl;
        }
    }
}

int main()
{
    

    cout << "Because you runned this code, chose one : \n";
    cout << "1. check number is prime or not.\n";
    cout << "2. print prime numbers upto your desired number.\n";
    int answer = 0;
    cout << "(1/2) : ";
    cin >> answer;

    switch (answer)
    {
    case 1:
        cout << "Enter number to check prime or not : ";
        int n;
        cin >> n;
        if (isPrime(n))
        {
            cout << n << " is a prime number.\n";
        }
        else
        {
            cout << n << " is not a prime number.";
        }
        break;
    case 2:
        cout << "Enter number upto where you want primes : ";
        int m;
        cin >> m;
        printPrime(m);
        break;

    default:
        cout << "I consider it as you have no interest in primes( -_- ).\n";
        break;
    }
}
