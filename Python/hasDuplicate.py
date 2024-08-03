def hasDuplicate(self, nums: List[int]) -> bool:
        non_dup = set()
        for i in nums:
            non_dup.add(i)
        return len(non_dup) != len(nums)
