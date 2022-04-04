class Solution {

    public boolean canBeIncreasing(int[] nums) {

        int i = 0;

        int ip = 1;

        int flag = 0;

        while(ip < nums.length){

            if(nums[i] >= nums[ip] && flag == 0){

                flag = 1;

                if(ip+1 < nums.length){

                    if(nums[i] >= nums[ip+1]){

                        if(i-1 >= 0){

                            if(nums[i-1] >= nums[ip]){

                                System.out.println("1st");

                                return false;

                            }else{

                                i = ip;

                                ip = ip+1;

                                continue;

                            }

                        }

                    }else{

                        i = ip+1;

                        ip = ip+2;

                        continue;

                    }

                }

               

            }else if(nums[i] >= nums[ip] && flag == 1){

                System.out.println("3st");

                return false;

            }

            i++;

            ip++;

        }

        return true;

    }

}