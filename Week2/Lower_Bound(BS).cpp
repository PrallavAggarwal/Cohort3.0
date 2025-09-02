#include <iostream>
#include<vector>
using namespace std;

int lower_bound(vector<int> arr,int x){
  int n = arr.size();
  int l = 0; int h = n-1;
  int ans = n;
  while (l<=h) {
    int mid = l + (h-l)/2;
    if (arr[mid] >= x) {
      ans = mid;
      h = mid-1;
    }
    else{
      l = mid+1;
    }
  }
  return ans;
}



int main (int argc, char *argv[]) {
  vector<int> arr = {1,2,3,4,5,6,8,10,11};
  int x = 9;
  int ans = lower_bound(arr, x);
  cout<<"lower_bound for given array : "<<ans;
  return 0;
}
