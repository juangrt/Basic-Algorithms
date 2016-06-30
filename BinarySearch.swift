func binarySearch(val:Int , array:[Int]) -> Int? {
    var floor:Int = 0
    var ceil:Int = array.count
    
    var midPoint:Int? = nil //Get the Floor of this value
    var mid:Int? = nil
    
    while (mid != val) {
        midPoint = (ceil + floor)/2
        mid = array[midPoint!]

        if(ceil == floor || (ceil-floor) == 1){
           break
        }
        
        
        if (val > mid) {
            floor = midPoint!;
        } else if(val < mid) {
            ceil = midPoint!;
        }
    }
    
    if (mid == val) {
        return mid
    }
    
    return nil
}

func recursiveBinarySearch(val:Int , array:[Int]) -> Int? {
    var floor:Int = 0
    var ceil:Int = array.count
    
    let midPoint = (ceil-floor)/2
    let mid = array[midPoint];
    
    
    if(mid == val){
        return mid
    } else if(ceil == floor || (ceil - floor) == 1 ){
        return nil
    } else {
        if (val > mid) {
            floor = midPoint
        } else if(val < mid) {
            ceil = midPoint
        }
    }
    
    let newArray:[Int] = Array(array[floor..<ceil])
    return recursiveBinarySearch(val, array: newArray)
}
