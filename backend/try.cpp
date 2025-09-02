#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> nums = {1,3};
    int n = nums.size();
        int start = 0;
        int end = n - 1;
        int pivotIndex = -1;
        while (start <= end) {
            cout<<"start:"<<start<<endl;
            cout<<"end:"<<end<<endl;
            cout<<"pivotIndex:"<<pivotIndex<<endl;
            int mid = start + (end - start) / 2;
            cout<<"mid:"<<mid<<endl;
            if (start == end) {
                cout<<"inside first condition."<<endl;
                pivotIndex = start;
                break;
            } else if ((mid + 1) < n) {
                if (nums[mid] > nums[mid + 1]) {
                    cout<<"inside second condition."<<endl;
                    pivotIndex = mid;
                }
                break;

            } else if ((mid - 1) >= 0) {
                if (nums[mid - 1] > nums[mid]) {
                    cout<<"inside second condition."<<endl;
                    pivotIndex = mid - 1;
                }
                break;

            } else if (nums[mid] < nums[start]) {
                cout<<"inside third condition."<<endl;
                end = mid - 1;
            } else {
                cout<<"inside fourth condition."<<endl;
                start = mid + 1;
            }
        }
        cout << "pivot Index : " << pivotIndex << endl;
        // int ans = binarySearch(nums, target, pivotIndex + 1, end);
        // if (ans != -1) {
        //     return ans;
        // }
        // int ans2 = binarySearch(nums, target, start, pivotIndex);
        // if (ans2 != -1) {
        //     return ans2;
        // }
        // return -1;
}